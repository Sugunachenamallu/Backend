// import mongoose from "mongoose";

// const studentSchema = new mongoose.Schema({
//     stdName: {
//         type: String
//     },
//     stdRoll : {
//         type: String
//     },
//     stdPhone: {
//         type : Number
//     }
// });
// const Student = mongoose.model("student", studentSchema);
// export default Student;

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stdRoll: { type: String, required: true },
  branch: { type: String, required: true },
  age: { type: Number }
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
