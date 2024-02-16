import React, { useState } from 'react';

const SkillChecklist = () => {
  const [skills, setSkills] = useState([]);

  const handleSkillChange = (e) => {  //yahan pe e as a parameter liya ja raha 
    const { value, checked } = e.target;              //e.target se real time value mungwaty thy na hum, abhi mungwa rhy value=html & t/f checked or not
    setSkills((prevSkills) =>   // ab hum apny set skills function ko change kr rhy 
      checked ? [...prevSkills, value] : prevSkills.filter((skill) => skill !== value)//true: purani,abhi jo ha //false: skill=skill not equal to value and by filter agar not equal to hota to wo element filtered ho kr skip hojata
    );
  };

  // prevSkills: It represents the previous array of skills stored in the skills state.
  //.filter chalega on each element of array prevskills. For each element, the callback function (skill) => skill !== value is executed.
  //The skill parameter in the callback represents the current skill being processed.
  //The callback compares each skill (skill) with the value of the unchecked checkbox.
  //If the skill is equal to the value, it means the checkbox for that skill is unchecked. In this case, the callback will return false, and the skill will be excluded from the new filtered array.
  //If the skill is not equal to the value, it means the checkbox for that skill is checked. In this case, the callback will return true, and the skill will be included in the new filtered array.
  //As a result, the filter method creates a new array containing only the checked skills by excluding the unchecked skill (skill whose checkbox is unchecked). This new filtered array is then used to update the skills state through the setSkills function.


  return (
    <div>
      <h2>Skill Checklist</h2>
      <label>
        <input
          type="checkbox"
          value="HTML"
          checked={skills.includes('HTML')}   //.includes returns true and false kya skills main html hai?
          onChange={handleSkillChange}      //on change pe function call ho raha 
        />
        HTML
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="CSS"
          checked={skills.includes('CSS')}
          onChange={handleSkillChange}
        />
        CSS
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="JS"
          checked={skills.includes('JS')}
          onChange={handleSkillChange}
        />
        JavaScript
      </label>
      <br />
      <p>Selected Skills: {skills.join(', ')}</p>
    </div>
  );
};

export default SkillChecklist;


// Sure, let me explain the code line by line:

// 1. `import React, { useState } from 'react';`: This line imports the necessary modules for React and the `useState` hook, which allows us to add state to functional components.

// 2. `const SkillChecklist = () => {`: This line defines a functional component named `SkillChecklist`.

// 3. `const [skills, setSkills] = useState([]);`: This line initializes a state variable called `skills` and a function called `setSkills` using the `useState` hook. The initial value of `skills` is an empty array.

// 4. `const handleSkillChange = (event) => {`: This line defines a function named `handleSkillChange` that will be called when a checkbox is changed.

// 5. `const { value, checked } = event.target;`: This line uses destructuring to extract the `value` and `checked` properties from the `event.target` object. The `value` represents the value attribute of the checkbox, and `checked` indicates whether the checkbox is checked or not.

// 6. `setSkills((prevSkills) => checked ? [...prevSkills, value] : prevSkills.filter((skill) => skill !== value));`: This line updates the `skills` state based on the checkbox change. If the checkbox is checked (`checked` is true), the `setSkills` function is called with a callback that appends the `value` of the checkbox to the previous `prevSkills` array using the spread operator `...`. If the checkbox is unchecked (`checked` is false), it filters out the unchecked skill from the `prevSkills` array using the `filter` method.

// 7. The rest of the code renders the UI of the component:
//    - It displays a heading with the text "Skill Checklist" using the `<h2>` element.
//    - It renders three checkboxes for HTML, CSS, and JavaScript, respectively.
//    - Each checkbox is associated with a label using the `<label>` element.
//    - The `checked` attribute of each checkbox is controlled by the `skills` state. It uses the `includes` method to check if a skill is in the `skills` array, and if so, the checkbox will be checked.
//    - When a user checks or unchecks a checkbox, the `onChange` event is triggered, which calls the `handleSkillChange` function to update the `skills` state.
//    - Finally, it displays the selected skills below the checkboxes using the `<p>` element with the text "Selected Skills: " followed by the selected skills joined with commas using the `join` method.

// 8. `export default SkillChecklist;`: This line exports the `SkillChecklist` component so that it can be used in other parts of the application.