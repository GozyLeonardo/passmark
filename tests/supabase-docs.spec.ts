import { test, expect } from "@playwright/test";
import { runSteps, configure } from "../passmark-source/dist/index.js";

configure({
ai: {
gateway: "openrouter"
}
});

test("Supabase: Browse docs and search for a feature", async ({ page }) => {
test.setTimeout(180_000);

await runSteps({
page,
userFlow: "Navigate Supabase docs, use search, and browse a feature page",
steps: [
{ description: "Navigate to https://supabase.com/docs" },
{ description: "Wait for the documentation page to fully load" },
{ description: "Find and click the search bar or search icon" },
{ description: "Type 'authentication' in the search field" },
{ description: "Click the first search result about authentication" },
{ description: "Wait for the authentication documentation page to load" },
],
assertions: [
{ assertion: "The page is about Supabase authentication" },
{ assertion: "There are code examples or code blocks visible on the page" },
{ assertion: "The documentation has a sidebar or table of contents for navigation" },
{ assertion: "The page mentions sign up, sign in, or user management concepts" },
],
test,
expect,
});
});