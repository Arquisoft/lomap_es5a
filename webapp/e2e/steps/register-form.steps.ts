import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/register-form.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: false, slowMo: 50 });
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  });

  // eslint-disable-next-line jest/no-done-callback
  test('The user is not registered in the site', ({given,when,then}) => {
    
    let username:string;
    let password:string;

    given('An unregistered user', () => {
      username = "username"
      username = "username"
    });

    when('I fill the data in the form and press submit', async () => {
      await expect(page).toClick('Button', {text: 'Login'})
      await wait(2000)
      await expect(page).toFillForm('form[class="form-horizontal login-up-form"]', {
        username: username,
        password: password,
      })
      await expect(page).toClick('button', { text: 'Log In' })
      await wait(8000)
    });

    then('The page of the map is shown in the screen', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toMatch("Logout");
        expect(text).toMatch("Gestionar puntos");
        expect(text).toMatch("Gestionar mapas");
        expect(text).toMatch("Amigos");
        expect(text).toMatch("Añadir Amigo");
        expect(text).toMatch("About");
      });
  })

  // eslint-disable-next-line jest/no-done-callback
  test('The user is not logged and introduces wrong data', ({given,when,then}) => {

    let username:string;
    let password:string;

    given('A not logged user', () => {
      username = "wronguser"
      password = "wrongpassword"
    });

    when('I fill wrong data in the form and press submit', async () => {
      await expect(page).toClick('Button', { text: 'Login' })
      await wait(4000)
      await expect(page).toFillForm('form[class="form-horizontal login-up-form"]', {
        username: username,
        password: password,
      })
      await expect(page).toClick('button', { text: 'Log In' })
      await wait(2000)
    });

    then('An error message is shown in the screen', async () => {
      const text = await page.evaluate(() => document.body.textContent);
      expect(text).toMatch("No user found for that username");
    });
  })
  
  afterAll(async ()=>{
    browser.close()
  })

  function wait(time: number) {
    return new Promise(function (res) {
        setTimeout(res, time);
    });
  }

});


