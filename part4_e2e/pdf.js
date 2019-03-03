const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const hbs = require('handlebars');
const path = require('path')
const compile = async function (templateName, data) {
    const filePath = path.join(process.cwd(), 'part4_e2e/templates', `${templateName}.hbs`)
    const html = await fs.readFile(filePath, 'utf-8')
    return hbs.compile(html)(data)
};

    (async () => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage()

            await page.setContent(await compile('list', { name: 'ghoul Ahmed' }))
            await page.emulateMedia('screen')
            await page.pdf({
                path: './part4_e2e/myPdf.pdf',
                format: 'A4',
                printBackground: true
            })
            await browser.close();
        } catch (error) {
            console.log("error ", error);

        }
    })()