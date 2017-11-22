const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.emulate(iPhone);
    await page.goto('https://google.com', { waitUntil: 'networkidle2' });
    
    await page.setViewport({ width: 1000, height: 700 });
    await page.goto('https://google.com');
})();