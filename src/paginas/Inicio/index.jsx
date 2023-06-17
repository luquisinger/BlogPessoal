import React from 'react'

import styles from './Inicio.module.css'
import posts from 'assets/json/posts.json'
import PostCard from 'componentes/PostCard'


export default function Inicio() {
  return (

        <ul className={styles.posts}>
          {posts.map((post) => (
              <li key={posts.id}>
                <PostCard post={post} />
              </li>
          ))} 
        </ul>  
  )
}
