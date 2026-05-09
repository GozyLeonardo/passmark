import { test, expect } from "@playwright/test";
import { runSteps } from "../passmark-source/dist/index.js";

test("Smoke test - Passmark loads correctly", async ({ page }) => {
test.setTimeout(30_000);

await runSteps({
page,
userFlow: "Navigate to example.com",
steps: [
{ description: "Go to https://example.com" }
],
test,
expect,
});
});
