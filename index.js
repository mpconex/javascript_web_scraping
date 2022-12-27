const puppeteer = require('puppeteer');

(async function () {
    const browser = await puppeteer.launch( {headless : false } );
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');

    const data = await page.evaluate(function() {
        const events = document.querySelectorAll('.gLFyf');
        
        return 
    })

    console.log(data);

})();