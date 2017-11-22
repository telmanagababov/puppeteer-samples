const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        devtools: false
    });
    const page = await browser.newPage();

    await page.goto('https://www.google.com');
    await page.keyboard.type('puppeteer');
    await page.click('input[name="btnK"]');

    const metrics = await page.metrics();
    fs.writeFileSync(
        './generated.metrics.json',
        JSON.stringify(metrics, null, '\t')
    );

    await browser.close();
})();