const express = require('express')
const app = express()


const todoData = [
  { id: "1",title: "ABC" , desc:"", datetime:"12/02/2025 10:15 AM"},
  { id: "2",title: "ABC" , desc:"", datetime:"12/02/2025 10:15 AM"},
  { id: "3",title: "ABC" , desc:"", datetime:"12/02/2025 10:15 AM"},
  { id: "4",title: "ABC" , desc:"", datetime:"12/02/2025 10:15 AM"},
  { id: "5",title: "ABC" , desc:"", datetime:"12/02/2025 10:15 AM"}
  
];

app.get('/getTodoData',function (req, res) {
    res.send(todoData)
})



app.listen(3000, function() {
    console.log("Server started listening on port 3000")
})