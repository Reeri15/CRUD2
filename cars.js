const express = require('express');
const app = express();

app.use(express.json())

const cars = [
    {
        Brand: "Mercedes",
        Model: "C-200",
        Year: "2021",
        Transmission: "Manual",
        Color: "Blue",
    },

    {
        Brand: "BMW",
        Model: "1 series",
        Year: "2020",
        Transmission: "Auto",
        Color: "Black",
    },

    {
        Brand: "KIA",
        Model: "Rio",
        Year: "2022",
        Transmission: "Auto",
        Color: "White",
    },

    {
        Brand: "Honda",
        Model: "Civic",
        Year: "2018",
        Transmission: "Manual",
        Color: "Matalic grey",
    },

];

app.get("/", (req, res) => {
    res.send('home')
});

app.get("/cars", (req, res) => {
res.send(cars)



});

app.post("/cars", (req, res) => {
    console.log(req.body)
    cars.push(req.body)
res.send('cars added')

const { brand, Model, Year, Color, Transmission} = req.body

if (!brand || !Model || !Year || !Color){
return res.json("Error Please fill in the missing feilds")
}

    cars.push({

        brand,
        Model,
        Color,
        Year,
        Transmission,
    });

});

app.listen(4200, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:4200');
});

                       