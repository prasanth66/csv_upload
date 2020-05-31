//connecting to the database
const mongoose=require('mongoose');

//connecting db here name of db is uploadCsv_db
mongoose.connect('mongodb://localhost/uploadCsv_db');

const db=mongoose.connection;
//checking if there is error while conection
db.on('error',console.error.bind(console,'error connectig to db'));
//checking whether connection is opened
db.once('open',function(){
    console.log('db sucesfully conected');
})

module.exports=db;