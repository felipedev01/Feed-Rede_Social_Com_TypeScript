import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import {Avatar} from'./Avatar.jsx'
import { useState } from 'react'
import { set } from 'date-fns/esm'

export function Comment({commentText,deleteComment}){

  const[likesCount,setLikesCount]=useState(0)

  function handleLikeComment(){
    setLikesCount((state)=>{
      return state+1
    })
    
  }

  function onDeleteComment(){

    deleteComment(commentText)
    
  }

  console.log(commentText)

    return(
         <div className={styles.comment}>

           <Avatar hasBorder={false} src='https://github.com/diego3g.png'></Avatar>
            <div className={styles.commentBox}>
             <div className={styles.commentContent}>
             <header>
              <div className={styles.authorAndTime}>
              <strong>Felipe Cristovão</strong>
              
              <time title='16 de junho' dateTime='2022-06-16'>Cerca de há 1h atrás</time>
            

                

              </div>
                
                <button title='Botão deletar'onClick={onDeleteComment}>
                    <Trash size={24} ></Trash>
                </button>

             </header>

             <p>{commentText}</p>
             </div>
          <footer>
           <button className={styles.applaudButton} onClick={handleLikeComment}>
            <ThumbsUp size={20} className={styles.applaudIcon}/> Aplaudir
            <div className={styles.applaudCount}>{likesCount}</div>
           </button>
          </footer>
         </div>
           </div>
        
    )
}