import{test,expect} from '@playwright/test'

test.describe('Authentications',async()=>{
    test('Basic Auth',async({request})=>{
        const response=await request.get('https://postman-echo.com/basic-auth',{
            headers:{
                Authorization:`Basic ${Buffer.from('postman:password').toString('base64')}`
            }
        })
        console.log(await response.json())
    })

    test('Bearer Token',async({request})=>{
        const bearerToken=process.env.BEARER_TOKEN;
        const response=await request.get('https://api.github.com/users/repos',{
            headers:{
                Authorization:`Bearer ${bearerToken}`
            }
        })
        console.log(await response.json())

    })

    test('API Key',async({request})=>{
        const apiKey=process.env.API_KEY;
        const response=await request.get('https://aistudio.google.com/app/projects/432962422628',{
            headers:{
                'x-api-key':apiKey!
            }
        })
        console.log(await response.json())

    })
    
})