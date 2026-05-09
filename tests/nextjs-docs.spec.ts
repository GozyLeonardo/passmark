import { test, expect } from "@playwright/test";
import { runSteps, configure } from "../passmark-source/dist/index.js";

configure({
ai: {
gateway: "openrouter"
}
});

test("Next.js: Browse docs and explore getting started guide", async ({ page }) => {
test.setTimeout(180_000);

await runSteps({
page,
userFlow: "Navigate Next.js docs and explore the getting started section",
steps: [
{ description: "Navigate to https://nextjs.org/docs" },
{ description: "Wait for the documentation page to fully load" },
{ description: "Verify the page is about Next.js framework" },
{ description: "Click on 'Getting Started' or the first section in the sidebar" },
{ description: "Wait for the page to load" },
{ description: "Scroll down to view the installation or setup instructions" },
],
assertions: [
{ assertion: "The page is about Next.js getting started or installation" },
{ assertion: "There are code examples showing npx create-next-app or similar commands" },
{ assertion: "The page mentions React as the underlying framework" },
{ assertion: "The documentation has a sidebar with multiple sections for navigation" },
{ assertion: "There is a link or reference to deploying on Vercel" },
],
test,
expect,
});
});
