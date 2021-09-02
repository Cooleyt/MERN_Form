import React from 'react';

const Form =(props) =>{
    const{inputs, setInputs} = props;

    const onChange = change =>{
        setInputs({
            ...inputs,
            [change.target.name]: change.target.value
        });

    };
    return(
        <form>
            <div className = "groupForm">
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName" />
            </div>
            <div className = "groupForm">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" />
            </div>
            <div className = "groupForm">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email" />
            </div>
            <div className = "groupForm">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name="password" />
            </div>
            <div className = "groupForm">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange} type="password" name="confirmPassword" />
            </div>
        </form>
    );
};

export default Form;
