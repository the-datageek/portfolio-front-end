import React, { useState } from 'react';
import './form.css';

function SkillsForm() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const MAX_SKILLS = 10;
  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    if (editingIndex === null) {
      if (skills.length < MAX_SKILLS) {
        setSkills([...skills, newSkill]);
        setNewSkill('');
      } else {
        alert(`You can't add more than ${MAX_SKILLS} skills`);
      }
    } else {
      const newSkills = [...skills];
      newSkills[editingIndex] = newSkill;
      setSkills(newSkills);
      setNewSkill('');
      setEditingIndex(null);
    }
  };

  const handleEditSkill = (skillIndex) => {
    setNewSkill(skills[skillIndex]);
    setEditingIndex(skillIndex);
  };

  const handleDeleteSkill = (skillIndex) => {
    setSkills(skills.filter((_, index) => index !== skillIndex));
    setEditingIndex(null);
  };

  return (
    <div className='proj-cont'> 
    <div className='s-left'>
           <div className='p-form'>
      <h2 className='title-tag'>My Skills</h2>
      <form className='skill-form' onSubmit={handleAddSkill}>
        <label className="p-title" htmlFor="new-skill">New Skill:</label>
        <input
          type="text"
          id="new-skill"
          value={newSkill}
          onChange={handleNewSkillChange}
          className="skill-input"
        />
        <button className='skill-btn' type="submit">{editingIndex !== null ? 'Save Skill' : 'Add Skill'}</button>
      </form>
    </div>

    </div>

     <div >
        <div className='display'>
        <div className='proj-list'>
         {skills.length > 0 ? (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <input 
                type="text" 
                value={newSkill} 
                onChange={handleNewSkillChange} 
                className='added-skill'/>
              ) : (
                <>{skill}</>
              )}
              {editingIndex === index ? (
                <button className='cancel-btn' onClick={() => setEditingIndex(null)}>Cancel</button>
              ) : (
                <>
              <button className='edit-btn'  onClick={() => handleEditSkill(index)}>Edit</button>
                  <button className='delete-btn' onClick={() => handleDeleteSkill(index)}>X</button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className='err-msg'>No skills added yet</p>
      )}


    </div>


     </div>
     </div>
     
    

     
    </div>
  );
}

export default SkillsForm;