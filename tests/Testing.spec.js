const AMAZON_KINDLE_EBOOK_STORE_URL = 'https://www.amazon.com/Best-Sellers-Kindle-Store-eBooks/zgbs/digital-text/154606011/ref=zg_bs_nav_kstore_1_kstore/';
const { test, expect } = require('@playwright/test');

test.only('ToDo_addNew', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    try {
        const amazonPage = await browser.newPage();
        await amazonPage.goto(AMAZON_KINDLE_EBOOK_STORE_URL);

        //await amazonPage.waitForSelector('"Best Sellers in"');
        await amazonPage.click('"Self-Help"');
        await amazonPage.click('"Creativity"')

        await amazonPage.waitForSelector('li[class="zg-item-immersion"]');
        const books = await amazonPage.$$('li[class="zg-item-immersion"]');
        console.log(books);
    } finally {
        await browser.close();
    }
});