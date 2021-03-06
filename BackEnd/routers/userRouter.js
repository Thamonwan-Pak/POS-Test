var express = require("express");
var router = express.Router();
var users = require("../models/userModel");

// GET all
router.get("/", (req, res) => {
    users.find().exec((err, data) => {
        if (err) return res.status(400).send({error: {message: err.message, code: err.code}});
        res.status(200).send(data);
  });
});

//GET By ID
router.get("/:_id", (req, res) => {
    users.findById(req.params._id).exec((err, data) => {
      if (err) return res.status(400).send({error: {message: err.message, code: err.code}});
      res.status(200).send(data);
    });
});

//CREATE
router.post("/", (req, res) => {
    var obj = new users(req.body);
    obj.save((err, data) => {
        if (err) return res.status(400).send({error: {message: err.message, code: err.code}});
        res.status(200).send({success: {message: "เพิ่มข้อมูลสำเร็จ."}});
    });
});

//DELETE
router.delete("/:_id", (req, res) => {
    users.findByIdAndDelete(req.params._id, (err, data) => {
        if (err) return res.status(400).send({error: {message: err.message, code: err.code}});
        res.status(200).send({success: {message: "ลบข้อมูลสำเร็จ."}});
    });
});

//UPDATE
router.put("/:_id", (req, res) => {
    users.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
        if (err) return res.status(400).send({error: {message: err.message, code: err.code}});
        res.status(200).send({success: {message: "update ข้อมูลสำเร็จแล้ว."}});
    });
});

module.exports = router;