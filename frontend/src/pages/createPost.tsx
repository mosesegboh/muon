import React, { useState } from 'react'
import Layout from '../components/layout'
import {PostCreate} from '../services'

export default function CreatePost(){

   const [post,setPost]= useState({
       title:'',
       content:''
   })

   async function handleSubmit(e){
       e.preventDefault()
        await PostCreate(post)
   }

   function handleChange(event:React.SyntheticEvent){
        const mypost:any = {...post}
        mypost[event.currentTarget.name] = event.currentTarget.value
        setPost(mypost)

   }

    return (
        <Layout>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input onChange={e=>handleChange(e)} name={'title'} id={'title'} value={post.title}/>
                <textarea onChange={e=>handleChange(e)} name={'content'} value={post.content}/>
                <button type={'submit'}>submit</button>
            </form>
        </Layout>
    )
}