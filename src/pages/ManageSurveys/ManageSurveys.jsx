import{ useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const ManageSurvey = () => {
  const [surveyData, setSurveyData] = useState([]);
  const axiosPublic = useAxiosPublic();

  const fetchSurveys = () => {
    axiosPublic.get('/surveys')
      .then((res) => {
        setSurveyData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching surveys:', error);
      });
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  const handleDeleteSurvey = (survey) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/surveys/${survey._id}`)
          .then(() => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success'
            });
            fetchSurveys();
          })
          .catch((error) => {
            console.error('Error deleting survey:', error);
          });
      }
    });
  };

  const handleUpdateSurvey = () => {
    console.log('update button clicked');
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
        <Helmet>
          <title>Voxly | Manage surveys</title>
        </Helmet>
        <tbody>
          {surveyData.map((survey, index) => (
            <tr key={survey.id}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{survey.title}</td>
              <td className="border p-2">
                <span onClick={() => handleDeleteSurvey(survey)} className='btn btn-sm btn-neutral'>Delete</span>
                <span onClick={handleUpdateSurvey} className='btn btn-sm btn-neutral'>Update</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4"></div>
    </div>
  );
};

export default ManageSurvey;
