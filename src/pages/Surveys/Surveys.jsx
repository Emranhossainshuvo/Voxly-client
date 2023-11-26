
import React from 'react';

const SurveysPage = () => {
  const surveys = [
    {
      id: 1,
      title: 'Sample Survey 1',
      description: 'This is a sample survey. Please participate!',
      totalVoted: 100,
    },
    {
      id: 2,
      title: 'Sample Survey 2',
      description: 'Another sample survey for you to check out.',
      totalVoted: 75,
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">All Surveys</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {surveys.map((survey) => (
          <div key={survey.id} className="border p-4 mb-4 rounded-md">
            <h2 className="text-xl font-bold mb-2">{survey.title}</h2>
            <p className="text-gray-600">{survey.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveysPage;
