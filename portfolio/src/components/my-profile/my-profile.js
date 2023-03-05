import React from "react"
import './my-profile.css'
import ProfileCard from './profile-card'
import { useState,useEffect } from "react"


function Profile (){

    

    const [profile, setProfile] = useState([])


    useEffect( ()=>{
        fetch("http://127.0.0.1:9292/projects")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setProfile(data)
            // data.map(element => {
            //     setTitle(element.title)
            //     console.log(title)
            //     setDescription(element.description)
            //     console.log(description)
            // });
        })
    },[])

    function deleteProject(id){
        fetch(`http://127.0.0.1:9292//projects/destroy/${id}`,{
          method: "DELETE"
        })
        .then(()=>{
            setProfile((prof) => prof.filter((it) => it.id !== id))
        })
    }

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
                   
                    {profile.map((value)=><ProfileCard title={value.title} description={value.description} key={value.id} id={value.id} deleteProject={deleteProject}/>)}

                </div>
            </div>
        </div>        
    )
}

export default Profile