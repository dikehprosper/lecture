// require your node modules
const bot = require("puppeteer");
const fs = require("fs");
const { proxyRequest } = require("puppeteer-page-proxy");



async function getRandomItem(link) {
    let data = await fs.readFileSync(link, "utf-8");
    let proccessedData = JSON.parse(data)
    let proccessedDataLength = proccessedData.length;
    let urlIndex = Math.floor(Math.random() * proccessedDataLength)
    return (proccessedData[urlIndex])
}

async function getAllCookies(link) {
    let data = await fs.readFileSync(link, "utf-8");
    let proccessedData = JSON.parse(data)
    return proccessedData
}



async function runAdsenseBot() {

    const botConfiguration = {
        headless: false
    }
    console.log(botConfiguration)
    let userAgent = await getRandomItem("assets/lists-of-UA.json")
    console.log(" we have picked a user agent  :", userAgent)
    let url = await getRandomItem("assets/lists-of-links.json")
    console.log(" we have picked a link", url)
    //let proxy = await getRandomItem("assets/lists-of-proxy.json")
    // console.log(" we have picked a Proxy", Proxy)
    let cookies = await getAllCookies("assets/lists-of-cookies.json")
    console.log("the cookies are : ", cookies)

    const chromeBrowser = await bot.launch(botConfiguration)




    try {
        const chromeBrowserPage = await chromeBrowser.newPage()

        await chromeBrowserPage.setUserAgent(userAgent)
        await chromeBrowserPage.setCookie(...cookies);
        await chromeBrowserPage.goto("https://youtu.be/S-QNZLPTzbQ")

    } catch (e) {

    } finally {

    }
}
runAdsenseBot()

// to install puppeteer prozy 
