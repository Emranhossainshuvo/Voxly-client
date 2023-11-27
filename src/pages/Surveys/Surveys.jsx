
import{ useEffect, useState } from 'react';


const SurveysPage = () => {
  // const axiosPublic = useAxiosPublic(); 

  const [surveys, setSurveys] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:5000/surveys')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setSurveys(data)
    })
  }, [])

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
