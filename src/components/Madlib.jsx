import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";
import StorySelector from "./StorySelector";

const stories = {
  story1: "Once upon a time, there was a [noun 1] and a [noun 2] who loved to [verb] in the [adjective] forest. The sky was [color].",
  story2: "The [noun 1] and [noun 2] were very [adjective] and loved to [verb] under the [color] sky.",
  // Add more stories here
};

function Madlib() {
  const [formData, setFormData] = useState({});
  const [currentStory, setCurrentStory] = useState("story1");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setFormData({});
    setIsSubmitted(false);
  };

  return (
    <div>
      {isSubmitted ? (
        <MadlibStory
          story={stories[currentStory]}
          formData={formData}
          onRestart={handleRestart}
        />
      ) : (
        <>
          <StorySelector
            stories={stories}
            currentStory={currentStory}
            setCurrentStory={setCurrentStory}
          />
          <MadlibForm onSubmit={handleSubmit} storyTemplate={stories[currentStory]} />
        </>
      )}
    </div>
  );
}

export default Madlib;
