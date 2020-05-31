const http = require('http');
const fs = require('fs');
const csv = require('fast-csv');

const CsvFile=require('../models/csvFiles');

//storing csv file in database
module.exports.uploadCsv =async function(req, res) {
    
    const fileRows = [];
    csv.parseFile(req.file.path)
    .on("data", function (data) {
      fileRows.push(data); // push each row
    })
    .on("end", function () {
        
        let id=[],name=[],manufacture=[],make=[],price=[];
        for(let i=1;i<fileRows.length;i++){
            id.push(parseInt(fileRows[i][0]));
            name.push(fileRows[i][1])
            manufacture.push(parseInt(fileRows[i][2]));
            make.push(fileRows[i][3])
            price.push(parseInt(fileRows[i][4]));
            
        }
       
         CsvFile.create({
             title:req.file.originalname,
           id:id,
           name:name,
           manufacture_year:manufacture,
           make:make,
           price:price
        })
        fs.unlinkSync(req.file.path);   // remove temp file
        //process "fileRows" and respond
      })
      
      res.redirect('back')
     
};

//viewing csv file
module.exports.showCsv=async  function(req,res){
  try {

  
   let data=await CsvFile.findById(req.params.id);

   const uploads = await CsvFile.find({});
       
   return res.render('home',{
       uploads:uploads,
       data:data
   });
   
    
    
  } catch (error) {
    
  }
}