import React, {useState} from 'react';


export default function SignUpForm({addUser}){
    const [newUser, setNewUser] = useState({
        name:'',
        error:''
    })

    function handleChange(event){
        const newFormData = {...newUser, [event.target.name]: event.target.value};
        setNewUser(newFormData)
    };

    function handleSubmit(event){
        event.preventDefault();
        addUser(newUser)
        console.log(newUser)
    };

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={newUser.name} onChange={handleChange} required/>
                    <button type="submit" disabled={false}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{newUser.error}</p>
        </div>
    );
    
}