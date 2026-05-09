import { test, expect } from "@playwright/test";
import { runSteps, configure } from "../passmark-source/dist/index.js";

configure({
ai: {
gateway: "openrouter"
}
});

test("GitHub: Search, browse repo, and verify structure", async ({ page }) => {
test.setTimeout(180_000);

await runSteps({
page,
userFlow: "Search for a repo, browse its contents, and verify README",
steps: [
{ description: "Navigate to https://github.com" },
{ description: "Type 'passmark bug0inc' in the search bar" },
{ description: "Press Enter to submit the search" },
{ description: "Click the 'bug0inc/passmark' repository result" },
{ description: "Wait for the repository page to fully load" },
{ description: "Scroll down to view the README content" },
],
assertions: [
{ assertion: "The page title or header shows bug0inc/passmark" },
{ assertion: "The README.md file content is visible on the page" },
{ assertion: "The repository shows source code files like src/ or package.json" },
{ assertion: "The repository has a description mentioning AI or regression testing" },
],
test,
expect,
});
});
