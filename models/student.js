const validator = require('validator');
const mongoose = require('../Database/connection');

  // Defining the Schema
  const studentSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true,"Email is Manadatory"],
        unique : [true,"Email Should be Unique"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Email is Not Valid");
            }
        }
    },
    name : {
        type : String,
        maxLength : [10,"Maximum Length is 10"],
        minLength : [1,"Minimum Length is 1"],
        required : [true,"Email is Manadatory"],
        lowercase : true,
        trim : true,
        validate(value){
            if(!validator.isAlpha(value)){
                throw new Error("Name must contain only alphabetic characters");
            }
        }
    },
    courses: [{
        type: String,
        enum: ["DB", "DSA", "OS"],
        uppercase : true,
        required: [true, "Course is mandatory"]
    }],
    CGPA : {
        type : Number,
        required : [true,"CGPA is Manadatory"],
        maxLength : [5,"Maximum Length is 5"],
        validate(value){
            if(value < 0){
                throw new Error("CGPA Can't be negative Value");
            }
        }
    }
  },
  {versionKey: false} // Disable the version key
  )


// Defining Model
const Student =  mongoose.model('Student', studentSchema);

// Exporting the Model
module.exports = Student;
