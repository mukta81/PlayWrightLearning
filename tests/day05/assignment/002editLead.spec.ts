import {expect, test} from "playwright/test";

test('LeafTaps', async({page})=>{
//open application
await page.goto("http://leaftaps.com/opentaps/control/main");

//fill user details
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

//click submit
await page.locator(".smallSubmit").click();

//click Edit
await page.locator('text="Edit"').click();

//change Company Name
await page.locator("#updateLeadForm_companyName").fill("Testleaf");

//click submit
await page.locator(".smallSubmit").nth(0).click();

const result = await page.locator("#viewLead_companyName_sp").innerText()

expect(result).toContain("Testleaf");
})