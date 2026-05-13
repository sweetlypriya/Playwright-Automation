import{test,expect} from '@playwright/test'
import fs from 'fs'
import testData from '../testdata/jsonData.json' //another way to acceson JSON file
import {parse} from 'csv-parse/sync'
import XLSX from 'xlsx'


//to access data from JSON file
const file=fs.readFileSync('/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/testdata/jsonData.json','utf-8')
console.log("json:"+file);

//to access data from CSV file
//npm install csv-parse
const csvFile=fs.readFileSync('/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/testdata/users.csv','utf-8')
const csvData=parse(csvFile,{columns:true}) //converts the data into json
console.log("csv: "+JSON.stringify(csvData));

//to access data from EXCEL
//npm install xlsx
const excelFile=XLSX.readFile('/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/testdata/Book1.xlsx')
const sheetName=excelFile.SheetNames[0] //accessing the first sheet
const sheet=excelFile.Sheets[sheetName]
const excelData=XLSX.utils.sheet_to_json(sheet)
console.log("excel"+JSON.stringify(excelData));
