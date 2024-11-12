import { lookup } from "dns";
import test, { expect } from "playwright/test";

test('merge lead: window handling', async({page, context})=>{
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

//Click on Merge Lead
await page.locator('text="Merge Leads"').click();

//click "from" lookup
const lookFromPromise = context.waitForEvent('page');
await page.getByAltText("Lookup").first().click();
const lookFromPage = await lookFromPromise;

//Select the first resulting lead id
await lookFromPage.locator("//div[@class='x-grid3-body']/div[1]/table//tr[1]/td[1]/div/a").click();
// await lookFromPage.close();


//click "to" lookup
const lookToPromise = context.waitForEvent('page');
await page.getByAltText("Lookup").last().click();
const lookTOPage = await lookToPromise;

await lookTOPage.locator("//div[@class='x-grid3-body']/div[2]/table//tr[1]/td[1]/div/a").click();
//await lookTOPage.close();


//handling alert one time
page.once("dialog", alertType=>{
const alertMsg = alertType.message();
const type = alertType.type();
console.log(`Message: ${alertMsg} ,and type: ${type}`)
alertType.accept();
})

//click merge button
await page.getByText("Merge", {exact:true}).click();

//assert title
await page.waitForTimeout(2000);
const titleResult = await page.title();
expect(titleResult).toContain("View Lead");

await page.waitForTimeout(5000);
})