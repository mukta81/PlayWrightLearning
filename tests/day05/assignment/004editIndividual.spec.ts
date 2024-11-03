import test, { expect } from "playwright/test";

test('Salesforce', async({page})=>{
let lastName="Agarwal"
let firstName="Mukta"

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

//search on Individuals Last Name
await page.locator("//input[@name='Individual-search-input']").fill(lastName);
await page.keyboard.press('Enter');

await page.waitForTimeout(5000);

await page.locator("(//td[@role='gridcell']/span/div/following::div)[1]").click();

await page.locator("//a[@title='Edit']").click();

await page.locator("(//span[@title='required']/following::div/div/span/following::div/div/div/div/a)[1]").click();

await page.locator("((//div[@role='listbox'])[2]/ul/li)[2]/a").click();

await page.getByPlaceholder("First Name").fill(firstName);

await page.locator("(//span[text()='Save'])[2]").click();
 const result = await page.locator("//div[@class='slds-list--inline']/div/div/div/span").innerText();

 expect(result).toContain(firstName + " " + lastName)

// await page.waitForTimeout(3000);
})