
function launchBrowser() {
    if (browser === "chrome") {
        console.log("chrome");
    }
    else if (browser === "firefox") {
        console.log("firefox");
    } else if (browser === "Safari") {
        console.log("Safari");
    } else if (browser === "others") {
        console.log("un supported browser");
    }

}
let browser = "firefox";
launchBrowser();

function runtest(){
let testType = 'regression';

switch (testType) {

    case 'smoke':
        testType = 'smoke';
        break;
    case 'sanity':
        testType = 'sanity';
        break;
    case 'regression':
        testType = 'regression';
        break;
    default:
        testType = 'not found';
        break;
}
console.log(`The value is ${testType}`);
}
runtest();