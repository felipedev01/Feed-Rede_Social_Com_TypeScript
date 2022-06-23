import Styles from './Avatar.module.css'
export function Avatar({hasBorder=true,src}){

   
    return(
        
            <img src={src} className={hasBorder ? Styles.AvatarWithBorder:Styles.Avatar} alt="" />
        
       
    )
}