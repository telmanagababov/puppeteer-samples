const puppeteer = require('puppeteer');

puppeteer.launch({
    headless: false,
    slowMo: 100,
    devtools: false
}).then(async browser => {
    const page = await browser.newPage();

    await page.goto('https://www.google.com');
    await page.keyboard.type('puppeteer'); 
    await page.click('input[name="btnK"]');
    await page.screenshot({ path: 'screenshot.png' });

    const metrics = await page.metrics();
    console.log(metrics);

    // await browser.close();
});