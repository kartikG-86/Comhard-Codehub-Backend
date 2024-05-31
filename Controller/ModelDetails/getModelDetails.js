const modelDetails = require("../../models/models");

const getModelDetails = async (req, res) => {
  const type = req.params.type;
  console.log(type.toLowerCase());
  const aggregation = [
    {
      $addFields: {
        type: {
          $toLower: "$type",
        },
      },
    },
    {
      $match: {
        type: type.toLowerCase(),
      },
    },
  ];

  const detailsRes = await modelDetails.aggregate(aggregation);
  console.log(detailsRes);
  return res.send(detailsRes);
};

module.exports = getModelDetails;
