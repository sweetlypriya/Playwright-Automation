import { test, expect } from '@playwright/test'

test.beforeAll(() => {
    console.log("Outer beforeAll executed")
})

test.afterEach(() => {
    console.log("Outer afterEach executed")
})

test('TC_1', async () => {
    console.log("Outer testcase 1 executed")
})

test.beforeEach(() => {
    console.log("Outer beforeEach executed")
})
test.afterAll(() => {
    console.log("Outer afterAll executed")
})

test.describe('Hooks', () => {
    test.beforeAll(() => {
        console.log("Inner beforeAll executed")
    })

    test.afterEach(() => {
        console.log("Inner afterEach executed")
    })

    test('TC_2', async () => {
        console.log("Inner testcase 2 executed")
    })

    test('TC_3', async () => {
        console.log("Inner testcase 3 executed")
    })

    test.beforeEach(() => {
        console.log("Inner beforeEach executed")
    })
    test.afterAll(() => {
        console.log("Inner afterAll executed")
    })
})