import React from 'react'
import './MyForm.css'
import  { useState } from 'react'

const MyForm = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
    save_password: '',
    Gender: '',
    Education: '',
    DateofBirth: '',
    CGPA: '',
    color: '#000000',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
       <h1>Registration Form</h1>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="FirstName"
          value={formData.FirstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="LastName"
          value={formData.LastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="save_password"
            checked={formData.save_password}
            onChange={handleChange}
          />
          save password
        </label>
      </div>
      <div>
      
        <label>
        
          <input
            type="radio"
            name="Gender"
            value="Male"
            checked={formData.Gender === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="Gender"
            value="Female"
            checked={formData.Gender === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      <div>
        <label>Education:</label>
        <select
          name="Education"
          value={formData.Education}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="Matric level">Matric level</option>
          <option value="Intermediate level">Intermediate level </option>
          <option value="Bachlors">Bachlors</option>
          <option value="Masters">Masters</option>
        </select>
      </div>
      <div>
        <label>Date of Birth</label>
        <input
          type="date"
          name="DateofBirth"
          value={formData.DateofBirth}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>CGPA</label>
        <input
          type="number"
          name="CGPA"
          value={formData.CGPA}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Choose color</label>
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
        
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    
    </form>
</div>
  );
};



// import user_icon from '../Assets/users.png'

// import email_icon from '../Assets/mails.png'
// import password_icon from '../Assets/hides.png'
// export const Basicform = () => {
//   return (
//     <div className= 'container'>
//         <div className = 'header'>
//         <div className= 'text'>Basicform</div>
//         <div className= 'underline'></div>

//         </div>
//         <div className= 'inputs'>
//         <div className= 'input'>
//         <img src ={user_icon}  alt=""/>
//         <input type = "text" />
//     </div>
//     <div className= 'input'>
//         <img src ={email_icon}  alt=""/>
//         <input type = "email" />
//     </div>
//     <div className= 'input'>
//         <img src ={password_icon}  alt=""/>
//         <input type = "password" />
//     </div>
//     <div className= 'input'>
        
//         <input type = "checkbox" />
//     </div>
//     <div className= 'input'>
        
//         <input type = "radio" />

//     </div>
//     <div className= 'input'>
        
//         <input type = "ropdown" />
//     </div>
    
//     </div>
//     </div>
    

//   )
// }
export default MyForm;