import {Avatar} from './Avatar.jsx'
import Styles from './Sidebar.module.css'
import EditIcon from '../Assets/edit.svg'

console.log(EditIcon)

export function Sidebar(){

    return(
        <aside className={Styles.Sidebar}>

            <img className={Styles.cover} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hS6_zSCJKGaLJnuZjqxRmgmQ-exn6wgvfg&usqp=CAU" 
            alt="" />
            <div className={Styles.profile}>
               <Avatar src="https://xesque.rocketseat.dev/users/avatar/profile-4706ed19-0060-42d0-9f2a-d5d61fdb9b6f-1635537196786.jpg"></Avatar>
                <strong>Felipe Cristovão da Silva</strong>
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