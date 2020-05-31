const CsvFile=require('../models/csvFiles');


//event for rendering homepage
module.exports.home=async function(req,res){
    try {
       const uploads = await CsvFile.find({});
       
        return res.render('home',{
            uploads:uploads
        });
        
    } catch (error) {
        console.log("error in rendering home page",error);
        return;
    }
}