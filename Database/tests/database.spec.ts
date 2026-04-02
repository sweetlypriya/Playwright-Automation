import {test,expect} from '@playwright/test'
import { pool } from '../src/utils/dbUtils'

test('Connect to database and run query',async({page})=>{

    //matching the product names from database with UI
    await page.goto('https://automationexercise.com/')
    const result=await pool.query('select * from products')
    
    const rows=result.rows
    console.log(rows);

    //taking products one by one and verifying in UI if it is visible or not
    for(const product of rows){
        await expect(page.locator('//div[@class="single-products"]').getByText(product.product_name).first()).toBeVisible()
    }
    
})


