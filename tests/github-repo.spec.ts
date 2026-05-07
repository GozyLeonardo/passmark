import { test, expect } from "@playwright/test";
import { runSteps, configure } from "../passmark-source/dist/index.js";

configure({
ai: {
gateway: "openrouter"
}
});

test("GitHub: Search and browse a public repo", async ({ page }) => {
test.setTimeout(180_000);

console.log("Starting GitHub test...");

await runSteps({
page,
userFlow: "Search for a repo and browse its README",
steps: [
{ description: "Navigate to https://github.com" },
{ description: "Type 'passmark bug0inc' in the search bar" },
{ description: "Press Enter to submit the search" },
{ description: "Click the 'bug0inc/passmark' repository result" },
{ description: "Verify the README.md content is visible on the page" },
],
assertions: [
{ assertion: "The page shows the bug0inc/passmark repository with README content visible" }
],
test,
expect,
});

console.log("GitHub test completed.");
});
