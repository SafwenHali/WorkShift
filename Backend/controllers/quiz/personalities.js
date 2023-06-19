const Person = require("../../models/quiz/Personalities");

//POST
const createPerson = async (req, res) => {
  //create
  try {
    const person = await Person.create({
      personalityName: req.body.personalityName,
      personalityCode: req.body.personalityCode,
      personalityDesc: req.body.personalityDesc,
      personalityImage: req.body.personalityImage,
      jobsList: req.body.jobsList,
    });
    res.json({ person: person });
  } catch (err) {
    console.log(err.message);
    res.json("Person not created");
  }
};

//GET all Person
const getPerson = async (req, res) => {
  //find
  const person = await Person.find();
  //return Person&&
  res.json({ person: person });
};

//GET Person by Id
const getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.json({ person: person });
  } catch (err) {
    console.log(err.message);
    res.json("Person not found");
  }
};

//get personality by code
const getPersonByCode = async (req,res)  =>{
  try{
    const person = await Person.findOne({personalityCode: req.params.personalityCode})
    res.json({person: person})
  }catch(err){
    console.log(err.message);
    res.json("Person not found");
  }
}

//get jobs by personality code
const getJobsByCode = async (req, res) => {
  const { personalityCode } = req.params;

  try {
    // Find the personality object with the matching code
    const personality = await Person.findOne({ personalityCode });

    if (!personality) {
      return res.status(404).json({ error: 'Personality not found' });
    }

    const { jobsList } = personality;

    // Return the list of jobs
    return res.json({ jobsList });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

//DELETE
const deletePerson = async (req, res) => {
  const person = await Person.findByIdAndDelete(req.params.id);
  console.log("item deleted");
  res.json("personality deleted");
};

//UPDATE
const updatePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, {
      personalityName: req.body.personalityName,
      personalityCode: req.body.personalityCode,
      personalityDesc: req.body.personalityDesc,
      personalityImage: req.body.personalityImage,
      jobsList: req.body.jobsList,
    });
    res.json(`Person updated successfully`);
  } catch (err) {
    console.log(err.message);
    res.json("Person not updated ");
  }
};
module.exports = {
  createPerson,
  getPerson,
  getPersonById,
  deletePerson,
  updatePerson,
  getPersonByCode,
  getJobsByCode
};
