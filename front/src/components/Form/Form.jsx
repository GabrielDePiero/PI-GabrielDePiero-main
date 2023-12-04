import { useState } from "react";
import validation from "../Validation/Validation";


const Form = () => {
    const [errors,setErrors] = useState({})
const [userData,setUserData] = useState({
    email:"",
    password: ""
});

const handleChange = (event) => {
setUserData({
...userData,
[event.target.name]: event.target.value
})
setErrors(validation({
    ...userData,
    [event.target.name]: event.target.value
}))
}

    return(
        <form>
<label htmlFor="email" style={{color:"white"}}>Email</label>
<input type="text" name="email" value={userData.email}
onChange={handleChange}/>
<label htmlFor="password" style={{color:"white"}}>Password</label>
<input type="text" name="password" value={userData.password}
onChange={handleChange}/>
<button>Submit</button>
        </form>
    )
}

export default Form;
