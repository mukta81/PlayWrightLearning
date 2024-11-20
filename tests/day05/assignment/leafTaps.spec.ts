import {test} from "playwright/test";

test('LeafTaps', async({page})=>{
//open application
await page.goto("http://leaftaps.com/opentaps/control/login");

//fill login details
await page.locator("#username").fill("demosalesmanager");
await page.locator("#password").fill("crmsfa");

//click on login button
await page.locator(".decorativeSubmit").click();

//Click on CRM/SFA link
await page.locator('text="CRM/SFA"').click();

//Click on Leads
await page.locator('text="Leads"').click();

//Click on Create Lead
await page.locator('text="Create Lead"').first().click();

//enter mandatory details
await page.locator("#createLeadForm_companyName").fill("TL");
await page.locator("#createLeadForm_firstName").fill("Mukta");
await page.locator("#createLeadForm_lastName").fill("Agarwal");

//trying to select value of dropdown with different ways
await page.selectOption("#createLeadForm_dataSourceId", {index: 1})
await page.waitForTimeout(2000);
await page.selectOption("#createLeadForm_dataSourceId", {value: "LEAD_CONFERENCE"})
await page.waitForTimeout(2000);
await page.selectOption("#createLeadForm_dataSourceId", {label: "Direct Mail"})

//click submit
await page.locator(".smallSubmit").click();

//click Edit
await page.locator('text="Edit"').click();

//change Company Name
//await page.locator("#createLeadForm_companyName").clear();
await page.locator("#updateLeadForm_companyName").fill("Testleaf");

//click submit
await page.locator(".smallSubmit").nth(0).click();

await page.waitForTimeout(3000);
})