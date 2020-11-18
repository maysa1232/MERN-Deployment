import React from 'react';

const Form = props => {
    return (
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name}/>
                {
                        props.error.name ?
                        <span className="text-danger">{props.error.name.message}</span>
                        :""
                }
                </div>
                <div className="form-group">
                <label>Type:</label>
                <input type="text" name="type" className="form-control" onChange={props.onChangeHandler} value={props.form.type}/>
                {
                        props.error.type ?
                        <span className="text-danger">{props.error.type.message}</span>
                        :""
                }
                </div>
                <div className="form-group">
                <label>Description:</label>
                <input type="text" name="desc" className="form-control" onChange={props.onChangeHandler} value={props.form.desc}/>
                {
                        props.error.desc ?
                        <span className="text-danger">{props.error.desc.message}</span>
                        :""
                }
                </div>
                <div className="form-group">
                <label>Skill: (Optional)</label>
                <input type="text" name="skill1" className="form-control" onChange={props.onChangeHandler} value={props.form.skill1}/>
                </div>
                <div className="form-group">
                <label>Skill: (Optional)</label>
                <input type="text" name="skill2" className="form-control" onChange={props.onChangeHandler} value={props.form.skill2}/>
                </div>
                <div className="form-group">
                <label>Skill: (Optional)</label>
                <input type="text" name="skill3" className="form-control" onChange={props.onChangeHandler} value={props.form.skill3}/>
                </div>
                <input type="submit" value="Submit" className="btn btn-info"></input>
            </form>
        </div>
    )
}

export default Form;