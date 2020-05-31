const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
const uploadfileController=require('../controllers/uplodfile_controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });

router.get('/',homeController.home);

router.post('/uploadCsv',upload.single('file'),uploadfileController.uploadCsv);

router.get('/uploadCsv/:id',uploadfileController.showCsv)


module.exports=router;