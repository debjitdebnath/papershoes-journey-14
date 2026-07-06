import { defineMcp } from "@lovable.dev/mcp-js";
import getCampaignOverview from "./tools/get-campaign-overview";
import getFivePillars from "./tools/get-five-pillars";
import getRunners from "./tools/get-runners";

export default defineMcp({
  name: "paper-shoes-80-mcp",
  title: "Paper Shoes 80 MCP",
  version: "0.1.0",
  instructions:
    "Public read-only tools for the Paper Shoes 80 campaign: overview, runners, and the Five Pillars of Change framework. Use these to answer questions about the campaign.",
  tools: [getCampaignOverview, getRunners, getFivePillars],
});
