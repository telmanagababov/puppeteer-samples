const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://example.com');
    await page.screenshot({ path: 'generated.screenshot.png' });

    await browser.close();
})();