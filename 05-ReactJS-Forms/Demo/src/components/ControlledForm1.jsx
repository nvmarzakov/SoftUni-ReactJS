import { useState } from "react"

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: '',
    swimming: false,
    fitness: false,
    karate: false,
}

export default function ControlledForm1() {
    const [formValues, setFormValues] = useState(formInitialState) //1. Създаваме state с обект names 
       //2. заменяме в html values с formValue.username/password/age , така че целия стейт да стои в един обект

       //3. Абстрактерн ChangeHandler
    const changeHandler = (e) => {
        let value = '';

        console.log(e.target.type)
      
        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value)
                break;
            case 'checkbox':
                console.log(e.target.checked);
                value = e.target.checked;
                break;
            default:
                value = e.target.value;
                break;
        }



        setFormValues(state => ({
            ...state,
            [e.target.name] : e.target.value
        }));
    }

    const resetFormHandler = () => {
        setFormValues(formInitialState)
    }

    const onSubmitHandler = () => {
        console.log(formValues)
        resetFormHandler();
    }

    // const onCheckBox = (e) => {
    //     setFormValues(state => ({
    //         ...state,
    //         [e.target.name]: e.target.checked, 
    //     }));
    // }

    return (
        <>
            <h1>Controlled Form</h1>

            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username"
                        id="username"
                        value={formValues.username} 
                        onChange={changeHandler} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        name="age"
                        id="age" 
                        value={formValues.age}
                        onChange={changeHandler}    
                    />
                </div>
                <div>
                    <button type="button" onClick={onSubmitHandler}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>

                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                        <option value="m">M</option>
                        <option value="f">F</option>
                    </select>
                </div>

                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="swimming">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={changeHandler}/>
                    <label htmlFor="fitness">Fitness</label>
                    <input type="checkbox" name="fitness" id="fitness" checked={formValues.fitness} onChange={changeHandler}/>
                    <label htmlFor="karate">Karate</label>
                    <input type="checkbox" name="karate" id="karate" checked={formValues.karate} onChange={changeHandler}/>
                </div>

            </form>
        </>
    )
}
