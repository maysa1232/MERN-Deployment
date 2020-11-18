import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from '../components/Form';

const NewPet = props => {
    const [form, setForm] = useState ({
        name: "",
        type: "",
        desc: "",
        skill1: "",
        skill2: "",
        skill3: ""

    })
    const [error, setError] = useState({});
    
    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new', form)
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

    
    return(
        <div>
            <h3>Know a pet needing a home?</h3>
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error = {error}/>
        </div>
    )
}

export default NewPet;