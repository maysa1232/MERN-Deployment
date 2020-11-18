import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from '@reach/router'; 


const UpdatePet = props => {
    const [form, setForm] = useState ({
        name: "",
        type: "",
        desc: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })
    const [error, setError] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
        .then(res => setForm(res.data.pets))
    }, [])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, form)
        .then(res => {
            if(res.data.error){
                setError(res.data.error.errors)
            } else {
                navigate("/")
            }
        })
    }

    return (
        <div>
            <h4>Edit {props.name} </h4>
            <Form form={form} onSubmitHandler={onSubmitHandler}onChangeHandler={onChangeHandler} error={error}/>
        </div>
    )
}

export default UpdatePet;