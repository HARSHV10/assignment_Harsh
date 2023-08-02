const express = require('express');
const multer = require('multer');
const cors = require("cors")
const ExcelJS = require('exceljs');
const app = express();
app.use(express.json());
app.use(cors())
const upload = multer({ dest: 'uploads/' });
const {connectdb,get_db} = require('./db');
const {handelUpload} =require('./controller/mainController')


connectdb()
app.post('/uploadfile',upload.single('file'),handelUpload)

app.listen("3000",()=>{
    console.log("Connected");
})