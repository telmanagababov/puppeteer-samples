const assert = require('assert');
const should = require('should');
const puppeteer = require('puppeteer');

describe('example.com', function () {
    it('should have "Example Domain" title', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://example.com');
        const title = await page.title();

        await browser.close();

        title.should.be.exactly('Example Domain');
    });
});