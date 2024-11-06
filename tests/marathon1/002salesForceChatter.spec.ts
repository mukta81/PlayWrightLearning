import { TIMEOUT } from "dns";
import test, { expect } from "playwright/test";

test('Salesforce  application Lead to Opportunity', async({page})=>{

await page.goto("https://login.salesforce.com/");

  //login
await page.locator("#username").fill("mukta@testleaf.com");
await page.locator("#password").fill("qazwsx123");
await page.locator("#Login").click();

//click toggle
await page.locator(".slds-icon-waffle").click();
await page.locator("text='View All'").click();
 
//search Service in textbox
await page.locator("input[type='Search']").last().fill("Service");

//click on Service
await page.locator("//p[contains(text(),'Manage customer service')]").click();

//click on Cases
await page.locator("(//span[text()='Cases'])[1]").click();

//click on New
await page.locator("//div[text()='New']").click();

//click on search contacts
await page.getByPlaceholder("Search Contacts...").click();

//click on new contact
await page.locator("//span[text()='New Contact']").click();


//select Salutation
await page.locator("button[name='salutation']").click();
await page.locator("span[title='Mrs.']").click(); 

//enter first name 
await page.getByPlaceholder("First Name").fill("MuktaL2");

//enter last name 
await page.getByPlaceholder("Last Name").fill("AgarwalL2");

//click save button
await page.locator("button[name='SaveEdit']").last().click();

//validate 
const confirmLead = await page.locator("(//a[@class='forceActionLink']/div)[4]").last().innerText();
expect(confirmLead).toContain("Agarwal")

//close
await page.locator("(//a[@class='forceActionLink']/div)[4]/following::lightning-primitive-icon").click();


//click on search accounts
await page.getByPlaceholder("Search Accounts...").click();

//click on new accounts
await page.locator("//span[text()='New Account']").click();

//add mandatory details
await page.locator("//input[@name='Name']").fill("MuktaAccount2");
await page.locator("[name='AccountNumber']").fill("12345678");


//click on Rating
await page.locator("(//label[text()='Rating']/following::div/button)[1]").click();
await page.locator("//span[text()='Hot']").click();

//click save button
await page.locator("button[name='SaveEdit']").last().click();

//validate 
const confirmAccount = await page.locator("(//a[@class='forceActionLink']/div)[4]").last().innerText();
expect(confirmAccount).toContain("MuktaAccount2");

//click on status - new
await page.locator("//label[text()='Status']/following::button").first().click();
await page.locator("//span[text()='New']").last().click();

//click on priority - High
await page.locator("//label[text()='Priority']/following::button").first().click();
await page.locator("//span[text()='High']").click();

//click on Case Origin - Email
await page.locator("//label[text()='Case Origin']/following::button").first().click();
await page.locator("//span[text()='Email']").last().click();


//fill Subject & Description
await page.locator("[name='Subject']").fill("Product Return Request");
await page.locator("//textarea[@class='slds-textarea']").first().fill("Requesting a return for a defective product");

//click on save
await page.locator("//button[text()='Save']").click();


//click edit status
await page.locator("//button[@title='Edit Status']").last().click();

//click on status - new
await page.locator("//label[text()='Status']/following::button").first().click();
await page.locator("//span[text()='Escalated']").last().click();

//click save button
await page.locator("button[name='SaveEdit']").last().click();

//enter "Share an Update"
//await page.locator("//span[text()='Share an update...']").last().dblclick({timeout:3000});
await page.locator("//span[text()='Share an update...']").last().dblclick();
await page.locator("//div[@data-placeholder='Share an update...']").last().fill("updated data");
//await page.locator("//span[contains(text(),'Share')]/parent::button").click();
await page.getByTitle('Click, or press Ctrl+Enter').click();


//sort the data
// await page.locator("//span[@class='cuf-sortLabelTriggerWrapper'] | (//span[@class='cuf-sortLabelTriggerWrapper'])[2]").click();
// await page.locator("//span[text()='Most Recent Activity']").last().click();

//click drpopdown
await page.locator("//div[@class='slds-media']/div[2]/a").first().click();


//click like on chatter
await page.locator("//span[contains(text(),'Like on Chatter')]").click();


//validate like
const confirmLike = await page.locator("//span[contains(text(),'Post was liked')]").innerText();
expect(confirmLike).toContain("Post was liked.");

//click on Chatter
await page.locator("(//span[text()='Chatter'])[1]").click();


//await page.locator("(//div[@part='combobox'])[2]/div/lightning-base-combobox/div/div/div/button").click();
//await page.locator("//span[contains(text(),'Latest Posts')]").first().click();

//validate like
const confirmLiked = await page.locator("(//span[@title='Unlike'])[1]").innerText();
expect(confirmLiked).toContain("Liked");

})