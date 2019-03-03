const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await Promise.all([
        page.coverage.startCSSCoverage(),
        page.coverage.startJSCoverage()
    ])
    await page.goto('https://google.com', {
        timeout: 0
    });

    [cssCoverage, jsCoverage] = await Promise.all([
        page.coverage.stopCSSCoverage(),
        page.coverage.stopJSCoverage()
    ])

    let totalBytes = 0;
    let usedBytes = 0;
    const coverage = [...jsCoverage, ...cssCoverage]
    for (const e of coverage) {
        totalBytes += e.text.length;
        for (const range of e.ranges) {
            usedBytes += range.end - range.start - 1

        }
    }

    console.log(`Bytes used: ${usedBytes / totalBytes * 100} %`)

    await browser.close();
})()