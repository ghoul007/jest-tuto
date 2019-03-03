const puppeteer = require('puppeteer');

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
        await page.goto('https://www.bing.com')
        await page.waitFor(2000)

        const textBoxId = '#sb_form_q';
        const btnId = '#sb_form_go';
        await page.type(textBoxId, 'word', { delay: 100 })
        await page.keyboard.press('Enter')
        await page.waitForSelector('a')
        const selectorString = "#b_results > .b_algo:nth-child(1) > .b_title > h2 > a";
        const selector = await page.$(selectorString);
        if (selector) {
            const ele = selector.asElement();
            await ele.click();
        }
    } catch (e) {
        console.log(e)
    }
    // page.click(btnId)
    // await browser.close()
}


run();