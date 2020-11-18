import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';



const OnePet = props => {
    const [onePet, setOnePet] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
        .then(res => setOnePet(res.data.pets))
    }, [])
    const [error, setError] = useState({});

    const removePet = _id => {
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
        .then(res => {
            if(res.data.error){
                console.log(res.data.error.errors)
                setError(res.data.error.errors)
            } else {
                console.log("itworkeddd");
                navigate("/") 
            }
        })
        .catch(console.log("something went wrong"));
    }

    return (
        <div>
            <div>
            <h3> meet lil: {onePet.name}</h3>
            <td><button onClick={() => removePet(onePet._id)} className="btn btn-danger">Adopt {onePet.name}</button></td>
            </div>
            <div className="form-group">
                <div>
                <li>
                    <td>Pet type: {onePet.type}</td> &nbsp;
                    <td>Description: {onePet.desc}</td>&nbsp;
                    <td>Skills: {onePet.skill1}</td>&nbsp;
                    <td>Skills: {onePet.skill2}</td>&nbsp;
                    <td>Skills: {onePet.skill3}</td>&nbsp;
                </li>

                </div>
            </div>
        </div>
    )
}
export default OnePet;