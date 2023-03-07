import React, { useState } from 'react';
import './form.css';




function ProjectsForm() {
  const [Projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const MAX_ProjectS = 10;
  const handleNewProjectChange = (event) => {
    setNewProject(event.target.value);
  };

  const handleAddProject = (event) => {
    event.preventDefault();
    if (editingIndex === null) {
      if (Projects.length < MAX_ProjectS) {
        setProjects([...Projects, newProject]);
        setNewProject('');
      } else {
        alert(`You can't add more than ${MAX_ProjectS} Projects`);
      }
    } else {
      const newProjects = [...Projects];
      newProjects[editingIndex] = newProject;
      setProjects(newProjects);
      setNewProject('');
      setEditingIndex(null);
    }
  };

  const handleEditProject = (ProjectIndex) => {
    setNewProject(Projects[ProjectIndex]);
    setEditingIndex(ProjectIndex);
  };

  const handleDeleteProject = (ProjectIndex) => {
    setProjects(Projects.filter((_, index) => index !== ProjectIndex));
    setEditingIndex(null);
  };

  return (
    <div className='proj-cont'>
      <div className='s-left'>


      <div className='p-form'>
      <h2 className='title-tag'>My Projects </h2>
      <form className='project-form' onSubmit={handleAddProject}>
        <label className="p-title" htmlFor="new-Project">New Project:</label>
        <input
          type="text"
          id="new-Project"
          value={newProject}
          onChange={handleNewProjectChange}
          className='project-input'
        />
        <button  className='add-p-btn' type="submit">{editingIndex !== null ? 'Save Project' : 'Add Project'}</button>
      </form>

      </div>
      
     
     <div >
     <div className='display'>
      <div className='proj-list'>
      {Projects.length > 0 ? (
        <ul>
          {Projects.map((Project, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <input 
                type="text" 
                value={newProject} 
                onChange={handleNewProjectChange} 
                className='p-input'/>
              ) : (
                <>{Project}</>
              )}
              {editingIndex === index ? (
                <button className='cancel-btn' onClick={() => setEditingIndex(null)}>Cancel</button>
              ) : (
                <>
                  <button className='edit-btn'  onClick={() => handleEditProject(index)}>Edit</button>
                  <button className='delete-btn' onClick={() => handleDeleteProject(index)}>X</button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className='err-msg'>No Projects added yet</p>
      )}


      </div>

      </div>

     </div>
     
    
      
    
    </div>
    </div>
  );
}

export default ProjectsForm;