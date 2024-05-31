const express = require("express");
const router = express.Router();
const addModelDetails = require("../Controller/ModelDetails/addModelDetails");
const getModelDetails = require("../Controller/ModelDetails/getModelDetails");
// add model details
router.post("/details", addModelDetails);

// fetch model details

router.get("/get_model_details/:type", getModelDetails);

module.exports = router;
