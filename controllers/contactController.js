import asyncHandler from "express-async-handler";

const get_all = asyncHandler(async (req,res)=>{
    res.status(200).send("Get all contacts");
});

const create = asyncHandler(async (req,res)=>{
    console.log(req.body);
    
    const {name, phone, email }=req.body;
    if(!name || !phone || !email){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).send("create contact");
});

const update = asyncHandler(async (req,res)=>{
    res.send("update contact");
});

const get_one=asyncHandler(async (req,res)=>{
    res.send(`get contact for ${req.params.id}`);
});

const del=asyncHandler(async (req,res)=>{
    res.send("delete contact");
});

export {get_all, create, update, get_one, del};