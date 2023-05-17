const Field = require("../../models/quiz/careerfields");

// POST field

const createfield = async (req, res) => {
  //create field
  try {
    const field = await Field.create({
      Name: req.body.Name,
      Description: req.body.Description
    });
    res.json({ fields: field });
  } catch (err) {
    console.log(err.message);
    res.json("field not Created");
  }
};

//GET field

const getfield = async (req, res) => {
  //find
  const field = await Field.find();
  //return
  res.json({ fields: field });
};

//GET field by ID

const getfieldById = async (req, res) => {
  try {
    const field = await Field.findById(req.params.id);
    res.json({ fields: field });
  } catch (err) {
    console.log(err.message);
    res.json("field not found");
  }
};

//DELETE field
const deletefield = async (req, res) => {
  const field = await Field.findByIdAndDelete(req.params.id);
  //return
  res.json("field deleted");
};

//UPDATE field
const updatefield = async (req, res) => {
  try {
    const field = await Field.findByIdAndUpdate(req.params.id, {
      Name: req.body.Name,
      Description: req.body.Description,
      
    });
    res.json("field successfully updated ");
  } catch (err) {
    console.log(err.message);
    res.json("field not updated");
  }
};
module.exports = {
  getfield,
  getfieldById,
  createfield,
  updatefield,
  deletefield,
};
