const app = require('express')();
const PORT = 8080;

app.listen(PORT, () => console.log('Its alive again'))

app.get('/ramsey', (req, res) => {
    res.status(200).send({
        firstname: "Ramsey",
        lastname: "Gavin"
    })
})