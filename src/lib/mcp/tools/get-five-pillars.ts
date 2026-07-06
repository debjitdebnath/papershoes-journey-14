import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const PILLARS = [
  {
    name: "Symbolic Action",
    summary:
      "The run itself as a visible act of endurance that draws attention to plastic pollution.",
  },
  {
    name: "Community Activation",
    summary:
      "School visits, community runs, and local clean-ups that mobilise people along the route.",
  },
  {
    name: "Data & Accountability",
    summary:
      "Measuring waste collected, people reached, and partners engaged to keep impact transparent.",
  },
  {
    name: "Youth Education",
    summary:
      "Workshops and storytelling with students so the next generation carries the mission forward.",
  },
  {
    name: "Legacy & Systems Change",
    summary:
      "Building lasting partnerships and policy conversations that outlive the 80-day run.",
  },
];

export default defineTool({
  name: "get_five_pillars",
  title: "Get Five Pillars of Change",
  description:
    "Returns the campaign's Five Pillars of Change framework. Optionally filter by pillar name.",
  inputSchema: {
    pillar: z
      .string()
      .optional()
      .describe("Optional pillar name to filter (case-insensitive substring match)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ pillar }) => {
    const q = (pillar ?? "").toLowerCase().trim();
    const results = q ? PILLARS.filter((p) => p.name.toLowerCase().includes(q)) : PILLARS;
    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { pillars: results },
    };
  },
});
