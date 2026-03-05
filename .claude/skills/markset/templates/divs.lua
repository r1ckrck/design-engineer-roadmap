-- =============================================================================
-- Pandoc Lua Filter: divs.lua
-- Converts fenced divs to LaTeX environments for callouts and placeholders
-- =============================================================================

-- Callout types we support
local callout_types = {
  note = true,
  tip = true,
  warning = true,
  important = true
}

-- Handle Div elements
function Div(el)
  -- Get the first class (div type)
  local div_type = el.classes[1]
  
  if not div_type then
    return nil
  end
  
  -- Handle callouts (note, tip, warning, important)
  if callout_types[div_type] then
    local content = pandoc.write(pandoc.Pandoc(el.content), 'latex')
    return pandoc.RawBlock('latex',
      '\\begin{' .. div_type .. '}\n' ..
      content ..
      '\\end{' .. div_type .. '}'
    )
  end
  
  -- Handle image-placeholder
  if div_type == 'image-placeholder' then
    -- Extract text content from the div
    local text_content = pandoc.utils.stringify(el.content)
    
    -- Escape special LaTeX characters
    text_content = text_content:gsub('%%', '\\%%')
    text_content = text_content:gsub('&', '\\&')
    text_content = text_content:gsub('#', '\\#')
    text_content = text_content:gsub('_', '\\_')
    
    return pandoc.RawBlock('latex',
      '\\begin{imageplaceholder}\n' ..
      text_content ..
      '\n\\end{imageplaceholder}'
    )
  end
  
  -- Return unchanged if not a known type
  return nil
end

-- Handle Table elements to move captions below
function Table(el)
  -- Only modify for FORMAT == 'latex'
  if FORMAT ~= 'latex' then
    return nil
  end

  -- Only process if there's a caption
  if not el.caption or #el.caption.long == 0 then
    return nil
  end

  -- Get caption text
  local caption_text = pandoc.write(pandoc.Pandoc(el.caption.long), 'latex')

  -- Create a table without caption to avoid double-counting
  local table_without_caption = el:clone()
  table_without_caption.caption = pandoc.Caption()

  -- Generate the table LaTeX without caption
  local table_latex = pandoc.write(pandoc.Pandoc({table_without_caption}), 'latex')

  -- Add caption after \end{longtable} with minimal spacing
  table_latex = table_latex:gsub('(\\end{longtable})',
    '%1\n\\vspace{2pt}\n\\captionof{table}{' .. caption_text .. '}')

  return pandoc.RawBlock('latex', table_latex)
end

-- Handle inline Code elements
function Code(el)
  -- Only for LaTeX output
  if FORMAT ~= 'latex' then
    return nil
  end

  -- Escape special LaTeX characters in code content
  local code_text = el.text
  code_text = code_text:gsub('\\', '\\textbackslash{}')
  code_text = code_text:gsub('{', '\\{')
  code_text = code_text:gsub('}', '\\}')
  code_text = code_text:gsub('%$', '\\$')
  code_text = code_text:gsub('&', '\\&')
  code_text = code_text:gsub('%%', '\\%')
  code_text = code_text:gsub('#', '\\#')
  code_text = code_text:gsub('_', '\\_')
  code_text = code_text:gsub('%^', '\\textasciicircum{}')
  code_text = code_text:gsub('~', '\\textasciitilde{}')

  -- Use custom inlinecode command
  return pandoc.RawInline('latex', '\\inlinecode{' .. code_text .. '}')
end

-- Handle CodeBlock elements
function CodeBlock(el)
  -- Only for LaTeX output
  if FORMAT ~= 'latex' then
    return nil
  end

  -- Check if this is an ASCII art block
  local is_ascii = false
  for _, class in ipairs(el.classes) do
    if class == 'ascii' or class == 'asciiart' then
      is_ascii = true
      break
    end
  end

  -- For ASCII art blocks, use the asciiart style
  if is_ascii then
    local code_text = el.text
    return pandoc.RawBlock('latex',
      '\\begin{lstlisting}[style=asciiart]\n' ..
      code_text ..
      '\n\\end{lstlisting}'
    )
  end

  -- For regular code blocks, replace Unicode symbols with math mode LaTeX commands
  -- mathescape=true in listings allows $...$ to be rendered as math
  local code_text = el.text
  code_text = code_text:gsub('✓', '$\\checkmark$')
  code_text = code_text:gsub('✗', '$\\times$')

  -- Update the code block text
  el.text = code_text
  return el
end

return {
  { Div = Div },
  { Table = Table },
  { Code = Code },
  { CodeBlock = CodeBlock }
}
