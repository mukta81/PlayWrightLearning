import path, { dirname } from "path";
import {test, expect } from "playwright/test";

test('Salesforce  application File Upload', async({page})=>{

let accountName = "Mukta Agarwal";

await page.goto("https://login.salesforce.com/");

  //login
 //await page.locator("#username").fill("ravindran.ramdas@testleaf.com");
 //await page.locator("#password").fill("Ravi#1432");

await page.locator("#username").fill("mukta@testleaf.com");
await page.locator("#password").fill("qazwsx123");
await page.locator("#Login").click();

//click toggle
await page.locator(".slds-icon-waffle").click();
await page.locator("text='View All'").click();
 
//search Accounts in textbox
await page.locator("input[type='Search']").last().fill("Accounts");

//click Accounts
await page.getByText("Accounts").last().click();

//click New
await page.getByTitle("New").last().click();

//add Account Name
await page.locator("//input[@name='Name']").fill(accountName);

//Select Rating: High
await page.locator("(//label[text()='Rating']/following::div/button)[1]").click();
await page.locator("//span[text()='Warm']").click();

//Select Type: Prospect
await page.locator("(//label[text()='Type']/following::div/button)[1]").click();
await page.locator("//span[text()='Prospect']").click();


//Select Industry: Banking
await page.locator("(//label[text()='Industry']/following::div/button)[1]").click();
await page.locator("//span[text()='Banking']").click();

//Select Ownership: Public
await page.locator("(//label[text()='Ownership']/following::div/button)[1]").click();
await page.locator("//span[text()='Public']").click();

//click save button
await page.locator("button[name='SaveEdit']").last().click();

//validate 
const confirmAccount = await page.locator("(//a[@class='forceActionLink']/div)[4]").last().innerText();
expect(confirmAccount).toContain(accountName);

await page.waitForTimeout(5000);

//file upload
//await page.locator("//input[@name='fileInput']").setInputFiles("data/testFile.txt")
await page.locator("//input[@name='fileInput']").setInputFiles(["data/testFile.txt","data/testFile2.txt"])

//click done button
const doneButton = page.locator("text=Done").last();
await doneButton.waitFor({ state: 'visible' });
await doneButton.click();

//validate
const finalMsg = await page.getByText('files were', {exact:false}).innerText();
//console.log("Msg:"+finalMsg)
expect(["2 files were uploaded.", "2 files were added to Account."]).toContain(finalMsg);

await page.waitForTimeout(5000);
})