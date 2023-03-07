import React, {useState} from "react"
import './registration.css'
import Image from './img.jpeg'
import {Link} from 'react-router-dom'
import ProjectsForm from '../forms/projectform'
import SkillsForm from '../forms/skillsform'

function Registration(props){
    const [ img, setImg] = useState(props.src)
    const [name, setName] = useState()
    const [email, setEmail] =useState()
    const [project, setProject]  = useState()
    const [skill, setSkill]  = useState()

    const handleImageError = () => {
        setImg('placeholder.png')
    }

    return(
        <div className="reg-container">
            <div className="r-left">
            
                <img src={'https://tinyurl.com/36s7vvdk'} alt="Add Image" onError={handleImageError} className="reg-img" />

                <div className="reg-user-det">
                <p className="reg-name">Name</p>
                <p className="reg-email">Email</p>

                </div>
                
                <ProjectsForm/> 
                <SkillsForm/>
               
                <Link to="/bio"><button className="reg-btn">Save Changes</button></Link>
                
            
           
            </div>
        </div>
    )

}


export default Registration