import React, { useState } from "react";

function MadlibForm({ onSubmit, storyTemplate }) {
  const placeholders = storyTemplate.match(/\[(.*?)\]/g).map((placeholder) => placeholder.slice(1, -1));
  const [formState, setFormState] = useState(
    placeholders.reduce((acc, placeholder) => ({ ...acc, [placeholder]: "" }), {})
  );

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    const isFormValid = Object.values(formState).every((val) => val.trim() !== "");
    if (isFormValid) {
      onSubmit(formState);
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {placeholders.map((placeholder) => (
        <div key={placeholder}>
          <label>{placeholder}:</label>
          <input
            type="text"
            name={placeholder}
            value={formState[placeholder]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Create Story</button>
    </form>
  );
}

export default MadlibForm;
