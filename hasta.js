const puppeteer = require('puppeteer');


const URL = 'http://hastalavista.pl'
const LOGIN_URL = `${URL}/wp-login.php`;
const BADMINTON_URL = `${URL}/badminton`;

console.log('ENV:');
console.log('HASTA_USER: ', process.env.HASTA_USER);
console.log('HASTA_PASS: ', process.env.HASTA_PASS);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(LOGIN_URL);
  await page.type('#user_login', process.env.HASTA_USER);
  await page.waitFor(200);
  await page.type('#user_pass', process.env.HASTA_PASS);
  await page.waitFor(200);
  await page.click('[name="wp-submit"]');
  await page.waitForSelector('#content');

  await page.goto(BADMINTON_URL);
  await page.waitForSelector('#login_box');

  await page.$(

  await page.screenshot({
    path: `screenshots/${new Date().toString()}.png`
  });
  browser.close();
})();
