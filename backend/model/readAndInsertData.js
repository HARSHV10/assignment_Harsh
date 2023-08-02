const ExcelJS = require('exceljs');
const multer = require('multer');
const {connectdb,get_db} = require('../db')
const {checkdup}=require('./checkDup');
const { connection } = require('mongoose');
const { ObjectId } = require('mongodb');

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
        const collection=db.collection("excelData");
        const indexKey = { "Email": 1 };
    const options = { unique: true };
    await collection.createIndex(indexKey, options);
        worksheet.eachRow(async (row,rowNumber)=>{
            data={}
            if(rowNumber >1){
                row.eachCell(async (cell,colNumber)=>{
                    data[headerRow[colNumber]] = cell.value;
                    
                    data[headerRow[colNumber]]=cell.value;
                })
            }
            // console.log(!check)
            // const check=collection.findOne({'Email':data.Email})
            // if(!check){
                try{
                    await collection.insertOne(data)
                }
                catch(e){
                    
                }
            // }
          });
          
        }
    catch(e){
        // console.log(e);
    }
}