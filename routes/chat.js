const express = require("express")

const router = express.Router()

router.get('/' , function(req ,res ,next) {
    res.render("chat" , [
        "nom" == "chourabi aziz", 
    ])
})


module.exports = router