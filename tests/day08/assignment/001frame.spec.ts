import {test, expect } from "playwright/test";

test(`elements inside frames`, async({page})=>{

//open the link
await page.goto("https://dev198115.service-now.com/");

//login
await page.locator("#user_name").fill("admin");
await page.locator("#user_password").fill("NFD0$Usr6d=v");
await page.locator("//button[text()='Log in']").click();

//click All
await page.getByLabel('All', { exact: true }).click();

//enter in search box: Service Catalog
await page.getByPlaceholder("Filter").fill("Service Catalog");
await page.waitForTimeout(2000);
await page.keyboard.press('Enter');

//click Mobiles
const iframe = await page.frameLocator("iframe");
//await page.frameLocator("iframe").getByText("Mobiles").first().click();
await iframe.getByText("Mobiles").first().click();

//click Apple iPhone 13
//await page.frameLocator("iframe").locator("text=Apple iPhone 13").first().click();
await iframe.locator("text=Apple iPhone 13").first().click();

//select No for "Is this a replacement for a lost or broken iPhone?"
//const iframe = await page.frameLocator("iframe");
await iframe.getByText('No', { exact: true }).click();

//select dropdown
await iframe.locator('select').first().selectOption({index:1})

// choose the color
await iframe.getByText('Starlight').click();

//"Choose the storage"
await iframe.locator("(//div[@role='radiogroup'])[2]/span[5]/div/span/input").click({force: true});
//iframe.locator("(//div[@role='radiogroup'])[3]/span[2]/label").click();

//click Order Now button
await iframe.getByTitle("Order Now").click();

//check message
const msgStatus = await iframe.locator(".order_summary").innerText()
expect(msgStatus).toContain("Thank you, your request has been submitted");
await page.waitForTimeout(3000);

//print title
const title = await page.title();
console.log(title)

//print url
const url = page.url();
console.log(url)
})
