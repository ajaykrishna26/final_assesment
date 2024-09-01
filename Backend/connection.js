const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect('mongodb+srv://ajaykrishnapr45:ajay@cluster0.mvd0w00.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
