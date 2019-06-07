const express= require('express');
const routes=express.Router();

const Biographies = require('../model/biographies');
const Novel = require('../model/novel');
const Buisness = require('../model/buisness');
const Technology = require('../model/technology');
const SelfHelp = require('../model/self-help');
const Science = require('../model/science');

routes.post('/',(req,res)=>{
    const bookcategory=req.body.category;

    if(bookcategory!='buisness'&&bookcategory!='novel'&&bookcategory!='science'&&bookcategory!='technology'&&bookcategory!='biographies'&&bookcategory!='selfhelp'){
        return res.status(201).json({
            message:"Book Not Found"
        })
    }

    if(bookcategory=='biographies'){
        Biographies.findById(req.body.id)
                   .then((response)=>{
                    return res.status(201).json({
                           message:"Book Found",
                           book:response
                       })
                   })
                   .catch((err)=>{
                    res.status(500).json({
                        message:err
                    })
                   })
    }

    if(bookcategory=='novel'){
        Novel.findById(req.body.id)
                   .then((response)=>{
                    return res.status(201).json({
                           message:"Book Found",
                           book:response
                       })
                   })
                   .catch((err)=>{
                       res.status(500).json({
                            message:err
                       })
                   })
    }

    if(bookcategory=='science'){
        Science.findById(req.body.id)
                   .then((response)=>{
                    return res.status(201).json({
                           message:"Book Found",
                           book:response
                       })
                   })
                   .catch((err)=>{
                    res.status(500).json({
                         message:err
                    })
                })
    }

    if(bookcategory=='technology'){
        Technology.findById(req.body.id)
                   .then((response)=>{
                    return res.status(201).json({
                           message:"Book Found",
                           book:response
                       })
                   })
                   .catch((err)=>{
                    res.status(500).json({
                         message:err
                    })
                })
    }

    if(bookcategory=='selfhelp'){
        SelfHelp.findById(req.body.id)
                   .then((response)=>{
                    return res.status(201).json({
                           message:"Book Found",
                           book:response
                       })
                   })
                   .catch((err)=>{
                    res.status(500).json({
                         message:err
                    })
                })
    }

    if(bookcategory=='buisness'){
        Buisness.findById(req.body.id)
                   .then((response)=>{
                    return res.status(201).json({
                           message:"Book Found",
                           book:response
                       })
                   })
                   .catch((err)=>{
                    res.status(500).json({
                         message:err
                    })
                })
    }






})

module.exports=routes;