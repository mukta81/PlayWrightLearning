import test, { expect } from "playwright/test";

test('Salesforce  application Lead to Opportunity', async({page})=>{

let firstName = "MuktaLead1"
let opportunityName ='MuktaOpportunity4' ;

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
 
//search Marketing in textbox
await page.locator("input[type='Search']").last().fill("Marketing");

//click on Marketing CRM Classic
await page.locator("//p[contains(text(),'marketing efforts')]").click();


//click on Leads
await page.locator("(//span[text()='Leads'])[1]").click();

//click on New
//await page.locator("//button[@name='New'] | //div[text()='New']").click();
await page.locator("//div[@title='New']").click();

//select Salutation
await page.locator("button[name='salutation']").click();
await page.locator("span[title='Mrs.']").click(); 

//enter first name 
await page.getByPlaceholder("First Name").fill(firstName);

//enter last name 
await page.getByPlaceholder("Last Name").fill("AgarwalLead1");

//enter company name
await page.locator("input[name='Company']").fill("TestLeafLead1");

//click save button
await page.locator("button[name='SaveEdit']").click();

//validate 
//const confirmLead = await page.locator("//a[@class='forceActionLink']/div").last().innerText();
const confirmLead = await page.locator("//span[@data-aura-class='forceActionsText']").innerText();
console.log("confirmlead"+confirmLead)
expect(confirmLead).toContain("Lead")

//click on convert button
await page.locator("//ul[@class='slds-button-group-list']/li[4]").click();
await page.locator("//span[text()='Convert']").click();

//enter new Opportunity
await page.locator("(//button[@class='slds-button transparentButton'])[3]").click();
await page.locator("((//button[@class='slds-button transparentButton'])[3]/following::input)[1]").clear();
await page.locator("((//button[@class='slds-button transparentButton'])[3]/following::input)[1]").fill(opportunityName)

//click on convert
await page.locator("//button[text()='Convert']").click();

//validate
const confirmConvertedLead = await page.locator("//h2[text()='Your lead has been converted']").innerText();
expect(confirmConvertedLead).toContain("Your lead has been converted")

//click on 'Go to leads' button
await page.locator("//button[text()='Go to Leads']").click();

//search Lead
await page.locator("//input[@name='Lead-search-input']").fill(firstName);
await page.keyboard.press('Enter');

//click on Opportunities
await page.locator("(//span[text()='Opportunities'])[1]").click();


//search opportunity
await page.getByPlaceholder("Search this list...").fill(opportunityName);
await page.keyboard.press('Enter');

//validateOppotunity
const confirmOpportunity = await page.locator("//span[@data-aura-class='forceInlineEditCell']").first().innerText();
expect(confirmOpportunity).toContain(opportunityName)


})