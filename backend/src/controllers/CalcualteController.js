const express=require('express');


const calculate =(req,res)=>{

const {followers,products}=req.body;
try {
    const result=followers *products * 100;

return res.status(200).json({
    data:result,
    message:'successfully calculated'
})

    
} catch (error) {
    return res.status(400).json({
        error:error,
        message:'error occured'
    })
}


}


module.exports=calculate;