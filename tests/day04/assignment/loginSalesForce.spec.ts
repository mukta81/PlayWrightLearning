import {test, chromium } from "@playwright/test";


test("launch SalesForce browser", async () => {

const browserInstance = await chromium.launch({ headless:false});

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();

await page.goto("https://login.salesforce.com/");

await page.waitForTimeout(3000); 

console.log("completed")
});