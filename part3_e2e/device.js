const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
 console.log("devices ", devices);

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.emulate(devices['iPhone 6']);
    await page.goto('https://google.com', {
        timeout: 50000
    });
    await page.screenshot({path: './part3_e2e/imgs/iphone.png'});

    await page.emulate(devices['Galaxy S III']);
    await page.goto('https://google.com', {
        timeout: 50000
    });
    await page.screenshot({path: './part3_e2e/imgs/galaxy.png'});

    

    await page.emulate(devices['Nexus 6P']);
    await page.goto('https://google.com', {
        timeout: 50000
    });
    await page.screenshot({path: './part3_e2e/imgs/nexus.png'});

    await browser.close();
})();