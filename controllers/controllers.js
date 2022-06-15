require('dotenv').config()

module.exports = {
    gethome: (req, res)=>res.send(process.env.SECRET_KEY),
    
    login: (req, res)=>{
        console.log(req.body)
        res.send({success: true, Message: "User authenticated"})
    }
}