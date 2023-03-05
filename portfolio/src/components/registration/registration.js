import React, {useState} from "react"
import './registration.css'
import Image from './img.jpeg'


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
            
                <img src={Image} alt="Add Image" onError={handleImageError} className="reg-img" />

                <div className="reg-user-det">
                <p className="reg-name">Name</p>
                <p className="reg-email">Email</p>

                </div>
                
         

            
                <div>
                    <p className="reg-title">Add Projects</p>
                    
                    <input
                    type="text" 
                    onChange={project}
                    placeholder="Add Project Name"
                    className="reg-project-name"
                    /> 
          
                <textarea className="reg-project-desc">Add project description</textarea>
                    
                 
                </div>

                <div>
                    <p className="reg-title">Add Skills</p>
                    <input
                    type="text" 
                    onChange={skill}
                    placeholder="Add skills"
                    className="reg-skill-name"
                    />  

               <textarea className="reg-skill-desc">Add project description</textarea>
                   
                </div>

            

            </div>
            <div className="r-right">
                <button className="reg-btn">Save Changes</button>
            </div>
            
        </div>
    )

}


export default Registration