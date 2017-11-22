const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250
    });

    const page = await browser.newPage();
    await page.goto('https://example.com');

    page.on('console', data => {
        const message = data.args.map(msg => {
            return msg._remoteObject.value;
        }).join(" ");
        console.log(message);
    });

    await page.evaluate(() => {
        console.log('debugging mode', 'is', 'enabled');
        console.log(`url is ${location.href}`);
        console.log(`size is ${window.innerWidth} / ${window.innerHeight}`);
    });
})();