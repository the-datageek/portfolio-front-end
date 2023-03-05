import React from 'react'
import './my-profile.css'
import {MdOutlineDeleteSweep} from "react-icons/md"

 function ProfileCard({title,description,id, deleteProject}) {


  return (
    <div key={id}>

        <div key={id} className="projects-card">
                <p className="project-title">{title}</p>
                <p>{description}</p>
                <button onClick={()=> deleteProject(id)} className="prof-del"><MdOutlineDeleteSweep/></button>
                {/* <button key={id} onClick={()=> deleteProject(id)}><ion-icon name="trash-outline"></ion-icon></button> */}
                
        </div> 
      
    </div>
  )
}

export default ProfileCard
