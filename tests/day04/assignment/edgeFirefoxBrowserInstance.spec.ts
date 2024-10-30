import { chromium, firefox, test, webkit } from "@playwright/test";

test("To launch a browser", async () => {

const browserInstanceEdge = await chromium.launch({ headless: false, channel:"msedge" });
const browserContextEdge = await browserInstanceEdge.newContext();
const pageEdge = await browserContextEdge.newPage();
await pageEdge.goto("https://www.redbus.in/");

const browserInstanceFirefox = await firefox.launch({ headless: false });
const browserContextFirefox = await browserInstanceFirefox.newContext();
const pageFirefox = await browserContextFirefox.newPage();
await pageFirefox.goto("https://www.flipkart.com");

const redBusTitle = await pageEdge.title();
const redBusUrl = pageEdge.url();
const flipkartTitle = await pageFirefox.title();
const flipkartUrl = pageFirefox.url();

console.log("Title: Redbus - " + redBusTitle);
console.log("URL: Redbus - " + redBusUrl);
console.log("Title: Flipkart - " + flipkartTitle);
console.log("URL: Flipkart - " + flipkartUrl);

await browserInstanceEdge.close();
await browserInstanceFirefox.close();

});