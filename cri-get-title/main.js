const CDP = require('chrome-remote-interface');
const chromeLauncher = require('chrome-launcher');

(async function () {
    const chrome = await launchChrome();
    const protocol = await CDP({ port: chrome.port });
    const { Page, Runtime } = protocol;
    await Promise.all([Page.enable(), Runtime.enable()]);

    Page.navigate({ url: 'https://www.chromestatus.com/' });

    Page.loadEventFired(async () => {
        const js = "document.querySelector('title').textContent";
        const result = await Runtime.evaluate({ expression: js });

        console.log('Title of page: ' + result.result.value);

        protocol.close();
        chrome.kill(); // Kill Chrome.
    });
})();

function launchChrome(headless = true) {
    return chromeLauncher.launch({
        chromeFlags: [
            '--window-size=412,732',
            '--disable-gpu',
            headless ? '--headless' : ''
        ]
    });
}