import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = props => {
    
    const [pets, setPets] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect (() => {
        axios.get("http://localhost:8000/api/pets")
        .then(res => setPets(res.data.pets))
    },[])

    
    return (
        <div>
            <h3>These pets are looking for a good home</h3>
            <table className="table table-info">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>About Pet</th>
                    <th>Actions</th>
                </tr>
                {
                    pets ?
                    pets.map((p, i) => {
                        return <tr>
                            <td>{p.name}</td>
                            <td>{p.type}</td>
                            <td><a href={`http://localhost:3000/pets/${p._id}`}>details</a></td>
                            <td><a href={`http://localhost:3000/pets/update/${p._id}`}>edit</a></td>
                        </tr>
                    }):""
                }
            </table>
        </div>
    )
}

export default Main;