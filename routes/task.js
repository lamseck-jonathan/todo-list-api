const express = require('express')
const taskController = require('../controller/taskController')
const router = express.Router();

router.post("/",taskController.createTask);
router.put("/:id",taskController.modifyTask);
router.delete("/:id",taskController.deleteTask);
router.get("/:id",taskController.getOneTask);
router.get("/",taskController.getAllTask);

module.exports = router;