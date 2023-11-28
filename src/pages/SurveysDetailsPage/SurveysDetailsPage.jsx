import { useEffect, useState } from "react";

const SurveysDetailsPage = () => {

    const [survers, setSurveys] = useState(); 

    useEffect( () => {
        fetch('http://localhost:5000/surveys')
        .then(res => res.json())
        .then(data => {
            console.log(data); 
            setSurveys(data)
        })
    }, [])


    return (
        <div>
            {
                survers.map(surver => )
            }
        </div>
    );
};

export default SurveysDetailsPage;