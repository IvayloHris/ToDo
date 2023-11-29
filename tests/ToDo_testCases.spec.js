const { test, expect } = require('@playwright/test');

test.only('ToDo_addNew', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const ToDos = ["Buy groceries", "Read a book", "Write a report", "Clean the house"];
    const elements = await page.locator(".todo-list li div label");

    // Navigate to the ToDo webpage.
    await page.goto('https://todomvc.com/examples/react/#/');

    // Wait for the price chart to load (you may need to adjust the selector).
    const newTodo = await page.locator('.new-todo');

    for (let i = 0; i < ToDos.length; ++i) {
        await newTodo.type(ToDos[i]);
        await page.keyboard.press('Enter');
        await expect(elements.nth(i)).toHaveText(ToDos[i]);
        console.log(elements.nth(i).textContent());
        //await expect(page.getByText(ToDos[i])).toBeVisible();
    }


});