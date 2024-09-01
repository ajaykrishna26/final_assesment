//Write missing code here
var mongoose = require('mongoose');
const empSchema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

var EmpModel=mongoose.model("employee",empSchema);
module.exports=EmpModel;