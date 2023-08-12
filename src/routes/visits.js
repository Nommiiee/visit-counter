const express = require("express");
const router = express.Router();
const visitorSchema = require("../model/visitsorModel.js");

router.get("/:indentifier", async (req, res) => {
  try {
    const indentifier = req.params.indentifier.toString();
    const visitor = await visitorSchema.findOne({
      uniqueIdentity: indentifier,
    });
    if (!visitor || visitor === null || visitor === undefined) {
      const newVisitor = new visitorSchema({
        uniqueIdentity: indentifier,
        totalVisits: 1,
      });
      await newVisitor.save();
      res.json(newVisitor);
    } else {
      visitor.totalVisits += 1;
      await visitor.save();
      res.json(visitor);
    }
  } catch (error) {
    res.json({
      message: error,
      uniqueIdentity: "Error",
      totalVisits: 0,
    });
  }
});

module.exports = router;
