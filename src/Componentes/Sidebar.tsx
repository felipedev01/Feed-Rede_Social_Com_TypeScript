import {Avatar} from './Avatar.jsx'
import Styles from './Sidebar.module.css'
import EditIcon from '../Assets/edit.svg'

console.log(EditIcon)

export function Sidebar(){

    return(
        <aside className={Styles.Sidebar}>

            <img className={Styles.cover} src="https://images.unsplash.com/photo-1615921983172-638995cbd490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8YkNVNmtfS1B1dVl8fGVufDB8fHx8&auto=format&fit=crop&w=259&q=60" 
            alt="" />
            <div className={Styles.profile}>
               <Avatar src="https://github.com/diego3g.png"></Avatar>
                <strong>Felipe Cristovão</strong>
                <span>Web developer</span>
                
            </div>
            <footer>
                    <a href="#">
                    <img className={Styles.editlogo} src="/src/Assets/edit.svg" alt="edit logo" />
                       
                        Editar seu perfil
                    </a>
                </footer>
          
        </aside>
    )
}