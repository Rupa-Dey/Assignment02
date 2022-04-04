const express = require("express");
const router = express.Router();
router.use(express.json());
const Leaders = require("../models/leadersSchema");

router.get("/", (req, res) => {
  Leaders.find()
    .then((result) => {
      res.send(result);
    })
    //Exception Handling
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Leaders.find({ id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const leader = new Leaders(req.body);
  leader
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  Leaders.updateOne({ id: req.params.id }, req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  Leaders.deleteOne({ id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
