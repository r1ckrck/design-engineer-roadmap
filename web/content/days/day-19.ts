import type { Day } from "../types";

export const day19: Day = {
  id: 19,
  phaseId: 7,
  title: "Working with Media Assets",
  estMinutes: 60,
  goal: "Handle images and video with FFmpeg — a core skill for a designer who now ships.",
  outcome:
    "Hands-on with the core media jobs — resize, optimize, extract a frame, make a GIF — and a sense of the skill that wraps them.",
  setup: "Open Claude Code inside my-first-site. Have an image or short video handy.",
  steps: [
    {
      n: 1,
      title: "Understand FFmpeg",
      body: [
        {
          type: "text",
          md: "[FFmpeg](https://ffmpeg.org) is a powerful command-line tool for working with media — converting formats, resizing, optimizing, and extracting frames. It is the engine behind most media work.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Explain what FFmpeg is and the kinds of media jobs it handles.",
        },
      ],
    },
    {
      n: 2,
      title: "Optimize an image",
      body: [
        {
          type: "text",
          md: "Put an image in the project, then have Claude shrink it for the web and explain the change.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Resize and optimize this image for the web, and explain what changed and why it is smaller.",
        },
      ],
    },
    {
      n: 3,
      title: "Extract a frame from a video",
      body: [
        {
          type: "text",
          md: "With a short video handy, pull one still out of it.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Pull a single frame from this video as an image, and explain the command.",
        },
      ],
    },
    {
      n: 4,
      title: "Turn a video into a GIF",
      body: [
        {
          type: "text",
          md: "A GIF trades file size against quality — a good prompt makes Claude name that trade-off as it converts.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Convert this short video into an optimized GIF and explain the trade-offs in size and quality.",
        },
      ],
    },
    {
      n: 5,
      title: "Understand what wraps this",
      body: [
        {
          type: "text",
          md: "You do not need to memorize FFmpeg's commands. In Phase 8 you install a skill called media-processing that packages exactly these jobs, so you ask in plain English and it runs the right command.",
        },
        {
          type: "copyable",
          kind: "prompt",
          label: "Ask Claude",
          text: "Summarize the media jobs I just did and how a skill would make them repeatable.",
        },
        {
          type: "callout",
          kind: "note",
          body: "As a designer who ships, you own the assets as well as the layout. Media is just another thing code can process — resize, optimize, convert — and that keeps the work in your control.",
        },
      ],
    },
  ],
  recap:
    "You ran the core media jobs with FFmpeg — resize, optimize, extract, convert — and saw how a skill turns them into plain-English requests.",
};
