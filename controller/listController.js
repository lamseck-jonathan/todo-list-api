const List = require("../models/list");

exports.createList = (req,res,next) => {
    delete req._id;
    const list = new List({
        ...req.body
    })
    list.save()
    .then(() => res.status(201).json(
        ...req.body,
        {message : " List added successfully"}
    ))
    .catch((error) => res.status(400).json(error))
}

exports.modifyList = (req,res,next) => {
    List.updateOne({_id : req.params.id},{...req.body,_id:req.params.id})
    .then(() => res.status(200).json(
        ...req.body,
        {message:"modified successfully"}
    ))
    .catch((error) => res.status(400).json(error))
}

exports.deleteList = (req,res,next) => {
    List.deleteOne({_id : req.params.id})
    .then(() => res.status(200).json(
        {message:"deleted successfully"}
    ))
    .catch((error) => res.status(400).json(error))
}

exports.getOneList = (req,res,next) => {
    List.findOne({_id : req.params.id})
    .then(list => res.status(200).json(list))
    .catch((error) => res.status(400).json(error))
}

exports.getLists = (req,res,next) => {
    List.find()
    .then(lists => res.status(200).json(lists))
    .catch((error) => res.status(400).json(error))
}