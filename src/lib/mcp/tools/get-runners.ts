import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const RUNNERS = [
  {
    name: "Matteo",
    role: "Endurance runner and campaign co-founder",
    bio: "Italian ultra-runner leading the 80-marathon effort across India.",
  },
  {
    name: "Nagaraju",
    role: "Endurance runner",
    bio: "Indian long-distance runner anchoring the campaign's community activations.",
  },
  {
    name: "Michael",
    role: "Endurance runner",
    bio: "Runner and storyteller documenting the daily journey.",
  },
];

export default defineTool({
  name: "get_runners",
  title: "Get Runners",
  description: "Returns the runners taking part in the Paper Shoes 80 campaign.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(RUNNERS, null, 2) }],
    structuredContent: { runners: RUNNERS },
  }),
});
