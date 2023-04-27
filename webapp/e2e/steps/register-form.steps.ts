import { te } from 'date-fns/locale';
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
      password = "username"
    });

    when('I fill the data in the form and press submit', async () => {
      const combo = await page.$('#provider');
  
      // hacemos click en el combobox
      await combo?.click();

      await wait(200)

      // seleccionamos el proveedor (Solid Community)
      await expect(page).toClick('option', { text: 'Solid Community' })

      await wait(200)

      // hacemos click en el botón de Log In
      await expect(page).toClick('button', { text: 'Log In' })

      // en la página de solid: introducimos los datos en el formulario y seleccionamos el botón de login de inrupt para que nos redirija a la web

      // Seleccionar el campo del username
      const inputUser = await page.$('#username');
        
      // Escribir texto en el campo del username
      await inputUser?.type(username);

      // Seleccionar el campo del password
      const inputPassword = await page.$('#password');
        
      // Escribir texto en el campo del password
      await inputPassword?.type(password);

      // seleccionamos el botón del login
      await expect(page).toClick('button', { text: 'Log In' })

      await wait(5000)
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

  // eslint-disable-next-line jest/no-done-callback
  // test('The user is not logged and introduces wrong data', ({given,when,then}) => {

  //   let username:string;
  //   let password:string;

  //   given('A not logged user', () => {
  //     username = "wronguser"
  //     password = "wrongpassword"
  //   });

  //   when('I fill wrong data in the form and press submit', async () => {
  //     await expect(page).toClick('Button', { text: 'Login' })
  //     await wait(4000)
  //     await expect(page).toFillForm('form[class="form-horizontal login-up-form"]', {
  //       username: username,
  //       password: password,
  //     })
  //     await expect(page).toClick('button', { text: 'Log In' })
  //     await wait(2000)
  //   });

  //   then('An error message is shown in the screen', async () => {
  //     const text = await page.evaluate(() => document.body.textContent);
  //     expect(text).toMatch("No user found for that username");
  //   });
  // })
  
  afterAll(async ()=>{
    browser.close()
  })

  function wait(time: number) {
    return new Promise(function (res) {
        setTimeout(res, time);
    });
  }

});


