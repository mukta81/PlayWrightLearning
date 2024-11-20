import {test, expect } from "playwright/test";

test('Salesforce', async({page})=>{

await page.goto("https://login.salesforce.com/");

//login
await page.locator("#username").fill("mukta@testleaf.com");
await page.locator("#password").fill("qazwsx123");
await page.locator("#Login").click();

//click toggle
await page.locator(".slds-icon-waffle").click();
await page.locator("text='View All'").click();
 
//Click on Sales from App Launcher
await page.locator("text='Sales'").click();

//click on Leads
await page.locator("text='Leads'").click();

//click on New
await page.locator("button[name='New']").click();

//select Salutation
await page.locator("button[name='salutation']").click();
await page.locator("span[title='Mrs.']").click(); 

//enter last name 
await page.getByPlaceholder("Last Name").fill("Agarwal");

//enter company name
await page.locator("input[name='Company']").fill("TestLeaf");

//click save button
await page.locator("button[name='SaveEdit']").click();

const finalName = await page.locator("//a[@class='forceActionLink']/div").innerText();

expect(finalName).toContain("Agarwal")
})