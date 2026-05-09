import { test, expect } from "@playwright/test";
import { runSteps, configure } from "../passmark-source/dist/index.js";

configure({
ai: {
gateway: "openrouter"
}
});

test("Playwright: Browse docs and find test configuration guide", async ({ page }) => {
test.setTimeout(180_000);

await runSteps({
page,
userFlow: "Navigate Playwright docs and find configuration documentation",
steps: [
{ description: "Navigate to https://playwright.dev/docs/intro" },
{ description: "Wait for the documentation page to fully load" },
{ description: "Verify the page is about Playwright testing framework" },
{ description: "Click on 'Configuration' or 'Test configuration' in the sidebar navigation" },
{ description: "Wait for the configuration page to load" },
{ description: "Scroll down to view configuration options" },
],
assertions: [
{ assertion: "The page is about Playwright test configuration" },
{ assertion: "There is a code example showing playwright.config.ts or similar configuration file" },
{ assertion: "The page mentions browsers like chromium, firefox, or webkit" },
{ assertion: "The documentation has working navigation links in the sidebar" },
],
test,
expect,
});
});
