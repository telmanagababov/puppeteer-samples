const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.tracing.start({ 
        path: './generated.tracing.json' , 
        screenshots: false 
    });
    
    await page.goto('https://google.com', { waitUntil: 'networkidle2' });
    await page.type('input[name=q]', 'puppeteer');
    await page.click('input[type="submit"]');
    await page.waitForSelector('h3 a');
    
    await page.tracing.stop();

    await browser.close();
})();