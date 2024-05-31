const modelDetails = require("../../models/models");
const model_details = async (req, res) => {
  const { key, dataType, description, example, type } = req.body;
  const newDetail = await modelDetails.create({
    key: key,
    dataType: dataType,
    description: description,
    example: example,
    type: type,
  });

  return res.send(newDetail);
};

module.exports = model_details;
