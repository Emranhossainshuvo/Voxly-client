import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SurveyForm = () => {

  const axiosPublic = useAxiosPublic(); 

  const handleSubmit =  async(e) => {
    e.preventDefault();
    const form = e.target; 
    const title = form.title.value; 
    const description = form.description.value; 
    const category = form.category.value; 
    const photo = form.photo.value; 
    const survey = {title, description, category, photo}; 
    // console.log(survey); 
      const res = await axiosPublic.post('/surveys', survey)
      // console.log(res.data); 
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Survey added",
          showConfirmButton: false,
          timer: 1500
        });
      }
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md" onSubmit={handleSubmit}>
    <label className="block mb-2">
        Photo:
        <input
          type="text"
          name="photo"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
         
        />
      </label>

      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
         
        />
      </label>

      <label className="block mb-2">
        Description:
        <textarea
        name="description"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-2">
        Category:  
        <select name="category">
          <option value="Political affiliation">Political affiliation</option>
          <option value="Voting behavior">Voting behavior</option>
          <option value="Public policy opinions">Public policy opinions</option>
        </select>
      </label>

      <button
        type="submit"
        className="w-full px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default SurveyForm;
