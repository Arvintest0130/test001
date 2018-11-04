const puppeteer = require('puppeteer');

puppeteer
  .launch({
    headless: false,
  })
  .then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    // 其他操作...
    await browser.close();
  });
