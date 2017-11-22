const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100
    });

    const page = await browser.newPage();
    await page.goto('https://www.google.com');

    await page.click('input[name="btnI"]');
    await page.waitFor('.latest-doodle');
    await page.mouse.click(130, 130)
})();