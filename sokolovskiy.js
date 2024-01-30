const express = require("express")
const app = express()
const port = 3000

const customers = [
    {
        id: 3,
        firstName: "Егор",
        lastName: "Журиков",
        email: "dfjlhj@gmail.com",
    }
    {
        id: 3,
        firstName: "Тимур",
        lastName: "Соколовский",
        email: "qwezxc234@gmail.com",
    }
    {
        id: 3,
        firstName: "Денис",
        lastName: "Янгиров",
        email: "lsdhcbn123@mail.ru",
    }
]

app.get('/', (req, res) => {
    res.set({
        "Content-Type": "application/json",
    })
    res.json(JSON.stringify(customers))
})

app.listen(port, () => {
    console.log(`Мы начали прослушивать ${port} порт.`)
})