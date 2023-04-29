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
  test('The user is not logged and introduces wrong data', ({given,when,then}) => {
    let username:string;
    let password:string;

    given('A not logged user', () => {
      username = "wronguser"
      password = "wrongpassword"
    });

    when('I fill wrong data in the form and press submit', async () => {
      // hacemos click en el botón de Log In
      await expect(page).toClick('button', { text: 'Log In' })

      await wait(5000)

      // en la página de solid: introducimos los datos en el formulario y seleccionamos el botón de login de inrupt para que nos redirija a la web

      await expect(page).toFillForm('form[class="form-horizontal login-up-form"]', {
        username: username,
        password: password,
      })

      await wait(1000)

      // seleccionamos el botón del login
      await expect(page).toClick('button', { text: 'Log In' })

      await wait(3000)
    });

    then('An error message is shown in the screen', async () => {
      const text = await page.evaluate(() => document.body.textContent);
      expect(text).toMatch("No user found for that username");
    });
  })

  // eslint-disable-next-line jest/no-done-callback
   test('The user is registered in the site', ({given,when,then}) => {
    
    let username:string;
    let password:string;

    given('A registered user', () => {
      username = "miguelglez"
      password = "Qwertyuiop1?"
    });

    when('I fill the data in the form of login and press submit', async () => {
      // en la página de solid: introducimos los datos en el formulario y seleccionamos el botón de login de inrupt para que nos redirija a la web

      await expect(page).toFillForm('form[class="form-horizontal login-up-form"]', {
        username: username,
        password: password,
      })

      await wait(1000)

      // seleccionamos el botón del login
      await expect(page).toClick('button', { text: 'Log In' })

      await wait(9000)
   });

    then('The page of the map is shown in the screen', async () => {
      const text = await page.evaluate(() => document.body.textContent);
      expect(text).toMatch("Lomap");
      expect(text).toMatch("Guardados");
      expect(text).toMatch("Añadir punto");
      expect(text).toMatch("Acerca de");
      expect(text).toMatch("Filtro");
      expect(text).toMatch("Puntos de interés recientes");
      expect(text).toMatch("© 2023 Lomap. Todos los Derechos Reservados.")
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


