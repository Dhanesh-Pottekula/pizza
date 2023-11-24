const express=require("express");
const router=express.Router();
const axios = require('axios');

let data=[];
const options = {
  method: 'GET',
  url: 'https://pizzaallapala.p.rapidapi.com/productos',
  headers: {
    'X-RapidAPI-Key': 'e8037b7b57msh93dfd08b1bdba0fp1cb8e3jsn8b7ce8b1c1ef',
    'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
  }
};

router.get("/",fetchData);

async function fetchData(req,res) {
    try {
      const response = await axios.get('https://pizzaallapala.p.rapidapi.com/productos', options);
      data=response.data;
      console.log(data)
      res.json({"data":data});
    } catch (error) {
      console.error(error);
    }
   }
   
  module.exports={router} ;

