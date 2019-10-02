const puppeteer = require('puppeteer');

(async () => {
  const b = await puppeteer.launch();
  const page = await b.newPage();
  page.on('error', e => {
    console.log('Jeblo.');
    console.log(e);
  });
  await page.goto('https://gazetawroclawska.pl');
  await page.screenshot({ path: 'example.png' });
  await b.close();
})();
