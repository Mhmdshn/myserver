const app = require('express')();
const PORT = 8080

// app.listen(PORT, ()=>console.log("wroking"))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, ()=>console.log("working"))