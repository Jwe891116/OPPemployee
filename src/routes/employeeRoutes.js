import express from "express";
import path from "path";
const router = express.Router();
import 
{   getHome, 
    // getPackage, 
    // getPackages, 
    // postPackages,
    // getInfo
    } from "../controllers/userController.js";
  
router.get("/", getHome);

// router.get("/package", getPackage);

// router.get("/packages", getPackages);

// router.post("/package", postPackages);

// router.get("/search", getInfo);

export default router;
