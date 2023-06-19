const Student = require('../models/student');


const addStudent = async (req,res)=>{
    if(typeof req.body === 'undefined')
    {
        return;
    }
    const newStudent = new Student(req.body);
    try{
        const result = await newStudent.save();
        res.status(201).send(result);
    }catch(e){
        res.status(400).send(e);
    }
}

const getAllStudents = async (req,res)=>{
    try{
        const result = await Student.find();
        res.status(200).send(result)
    }catch(e){
        res.status(404).send(e);
    }
}

const getOneStudent = async (req,res)=>{
    const email = req.params.email;
    try{
        const result = await Student.find({email});
        res.status(200).send(result)
    }catch(e){
        res.status(404).send(e);
    }
}


const deleteStudent = async (req,res)=>{
    const email = req.params.email;
    try{
        const result = await Student.deleteOne({email});
        res.status(200).send(result)
    }catch(e){
        res.status(404).send(e);
    }
}


const updateStudentPut = async (req,res)=>{
    const email = req.params.email;
    try {
      const updatedStudent = await Student.findOneAndUpdate(
        { email },
        req.body,
        { new: true, runValidators: true }
      );
  
      if (!updatedStudent) {
        return res.status(404).send("Student not found");
      }
  
      res.status(200).send(updatedStudent);
    } catch (e) {
      res.status(400).send(e);
    }
}


const updateStudentPatch = async (req,res)=>{
    const email = req.params.email;
    try {
      const updatedStudent = await Student.findOneAndUpdate(
        { email },
        req.body,
        { new: true, runValidators: true }
      );
  
      if (!updatedStudent) {
        return res.status(404).send("Student not found");
      }
  
      res.status(200).send(updatedStudent);
    } catch (e) {
      res.status(400).send(e);
    }
}


module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    deleteStudent,
    updateStudentPut,
    updateStudentPatch
}