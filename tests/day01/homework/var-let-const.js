const browserVersion = "Chrome";  // Global constant

function getBrowserVersion() {
  if (browserVersion === "Chrome") {
    let browserVersion = "Firefox";  // Local variable declared with 'var'
  }
  console.log("browserVersion is: " + browserVersion);  // Output is "Firefox"
}

getBrowserVersion();  // Call the function
