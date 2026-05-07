import { test, expect } from "@playwright/test";
import { runSteps, configure } from "../passmark-source/dist/index.js";

configure({
ai: {
gateway: "openrouter"
}
});

test("Vercel Store: Add product to cart", async ({ page }) => {
test.setTimeout(180_000);

console.log("Starting Vercel Store test...");

await runSteps({
page,
userFlow: "Add product to cart on Vercel demo store",
steps: [
{ description: "Navigate to https://demo.vercel.store" },
{ description: "Click Acme Circles T-Shirt" },
{ description: "Select color", data: { value: "White" } },
{ description: "Select size", data: { value: "S" } },
{ description: "Add to cart", waitUntil: "My Cart is visible" },
],
assertions: [
{ assertion: "My Cart is visible with Acme Circles T-Shirt" }
],
test,
expect,
});

console.log("Vercel Store test completed.");
});

