import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";
import { Category } from '../../src/shared/shareddtypes';

const feature = loadFeature('./features/addPoint-form.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature (feature, test => {
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
    
      }     
    );

    // eslint-disable-next-line jest/no-done-callback
    test('The user is registered and no introduce data' , ({given,when,then}) => {
        let username: string;
        let password : string;

        given ('A registered user and no data', () => {
            username = "miguelglez";
            password = "Qwertyuiop1?";   
        });

        when('I navigate to the page and i press publish' , async () =>{


            //Solo la primera vez para ir a la pagina de SOLID
            await expect(page).toClick('button', { text: 'Log In' });

            await wait(6000);

            await expect(page).toFillForm('form[class="form-horizontal login-up-form"]', {
                //Utilizo la cuenta que creo miguel para los test
                username: username,
                password: password,
            });
        
            await wait(1000);
        
            // seleccionamos el botón del login
            await expect(page).toClick('button', { text: 'Log In' });
        
            await wait(7000);
            //Navego a la pagina de la creacion de punto
            await expect(page).toClick('a', {text: 'Añadir punto'});

            await wait(2000);

            //Clicko el boton publicar
            await expect(page).toClick('button', { text: 'Publicar' });

            await wait(3000);
        });

        then('An error message is shown in the screen', async () => {
            const text = await page.evaluate(() => document.body.textContent);
            expect(text).toMatch("El campo nombre del punto es obligatorio");
          });
    })

//TEST 2
    // eslint-disable-next-line jest/no-done-callback
    test('The user is logged and have data' , ({given,when,then}) => {
        let name: string;
        
        given ('A logged user and a name', () => {
            name = "Cudillero"
        });

        when('i fill the form and i presh publish' , async () =>{
            await wait(2000);

            //Relleno la categoria
            const select = await page.$('#create-point-category-selector');
            const valueToSelect = 'cinema';
            await select?.select(valueToSelect);

            await wait(2000);

            const input = await page.$('#nombre');
            //Relleno el nombre
            await input?.type(name);

            await wait(1000);
            //Clicko el boton publicar
            await expect(page).toClick('button', { text: 'Publicar' });

            await wait(8000);
        });

        then('I go to home page', async () => {
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

})