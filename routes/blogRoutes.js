const express = require ('express')
const { getAllBlogsController,
     updateBlogController, 
     getBlogIdController,
      deleteBlogController, 
      createBlogController,
      userBlogController} = require('../controllers/blogController')
const userModel = require('../models/userModel')

//router object
const router = express.Router()

//routes
//Get || all blogs

router.get('/all-blog', getAllBlogsController)

//POST || create blog
router.post('/create-blog', createBlogController)

//PUT || update blog
router.put ('/update-blog/:id', updateBlogController)

//GET ||Single blog details

router.get('/get-blog/:id', getBlogIdController)

//DELETE || delete blog
router.delete ('/delete-blog/:id', deleteBlogController)
// GET || user blog
router.get('/user-blog/:id', userBlogController)

module.exports = router