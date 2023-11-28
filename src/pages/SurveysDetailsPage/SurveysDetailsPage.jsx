// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

// import { useEffect, useState } from "react";

const SurveysDetailsPage = () => {

    // const [survers, setSurveys] = useState(); 
    const {title, description, photo} = useLoaderData(); 

    // useEffect( () => {
    //     fetch('http://localhost:5000/surveys')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data); 
    //         setSurveys(data)
    //     })
    // }, [])


    return (
        <>
            <div className="max-w-7xl my-10 mx-auto p-6">
      <div className="mx-6">
        <img src={photo} alt="Survey Banner" className="w-full bg-cover h-[60vh] object-cover rounded-lg" />
      </div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
        </>
    );
};

export default SurveysDetailsPage;