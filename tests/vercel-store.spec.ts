import { test, expect } from "@playwright/test";
import { runSteps, configure } from "../passmark-source/dist/index.js";

configure({
ai: {
gateway: "openrouter"
}
});

test("Vercel Store: Full e-commerce cart flow", async ({ page }) => {
test.setTimeout(180_000);

await runSteps({
page,
userFlow: "Browse products, select options, and add to cart",
steps: [
{ description: "Navigate to https://demo.vercel.store" },
{ description: "Verify the homepage loads with product listings visible" },
{ description: "Click Acme Circles T-Shirt" },
{ description: "Select color", data: { value: "White" } },
{ description: "Select size", data: { value: "S" } },
{ description: "Add to cart", waitUntil: "My Cart is visible" },
],
assertions: [
{ assertion: "The My Cart sidebar or panel is visible on the page" },
{ assertion: "Acme Circles T-Shirt appears as an item in the cart" },
{ assertion: "The cart shows the correct color White and size S for the product" },
{ assertion: "A checkout or continue shopping option is available" },
],
test,
expect,
});
});

