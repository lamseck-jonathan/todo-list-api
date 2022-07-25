const Task = require("../models/task");

exports.createTask = (req,res,next) => {
    delete req.body._id;
    console.log(req.body)
    const task = new Task({
        ...req.body
    });
    task.save()
    .then(() => res.status(201).json({
        ...req.body,
        message : "Task added successfully"
    }))
    .catch((error) => res.status(400).json(error))
}

exports.modifyTask = (req,res,next) => {
    console.log(req.body)
    console.log(req.params.id)
    Task.updateOne({ _id : req.params.id},{...req.body,_id:req.params.id})
    .then(() => res.status(200).json({
        ...req.body,
        message:"modified successfully"}))
    .catch((error) => res.status(400).json(error))
}

exports.deleteTask = (req,res,next) => {
    Task.deleteOne({ _id : req.params.id })
    .then(() => res.status(200).json({message:"deleted successfully"}))
    .catch((error) => res.status(400).json(error))
}

exports.getOneTask = (req,res,next) => {
    Task.findOne({ _id : req.params.id })
    .then(task => res.status(200).json(task))
    .catch((error) => res.status(400).json(error))
}

exports.getAllTask = (req,res,next) => {
    Task.find()
    .then(tasks => res.status(200).json(tasks))
    .catch((error) => res.status(400).json(error))
}