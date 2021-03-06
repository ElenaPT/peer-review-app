const Scholar = require('../models/Scholar');
// const mongo = require('../utils/mongo');
// const db = mongo.getDb();

// Get /accounts
exports.getAccount = async (req, res) => {
  let address = req.params.address;
  console.log('Address is');
  console.log(address);

  Scholar.findById(address).then(scholar => {
    console.log(`Returning the scholar: ${scholar}`)
    if (scholar)
      res.status(200).json(scholar);
    else
      res.status(404).send('No scholar found');
  }).catch(err => {
    res.status(500).send(err);
  });

  // console.log(review);
  // review.save().then(
  //   console.log('Successfully saved the review')
  // ).catch(err => console.log(err));

};