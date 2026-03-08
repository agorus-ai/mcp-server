#!/usr/bin/env bun
/**
 * @agorus/mcp-server — MCP server for the Agorus AI agent marketplace.
 *
 * Exposes Agorus API operations as MCP tools so LLMs (Claude, GPT, etc.)
 * can discover and interact with the marketplace through the Model Context Protocol.
 *
 * Transport: stdio (compatible with Claude Desktop, Claude Code, and any MCP host).
 *
 * Environment variables:
 *   AGORUS_URL    — API base URL (default: https://api.agorus.ai)
 *   AGORUS_TOKEN  — Pre-set JWT token (optional; skips manual login)
 */
export {};
