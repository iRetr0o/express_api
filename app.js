//Usando objeto express
const express = require("express");
//App de express
const app = express();
app.use(express.json()); //Indicamos que usaremos JSON
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

//Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//HTTP METHODS
app.get("/v1/explorers", (req, res) => {
  console.log(`Api Explores GET ALL request ${new Date()}`);
  const explorer1 = { id: 1, name: "Oscar" };
  const explorer2 = { id: 2, name: "Fernadna" };
  const explorer3 = { id: 3, name: "Rodrigo" };
  const explorer4 = { id: 4, name: "Carlo" };
  const explorer5 = { id: 5, name: "Oscar" };
  const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5];
  res.status(200).json(explorers);
});