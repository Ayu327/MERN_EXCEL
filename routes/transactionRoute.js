import express from 'express'
import { getAllTransection,addTransection,editTransection,deleteTransection } from '../controllers/transactionController.js';


//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transection", addTransection);

//get transections
router.post("/get-transection", getAllTransection);


//Edit transection POST MEthod
router.post("/edit-transection", editTransection);
//Delete transection POST MEthod
router.post("/delete-transection", deleteTransection);

export default router

