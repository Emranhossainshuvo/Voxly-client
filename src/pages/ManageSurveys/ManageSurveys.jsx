import React, { useEffect, useState } from 'react';

const ManageSurvey = () => {
  const [surveyData, setSurveyData ] = useState([]); 

  const [selectedSurveys, setSelectedSurveys] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/surveys')
      .then((res) => res.json())
      .then((data) => {
        setSurveyData(data);
      })
      .catch((error) => {
        console.error('Error fetching surveys:', error);
      });
  }, []);


  const handleCheckboxChange = (surveyId) => {
    const isSelected = selectedSurveys.includes(surveyId);

    if (isSelected) {
      setSelectedSurveys(selectedSurveys.filter(id => id !== surveyId));
    } else {
      setSelectedSurveys([...selectedSurveys, surveyId]);
    }
  };

  const handleDelete = () => {
    console.log('Delete surveys:', selectedSurveys);
  };

  const handleUpdate = () => {
    console.log('Update surveys:', selectedSurveys);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Manage Surveys</h2>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Questions</th>
          </tr>
        </thead>
        <tbody>
          {surveyData.map((survey, index) => (
            <tr key={survey.id}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{survey.title}</td>
              <td className="border p-2"><span className='btn btn-sm btn-neutral'>Delete</span> <span className='btn btn-sm btn-neutral'>Update</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
       
      </div>
    </div>
  );
};

export default ManageSurvey;
