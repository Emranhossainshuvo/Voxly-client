import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SurveysPage = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    fetch('https://voxly-server.vercel.app/surveys')
      .then((res) => res.json())
      .then((data) => {
        setSurveys(data);
      })
      .catch((error) => {
        console.error('Error fetching surveys:', error);
      });
  }, []);

  const renderDescription = (description) => {
    if (description.length <= 70) {
      return description;
    } else {
      const truncatedDescription = description.substring(0, 70);
      return `${truncatedDescription}...`;
    }
  };

  return (
    <div className="container mx-auto p-8">

      <Helmet>
        <title>Voxly | surveys</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">All Surveys</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {surveys.map((survey) => (
          <div
            key={survey._id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg" src={survey.photo} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {survey.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {renderDescription(survey.description)}
              </p>
                
              <Link to={`/surveysdetails/${survey._id}`}>
              <button>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Details
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveysPage;
