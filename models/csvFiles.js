const mongoose=require('mongoose');


//creating CsvFiles schema
const courseSchema=new mongoose.Schema({
    title:{
        type:String,
       
    },
    id:{
        type:[Number],
    },
    name:{
        type:[String],
       
    },
    manufacture_year:{
        type:[Number],
    },
    make:{
        type:[String],
       
    },
    price:{
        type:[Number],
    },
   
},{timestamps:true});


//storing data collectionn in courses
const CsvFiles=mongoose.model('csvfiles',courseSchema);

//exporting schema
module.exports=CsvFiles;