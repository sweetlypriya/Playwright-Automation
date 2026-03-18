import {test,expect} from '@playwright/test'

test("TC 1 @test",async()=>{
    console.log("TC 1");
})

test("TC 2 @smoke",async()=>{
    console.log("TC 2");
})

test("TC 3 @regression",async()=>{
    console.log("TC 3");
})

test("TC 4 @test @smoke",async()=>{
    console.log("TC 4");
})

test("TC 5 @test @regression",async()=>{
    console.log("TC 5");
})

test("TC 6 @test @smoke",async()=>{
    console.log("TC 6");
})

test("TC 7 @test",async()=>{
    console.log("TC 7");
})

test("TC 8 @smoke",async()=>{
    console.log("TC 8");
})

//npx playwright test --grep "@test" => it will run the test cases wihich has mentioned tags
//npx playwright test --grep "@test|@smoke" => it will run different multiple tags which is seperated by |
//npx playwright test --grep-invert "@test" => it will skip only the given tag and run the remaining testcases
//npx playwright test --grep "(?=.*@test)(?=.*@smoke)" => it will run the testcases which has multiple tags