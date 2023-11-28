// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

// import { useEffect, useState } from "react";

const SurveysDetailsPage = () => {

    // const [survers, setSurveys] = useState(); 
    const {title, desctiption, photo, _id} = useLoaderData(); 

    // useEffect( () => {
    //     fetch('http://localhost:5000/surveys')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data); 
    //         setSurveys(data)
    //     })
    // }, [])


    return (
        <div>
            <h2>hi: {title}</h2>
            {/* {
                survers.map(surver => )
            } */}
        </div>
    );
};

export default SurveysDetailsPage;