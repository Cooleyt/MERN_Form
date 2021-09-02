import React from 'react';

const Form =(props) =>{
    const{inputs, setInputs} = props;

    const onChange = (change) =>{
        setInputs({
            ...inputs,
            [change.target.name]: change.target.value
        });

    };
    return(
        <div className="form">
            <h1>Fill out the Form</h1>
            <form>
                <div className ="group-form">
                    <label>First Name</label>
                    <input onChange={onChange} type="text" name="firstName" />
                </div>
                <div className ="group-form">
                    <label>Last Name</label>
                    <input onChange={onChange} type="text" name="lastName" />
                </div>
                <div className ="group-form">
                    <label>Email</label>
                    <input onChange={onChange} type="text" name="email" />
                </div>
                <div className ="group-form">
                    <label>Password</label>
                    <input onChange={onChange} type="password" name="password" />
                </div>
                <div className ="group-form">
                    <label>Confirm Password</label>
                    <input onChange={onChange} type="password" name="confirmPassword" />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Form;
