import React from 'react'
import {Link} from 'react-router-dom'



export default function Heaader(){


    return (
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <h1 style={{fontSize:'1rem'}}><Link style={{textDecoration:'none'}} to='/'>Muon Blog</Link></h1>
            <Link style={{textDecoration:'none'}} to='/posts/create'>+Add post</Link>
        </div>
    )
}