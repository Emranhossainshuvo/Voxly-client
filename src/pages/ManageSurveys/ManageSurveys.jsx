import React, { useState } from 'react';

const ManageSurvey = () => {
  // Sample survey data, replace it with your actual data
  const surveyData = [
    { id: 1, title: 'Survey 1', questions: 10 },
    { id: 2, title: 'Survey 2', questions: 15 },
    // Add more survey objects as needed
  ];

  // State to track selected surveys for deletion or update
  const [selectedSurveys, setSelectedSurveys] = useState([]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (surveyId) => {
    const isSelected = selectedSurveys.includes(surveyId);

    if (isSelected) {
      // Remove survey from selectedSurveys if it's already selected
      setSelectedSurveys(selectedSurveys.filter(id => id !== surveyId));
    } else {
      // Add survey to selectedSurveys if it's not selected
      setSelectedSurveys([...selectedSurveys, surveyId]);
    }
  };

  // Function to handle delete action
  const handleDelete = () => {
    // Implement logic to delete selected surveys
    console.log('Delete surveys:', selectedSurveys);
  };

  // Function to handle update action
  const handleUpdate = () => {
    // Implement logic to update selected surveys
    console.log('Update surveys:', selectedSurveys);
  };

  return (
    <div>
      <h2>Manage Surveys</h2>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Title</th>
            <th>Questions</th>
          </tr>
        </thead>
        <tbody>
          {surveyData.map(survey => (
            <tr key={survey.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(survey.id)}
                  checked={selectedSurveys.includes(survey.id)}
                />
              </td>
              <td>{survey.id}</td>
              <td>{survey.title}</td>
              <td>{survey.questions}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={handleDelete} disabled={selectedSurveys.length === 0}>
          Delete Selected
        </button>
        <button onClick={handleUpdate} disabled={selectedSurveys.length !== 1}>
          Update Selected
        </button>
      </div>
    </div>
  );
};

export default ManageSurvey;
