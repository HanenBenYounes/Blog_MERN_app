const express = require ('express')
const { getAllBlogsController,
     updateBlogController, 
     getBlogIdController,
      deleteBlogController, 
      createBlogController} = require('../controllers/blogController')

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

module.exports = router