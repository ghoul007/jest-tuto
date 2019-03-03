const puppeteer = require('puppeteer');
const fs = require('fs-extra')
async function run() {
    try {

        const options = {
            headless: false,
            slowMo: true,
            args: ['--window-size=1600,960']
        }
        const browser = await puppeteer.launch(options);
        const page = await browser.newPage()
        await page.setViewport({ height: 1200, width: 960 })
        await page.goto('https://experts.shopify.com/')
        await page.waitForSelector('.section')
        const sections = await page.$$('.section');
    
        await fs.writeFile('./part4_e2e/out.csv','sectionName')
        for (let i = 0; i < 5; i++) {
            const section = sections[i]
            const button = await section.$('a.marketing-button');
            button.click();
            await page.waitForSelector('#ExpertsResults')
            const lis = await page.$$('#ExpertsResults > li')
            for (const li of lis) {
                const name = await li.$eval('h2', h2 => h2.innerText);
                console.log("name ", name);
                await fs.appendFile('./part4_e2e/out.csv',`"${i},${name}"`)
            }
        }

    } catch (e) {
        console.log(e)
    }
    // page.click(btnId)
    await browser.close()
}


run();