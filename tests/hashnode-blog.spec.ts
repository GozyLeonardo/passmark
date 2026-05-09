import { test, expect } from "@playwright/test";
import { runSteps, configure } from "../passmark-source/dist/index.js";

configure({
ai: {
gateway: "openrouter"
}
});

test("Hashnode: Browse homepage and explore a blog post", async ({ page }) => {
test.setTimeout(180_000);

await runSteps({
page,
userFlow: "Browse Hashnode homepage and read a featured article",
steps: [
{ description: "Navigate to https://hashnode.com" },
{ description: "Wait for the homepage to fully load" },
{ description: "Scroll down to see blog post listings or featured articles" },
{ description: "Click on any article title that is visible" },
{ description: "Wait for the article page to load completely" },
],
assertions: [
{ assertion: "An article page is now displayed with a title at the top" },
{ assertion: "The article contains readable body text" },
{ assertion: "An author name or profile image is visible" },
{ assertion: "The page is on hashnode.com or a hashnode.dev subdomain" },
],
test,
expect,
});
});
