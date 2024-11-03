import test, { expect } from "playwright/test";

test('Salesforce', async({page})=>{
let lastName="Agarwal"
await page.goto("https://login.salesforce.com/");

//login
await page.locator("#username").fill("mukta@testleaf.com");
await page.locator("#password").fill("qazwsx123");
await page.locator("#Login").click();

//click toggle
await page.locator(".slds-icon-waffle").click();
await page.locator("text='View All'").click();
 
//Click on Individuals from App Launcher
await page.locator("//p[text()='Individuals']").click();

//await page.waitForTimeout(10000);

await page.locator("((//span[contains(text(),'Individuals')])[1]/following::div)[1]").click();

await page.locator("//span[text()='New Individual']").click();

await page.getByPlaceholder("Last Name").fill(lastName);

await page.locator("//button[@title='Save']/span").click();

const result = await page.locator("//div[@class='slds-list--inline']/div/div/div/span").innerText();

expect(result).toContain(lastName)


})