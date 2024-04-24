const URL = require("../models/urlModel.js");
const shortid = require('shortid');

const  generateShortURL = async(req,res,next) => {
    const redirectURL = req.body.url;

    if(!redirectURL){
        res.status(400).json({error:"URL is required"})
    }
    const shortId = shortid(8);

    await URL.create({
        shortId,
        redirectURL,
        visitHistory:[]
    });

    return res.json({id:shortId});

}


const getRedirectURL = async (req, res) => {
    const shortId = req.params.id;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },{
        $push:{
            visitHistory: {timeStamp: Date.now()}
        }
    })
    
    if(!entry){
        res.status(404).json("No entry found! :(");
    }
    res.redirect(entry.redirectURL);
}

module.exports = {generateShortURL,getRedirectURL};