const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// create new Student
router.post('/student',controller.addStudent)

// get all students
router.get('/student', controller.getAllStudents)

// get the student
router.get('/student/:email', controller.getOneStudent)

// delete a student
router.delete('/student/:email', controller.deleteStudent)

// PUT request to update a student's information
router.put('/student/:email',controller.updateStudentPut);
  
// PATCH request to partially update a student's information
router.patch('/student/:email', controller.updateStudentPatch);

module.exports = router;