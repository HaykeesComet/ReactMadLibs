import React from "react";

function StorySelector({ stories, currentStory, setCurrentStory }) {
  return (
    <div>
      <label>Select a story:</label>
      <select value={currentStory} onChange={(e) => setCurrentStory(e.target.value)}>
        {Object.keys(stories).map((storyKey) => (
          <option key={storyKey} value={storyKey}>
            Story {storyKey.slice(-1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StorySelector;
