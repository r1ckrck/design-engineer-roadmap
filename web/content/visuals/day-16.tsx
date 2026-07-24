import { Diagram, MiniTable } from "@/components/viz";

export default function Day16Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Native web tools versus Playwright"
        caption="Reach for the powerful tool only when the simple one cannot do the job."
      >
        <MiniTable
          head={["Tool", "Use it for"]}
          rows={[
            ["Native search + fetch", "reading and researching — the default"],
            ["Playwright", "testing your site, watching a real browser, getting past a block"],
          ]}
        />
      </Diagram>

      <Diagram label="Headless versus headed" caption="Same browser, two modes.">
        <MiniTable
          head={["Mode", "What happens"]}
          rows={[
            ["Headless", "runs invisibly — fast, for automated checks"],
            ["Headed", "a real window opens — watch it, and get past bot-blocking"],
          ]}
        />
      </Diagram>
    </div>
  );
}
