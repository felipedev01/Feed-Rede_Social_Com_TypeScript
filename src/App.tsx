import {Post} from './Componentes/post.jsx'
import {Header} from './Componentes/Header.jsx'
import './Global.css'
import Styles from './App.module.css'
import {Sidebar} from './Componentes/Sidebar.jsx'

const posts= [
  {
    id:1,
    author:{
            authorAvatar:"https://github.com/diego3g.png",
            authorName:"Diego Fernades",
            authorRole:"Web Developer"
           },
    publishedAt:new Date('2022-06-20 07:00:00'),

    content:[{
      type:'paragraph',
      content:'Fala galeraa 👋',
    },
    {
      type:'paragraph',
      content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',

    },
    {
      type:'link',
      content:'👉 jane.design/doctorcare',
    },
    {
      type:'link',
      content:'#novoprojeto #nlw #rocketseat'
    }
    

  ]

  
  },
  {
    id:2,
    author:{
            authorAvatar:"https://github.com/felipedev01.png",
            authorName:"Felipe Cristovão da Silva",
            authorRole:"Web Developer"
           },
    publishedAt:new Date('2022-01-20 07:00:00'),

    content:[{
      type:'paragraph',
      content:'Fala galeraa 👋',
    },
    {
      type:'paragraph',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      type:'link',
      content:'👉 jane.design/doctorcare',
    },
    {
      type:'link',
      content:'#novoprojeto #nlw #rocketseat'
    }
    

  ]

  
  }
]


export function App() {

  return(

    <div>


      <Header></Header>

     <div className={Styles.Wrapper}>
     <Sidebar></Sidebar>
       <main>
       {posts.map(post =>{
        return(
             <Post 
             key={post.id}
             author={post.author}
             content={post.content}
             publishedAt={post.publishedAt}
             >

             </Post>
        )
       })
      
      }

       </main>
     </div>
      
      
      
     
          
  
    
    </div>
    
  )

  
  
}


