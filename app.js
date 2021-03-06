const express = require("express");
const app = express();

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => {
  res.status(200).render("index", {
    page_name: "index"
  });
});

app.get("/about", (req, res) => {
  res.status(200).render("about",{
    page_name: "about"
  });
});

// PORT LISTEN
app.listen(3000, () => {
  console.log("Server is running at 3000 port");
});
