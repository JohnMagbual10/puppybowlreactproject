import React, { useState } from 'react';
import { addNewPlayer } from '../API';

const NewPlayerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    breed: '',
    imageUrl: ''
  });

  const [errors, setErrors] = useState({}); // State for validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form fields
    const validationErrors = {};
    if (formData.name.trim() === '') {
      validationErrors.name = 'Name is required';
    }
    if (formData.age.trim() === '' || isNaN(formData.age)) {
      validationErrors.age = 'Age must be a number';
    }
    // Add more validation rules as needed...

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Prevent form submission if there are validation errors
    }

    try {
      await addNewPlayer(formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        age: '',
        breed: '',
        imageUrl: ''
      });
      alert('New player added successfully!');
    } catch (error) {
      console.error('Error adding new player:', error);
      alert('Failed to add new player. Please try again.');
    }
  };

  return (
    <div id="new-player-form">
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p className="error">{errors.age}</p>}
        
        {/* Add input fields for breed and imageUrl with similar validation and error display */}
        
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
