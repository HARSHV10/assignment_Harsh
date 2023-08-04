const ExcelJS = require('exceljs');
const multer = require('multer');
const {connectdb,get_db} = require('../dataBase/db')
const {checkdup}=require('./checkDup');
const { connection } = require('mongoose');
const { ObjectId } = require('mongodb');
const async = require("async")

const upload = multer({ dest: 'uploads/' });



exports.readAndInsertData=async (filePath)=>{
    
    try{
        const path = filePath;
        const workbook=new ExcelJS.Workbook();
        await workbook.xlsx.readFile(path);
        const worksheet=workbook.getWorksheet(1);
        const headerRow = worksheet.getRow(1).values;
        /////////////////////////////////
        ///// connecting to database ////
        
        
        const db=get_db();


        ////////////////////////////////////////
        ////////////////////////////////////////
        //////// using the Email as the unique key 

        const collection=db.collection("excelData");
        let dataFrame=[];
    // await collection.createIndex(indexKey, options);
        worksheet.eachRow(async (row,rowNumber)=>{
            data={}
            if(rowNumber >1){
                row.eachCell(async (cell,colNumber)=>{
                    data[headerRow[colNumber]] = cell.value;
                })
            }
            // pushing all the data in the dataFrame array 
            dataFrame.push(data);
          });


          ////// using the async.eachSeries to asynchronously check if the lement exists 
          async.eachSeries(dataFrame, async (rowData, callback) => {

            //// using the aggerate function to check if the entry exist in the database and if it does do not do anything 
            // else insert the data 
            const check = await collection.findOne({"Email":rowData.Email})
            if(check){

            }
            else{
                await collection.insertOne(rowData);
            }
            
        });
          
        }
    catch(e){
        // console.log(e);
    }
}