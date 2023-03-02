import React from "react"
import './registration.css'

function Registration (){

    return(
        <div className="registration">
            <div className="r-container">
                    <div className="r-left">
                    <p className="r-title">Bio</p>


                 </div>
            </div>

            <div className="r2-container">
                <div className="r-right"></div>    
                <div className="flex-container">
                    <div className="projects-card">
                        <p className="project-title">Projects</p>
                        <p>Project description</p>
                    </div> 

                    <div className="projects-card">
                        <p className="project-title">Projects</p>
                        <p>Project description</p>
                    </div> 

                    <div className="projects-card">
                        <p className="project-title">Projects</p>
                        <p>Project description</p>
                    </div> 

                    <div className="projects-card">
                        <p className="project-title">Projects</p>
                        <p>Project description</p>
                    </div> 
                

               

                </div>
            </div>
        </div>        
    )
}

export default Registration