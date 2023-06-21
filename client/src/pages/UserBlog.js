import React,{useState, useEffect} from 'react'
import axios from 'axios'
const UserBlog = () => {
    const [blogs, setBlogs] = useState([])
     
    //get user blogs
    const getUserBlogs = async () =>{
        try{
            const  id = localStorage.getItem('userId')
            const {data} = await axios.get(`/api/v1/blog/user-blog/${id}`)
            if(dta?.success){
                setBlogs(data?.userBlog)
            }

        }catch (error){
            console.log (error)
        }
    };
    useEffect(()=>{
        getUserBlogs();

    },[]);
  return (
    <div>
      
    </div>
  )
}

export default UserBlog
