import {test,expect} from '@playwright/test'

test.describe('Basic Element Handling and Assertions',()=>{
    
    test('SignUp by handling goto,fill,type,click,clear,hover,focus,dblclick,expect-toHaveURL,toContain',async({page})=>{
        
        await page.goto("https://automationexercise.com/")
        await page.getByRole('link', { name: ' Signup / Login' }).click()
        await expect(page).toHaveURL('https://automationexercise.com/login')
        await page.getByPlaceholder('Name').fill('spriya')
        await page.locator('.signup-form').filter({hasText:'New User Signup!'}).locator('form').getByPlaceholder('Email Address').type('sspprriyaa@gmail.com')
        await page.locator('.signup-form').filter({hasText:'New User Signup!'}).locator('form').getByPlaceholder('Email Address').clear()
        await page.locator('.signup-form').filter({hasText:'New User Signup!'}).locator('form').getByPlaceholder('Email Address').type('sspprriyaa@gmail.com')
        await page.getByRole('button',{name:'Signup'}).click()
        //await expect(page.url).toContain('signup')
        await page.getByRole('link',{name:'Contact us'}).hover()
        await page.getByRole('link',{name:'Products'}).focus()
        await page.getByRole('checkbox',{name:'Sign up for our newsletter!'}).dblclick()
        await page.locator('#id_gender2').check()


    })

   


})