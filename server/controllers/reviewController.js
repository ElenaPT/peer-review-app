const connection = require('../connection/reviewConnection');

exports.getReview = async (req, res) => {
  let review;
  try {
    review = await connection.getReview(req.params.addr, req.params.reviewIndex);
    console.log(review);

    let response = {
      journalId: review[0],
      manuscriptId: review[1],
      manuscripthash: review[2],
      timestamp: review[3].toNumber(), // Handle BigNumber
      recommendation: review[4].toNumber(),
      verified: review[5],
      vouchers: review[6]
    }
    res.send(response);
  } catch (e) {
    console.log(e)
    return res.status(404).json({message: 'Review not found'});
  }
}

exports.addReview = async (req, res) => {
  console.log(`IN ADD REVIEW`);
  console.log(req.body);
  let review = req.body;
  let author = req.params.addr;

  try {
    let result = await connection.addReview(author, review);
    console.log(`Tx hash is ${result.tx}`);
    return res.status(200).send(result);
  } catch (e) {
    return res.status(500).json({error: e})
  }
}