// NewPlayerForm.jsx
import React, { useState } from 'react';
import { addNewPlayer } from '../API';

const NewPlayerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    breed: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          id="name" // Add id attribute
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age" // Add id attribute
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed" // Add id attribute
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl" // Add id attribute
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
