const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://the-internet.herokuapp.com/login');
  
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  
  const message = await page.locator('#flash').innerText();
  console.log(message.includes('You logged into a secure area!') ? 'Pass' : 'Fail');
  
  await browser.close();
})();