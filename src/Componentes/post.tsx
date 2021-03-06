 import styles from './post.module.css'
 import {Comment} from'./Comment.jsx'
 import {Avatar} from'./Avatar.jsx'
 import {format,formatDistanceToNow} from 'date-fns'
 import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState,ChangeEvent, InvalidEvent } from 'react'

interface author{

  name:string;
  role:string;
  url:string;

}
interface content{

  type:'paragraph'| 'link';
  content:string;
}
interface postProps{
    author:author;
    publishedAt:Date;
    content:content[]

}
 export function Post({author,publishedAt,content}:postProps){

  console.log(content)

  const [newComment,setNewComment] =useState('')

  const [comment, setComment]=useState([
  
  ])

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){

    event.target.setCustomValidity('Preencha o campo comentário')
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>){
   
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
    console.log(newComment)
  }

  function handleCreateComment(event:FormEvent){

    
      event.preventDefault()
     
     setComment([...comment,newComment])
    
     setNewComment([''])
     
  } function deleteComment(commentToDelete:string){

    const commentsWithoutDeletedOne=comment.filter(comment =>{
      return comment !== commentToDelete;
    })
    setComment(commentsWithoutDeletedOne);
  }
    const dateFormatted = format(publishedAt,"d 'de' LLLL' às 'HH:mm'h'",{
      locale:ptBR,
    })

    const dateDistanceRelativeToNow=formatDistanceToNow(publishedAt,{
      locale:ptBR,
      addSuffix:true,
    })
    const isNewCommentEmpty=newComment==0;
    return (
        <article className={styles.post}>

           <header>
            <div className={styles.author}>
              <div className={styles.divAvatar}>
              <Avatar  src={author.authorAvatar}></Avatar>
              </div>
            
            <div className={styles.authorinfo}>
              <strong >{author.authorName}</strong>
              <span>{author.authorRole}</span>
            </div>
            </div>
            <time title={dateFormatted} dateTime={publishedAt.toISOString()}>{dateDistanceRelativeToNow} </time>
           </header>

           <div className={styles.content}>
           {content.map(line=>{
            if(line.type=='paragraph'){
              return(
                <p key={line.content}><br />{line.content} <br/></p>
              )
            }else if(line.type==='link'){
              return(
                <p key={line.content}><br /><a href="#">{line.content}</a></p>
              )
            }
           })}
           </div>
           <form  onSubmit={handleCreateComment} className={styles.CommentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea 
            placeholder='Deixe seu Comentário'
            name="comment"
            onChange={handleNewComment}
            value={newComment}
            required
            onInvalid={handleNewCommentInvalid}
            />
            <footer>
            <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
            </footer>
            
           </form >

           <div className={styles.commentList}>

            {comment.map(comment=>{
              return(
                <Comment 
                commentText={comment}
                key={comment}
                deleteComment={deleteComment}
                ></Comment>
              )
            })}
            
          
      
           </div>
               
        </article>
      
    )
}