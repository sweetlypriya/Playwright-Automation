import {test,expect} from '@playwright/test'


test('validate the carts in automationpractice',async({page,request})=>{

   
    await page.goto('https://automationexercise.com/')
    const response=await request.get('https://automationexercise.com/api/productsList')
    expect(response.status()).toBe(200)

    const body=await response.json()
    console.log(body);
    

     for(const product of body.products){
        await expect(page.locator('//div[@class="single-products"]').getByText(product.name).first()).toBeVisible()
    }
   
    
})


