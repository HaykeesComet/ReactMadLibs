import React from "react";

function MadlibStory({ story, formData, onRestart }) {
  const generateStory = () => {
    let finalStory = story;
    Object.keys(formData).forEach((key) => {
      const regex = new RegExp(`\\[${key}\\]`, "g");
      finalStory = finalStory.replace(regex, formData[key]);
    });
    return finalStory;
  };

  return (
    <div>
      <p>{generateStory()}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default MadlibStory;
