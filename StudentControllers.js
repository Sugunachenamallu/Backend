const getStudents = (req,res) =>{
      let stddata={name:"suguna",roll:"4207"};
      res.status(200).json({data:stddata});
};
const addStudents =(req,res)=>{
    res.status(201).json({message:"data added"});
}
export {getStudents,addStudents};