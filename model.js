const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let datapoint = new Schema({
    dataType : String,
    label : String,
    description : String,
    options: [String]
})

let user_schema = new Schema({
    name:  String,
    description: String,
    type: String,
    dataPoints: [datapoint]
    
},
    {
        timestamps: true
    },
);




// "name" : "Disease history",
// "description" : "The chronic of the disease at hand",
// "dataPoints" : [
// {
// "dataType" : "selection",
// "label" : "ECOG_SCORE",
// "description" : "ECOC score at the start of IO",
// "options": ["0","1","2","3","4","5","unknown"]
// },
// {
// "dataType" : "text",
// "label" : "ECOG_HB_LEVEL",
// "placeholder" : "g/dL",
// "description" : "Hemogolobin level at the start of IO (g/dL)",
// }
// ]


module.exports = mongoose.model("Tab", user_schema);