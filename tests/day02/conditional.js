function launchBrowser(browserName) {
  if (browserName.toLowerCase() == "chrome") {
    console.log("It is Chrome Browser");
  } else {
    console.log("It is not a Chrome Browser");
  }
}

function runTests(testType) {
  switch (testType.toLowerCase()) {
    case "smoke": {
      console.log("Smoke Testing");
      break;
    }

    case "sanity": {
      console.log("Sanity Testing");
      break;
    }

    case "regression": {
      console.log("Regression Testing");
      break;
    }

    default: {
      console.log("All others Testing");
      break;
    }
  }
}

runTests("smoke");

launchBrowser("Chrome");
