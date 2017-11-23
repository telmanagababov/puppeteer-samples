const CDP = require('chrome-remote-interface');
const chromeLauncher = require('chrome-launcher');

(async function () {
    const chrome = await chromeLauncher.launch({
        chromeFlags: ['--disable-gpu', '--headless']
    });
    const protocol = await CDP({ port: chrome.port });
    const Page = protocol.Page;
    await Page.enable();

    Page.navigate({ url: 'https://www.chromestatus.com/' });

    Page.loadEventFired(async () => {
        protocol.close();
        chrome.kill();
    });
})();