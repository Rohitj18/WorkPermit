const express = require("express");
const router = express.Router();


const{
    getAllForm,setApproval,getAllAdminForm,setDisapproval
} = require("../controller/Form");


router.post("/getAllForms",getAllForm);
router.post("/setApproval",setApproval);
router.post("/getAllAdminForm",getAllAdminForm);
router.post("/setDisapproval",setDisapproval);

module.exports = router;
