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
        const response=await request.get('https://api.github.com/users/repos',{
            headers:{
                Authorization:'Bearer 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'
            }
        })
        console.log(await response.json())

    })

    test('API Key',async({request})=>{
        const response=await request.get('https://aistudio.google.com/app/projects/432962422628',{
            headers:{
                'x-api-key':'AIzaSyBQAiAdk9N5UA4HP-X_RQ0zQ3K4O9pQFPU'
            }
        })
        console.log(await response.json())

    })
})