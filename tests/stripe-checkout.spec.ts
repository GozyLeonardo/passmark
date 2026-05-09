import { test, expect } from "@playwright/test";
import { runSteps, configure } from "../passmark-source/dist/index.js";

configure({
ai: {
gateway: "openrouter"
}
});

test("Stripe: Navigate docs and verify test card reference", async ({ page }) => {
test.setTimeout(180_000);

await runSteps({
page,
userFlow: "Browse Stripe testing documentation and verify test card details",
steps: [
{ description: "Navigate to https://docs.stripe.com/testing" },
{ description: "Wait for the documentation page to fully load" },
{ description: "Scroll down to find the section about test card numbers" },
{ description: "Look for the basic test card number 4242424242424242" },
{ description: "Scroll further to find information about testing different card brands" },
],
assertions: [
{ assertion: "The page is a Stripe documentation page about testing" },
{ assertion: "The test card number 4242424242424242 is visible on the page" },
{ assertion: "The page mentions Visa, Mastercard, or other card brands for testing" },
{ assertion: "There is information about testing declined payments or error scenarios" },
],
test,
expect,
});
});

