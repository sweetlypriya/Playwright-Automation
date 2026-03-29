import { test, expect, request } from '@playwright/test'

//GET method => Retrieves the resource from backend
test.describe('GET Method', async () => {
    test('GET all Users from the list', async ({ request }) => {
        const response = await request.get('http://localhost:3000/products')
        const status = response.status()
        const statusText = response.statusText()
        const headers = response.headers()
        const contentTypeHeader = response.headers()['content-type']
        const jsonBody = await response.json()

        console.log(response);
        console.log(status);
        console.log(statusText);
        console.log(headers);
        console.log(contentTypeHeader);
        console.log(JSON.stringify(jsonBody));
    })

    test('GET one Users from the list and Assertion', async ({ request }) => {
        const response = await request.get('http://localhost:3000/products/5')
        const status = response.status()
        const statusText = response.statusText()
        const jsonBody = await response.json()
        const name = jsonBody.name

        console.log(JSON.stringify(jsonBody));
        console.log(name)

        expect(status).toBe(200)
        expect(statusText).toBe('OK')
        expect(jsonBody.name).toBe(name)
    })

})

test.describe('POST Methods', async () => {
    test('Create New User', async ({ request }) => {

        const response = await request.post('http://localhost:3000/products',
            {
                data: {

                    name: "Crop Top",
                    price: "Rs. 200",
                    brand: "Trends",
                    category: {
                        usertype: {
                            usertype: "Women"
                        },
                        category: "Tops"

                    }
                }
            })
        const status = response.status()
        const statusText = response.statusText()
        const jsonBody = await response.json()
        const name = jsonBody.name

        console.log(JSON.stringify(jsonBody));
        console.log(name)

        expect(status).toBe(201)
        expect(statusText).toBe('Created')
        expect(jsonBody.name).toBe(name)
    })

})

//Update Existing Resource
test.describe('PUT PATCH Methods', async () => {
    test('PUT upate an enitire resource', async ({ request }) => {
        const response = await request.put('http://localhost:3000/products/9', {
            data: {
                name: "Crop Top",
                price: "Rs. 500",
                brand: "WestSide",
                category: {
                    usertype: {
                        usertype: "Women"
                    },
                    category: "Tops"

                }
            }
        }
        )
        const status = response.status()
        const statusText = response.statusText()
        const jsonBody = await response.json()
        const name = jsonBody.name

        console.log(JSON.stringify(jsonBody));
        console.log(name)
        console.log(status);
        console.log(statusText);

        expect(status).toBe(200)
        expect(statusText).toBe('OK')
        expect(jsonBody.name).toBe(name)
    })
    test('PATCH Update partial value', async ({ request }) => {
        const response = await request.patch('http://localhost:3000/products/9', {
            data: {

                brand: "Zara"

            }

        })
        const status = response.status()
        const statusText = response.statusText()
        const jsonBody = await response.json()
        const name = jsonBody.name

        console.log(JSON.stringify(jsonBody));
        console.log(name)
        console.log(status);
        console.log(statusText);

        expect(status).toBe(200)
        expect(statusText).toBe('OK')
        expect(jsonBody.name).toBe(name)
    })
})

test.describe('DELETE Method',async()=>{
    test('Delete a resource',async({request})=>{
        const response=await request.delete('http://localhost:3000/products/9')

        const status = response.status()
        const statusText = response.statusText()
    
        console.log(status);
        console.log(statusText);

        expect(status).toBe(200)
        expect(statusText).toBe('OK')
    })
    
})