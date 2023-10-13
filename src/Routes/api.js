const express = require('express')
const router = express.Router()
const profileController = require('../controller/profileController')
const AuthverifyMiddleware = require('../middleware/Authverifymiddleware')
const todoController = require('../controller/todoListController')

router.post('/createProfile', profileController.createProfile)
router.post('/userLogin', profileController.userLogin)
router.get('/demo', profileController.demo)
router.get('/selectProfile',AuthverifyMiddleware, profileController.SelectProfile)
router.post('/updateProfile', AuthverifyMiddleware, profileController.updateProfile)

//to do api
router.post('/createTodo', AuthverifyMiddleware, todoController.createTodo)
router.get('/selectTodo', AuthverifyMiddleware, todoController.selectTodo)
router.post('/updateTodo', AuthverifyMiddleware, todoController.updateTodo)
router.post('/updateStatusTodo', AuthverifyMiddleware, todoController.updateStatusTodo)
router.post('/deleteTodo', AuthverifyMiddleware, todoController.DeleteTodo)


module.exports = router