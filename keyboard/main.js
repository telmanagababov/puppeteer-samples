const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100
    });

    const page = await browser.newPage();
    await page.goto('https://www.google.com',
        { waitUntil: 'networkidle0' });

    await page.keyboard.type('Hello World!');
    await page.keyboard.press('ArrowLeft');

    await page.keyboard.down('Shift');
    for (let i = 0; i < ' World'.length; i++)
        await page.keyboard.press('ArrowLeft');
    await page.keyboard.up('Shift');

    await page.keyboard.press('Backspace');
})();