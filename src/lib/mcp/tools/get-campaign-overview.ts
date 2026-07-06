import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_campaign_overview",
  title: "Get Campaign Overview",
  description:
    "Returns a high-level overview of the Paper Shoes 80 campaign — 80 marathons in 80 days across India to fight plastic pollution.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          "Paper Shoes 80 is an endurance-driven environmental campaign: 80 marathons in 80 days across India.",
          "Mission: turn endurance into environmental action against plastic pollution through school visits, community runs, and clean-ups.",
          "Runners: Matteo, Nagaraju, and Michael.",
          "Framework: Five Pillars of Change — Symbolic Action, Community Activation, Data & Accountability, Youth Education, Legacy & Systems Change.",
          "Donations: https://gofund.me/62b8c3961",
          "Instagram: https://www.instagram.com/papershoes80",
          "YouTube: https://youtu.be/7zzznw3fGyA",
        ].join("\n"),
      },
    ],
  }),
});
