var express = require('express')

// start the express server app
var app = express()

// middleware static file server from public folder
app.use(express.static('./public'))

// // when client gets /, send our home page from the public folder (/html/index.html)
// app.get('/', function(req,res){
//     res.sendFile('./html/index.html', {root: './public'})
// })

app.get('/', function(req,res){
    res.send(`<h1>hello world!</h1>`)
})

// 404 page
// app.get('/404', function(req,res){
//     res.sendFile('./html/404.html', {root: './public'})
// })
//
//  404 error handling middleware
// app.use(function(req, res, next){
//     res.status(404)
//     res.redirect('/404')
// })

// listen on which port?
app.listen(80)

// end
