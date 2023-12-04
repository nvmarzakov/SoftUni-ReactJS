import { useState } from "react"

export default function ControlledForm() {

    const [usernameValue, setUsernameValue] = useState(''); // 3. създаваме state с начална стойност празен стринг
    const [passwordValue, setPasswordValue] = useState('');
    const [ageValue, setAgeValue] = useState('');
    
    //4. Създаваме Handler и прихващаме промяната като event
    const usernameChangeHandler = (e) => {
        // console.log(e.target.value) 
        setUsernameValue(e.target.value) //5. сетваме новата стойност в state-а и usernameValue се ъпдейтва и се подаваме в DOM новата стойност
    }

    const resetFormHandler = () => {
        setUsernameValue(''),
        setPasswordValue('');
        setAgeValue('')
    }

    const passwordChangeHandler = (e) => {
        // console.log(e.target.value)
        setPasswordValue(e.target.value);
    }

    const ageChangeHandler = (e) => {
        // console.log(e.target.value)
        setAgeValue(Number(e.target.value))
    }

    const onSubmitHandler = () => {
        console.log(usernameValue)
        console.log(passwordValue)
        console.log(ageValue)
        resetFormHandler();
    }

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
                        value={usernameValue} //1. value прави формата контролирана 
                        onChange={usernameChangeHandler} //2. изисква се handler
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        value={passwordValue}
                        onChange={passwordChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        name="age" 
                        id="age" 
                        value={ageValue}
                        onChange={ageChangeHandler}    
                    />
                </div>
                <div>
                    <button type="button" onClick={onSubmitHandler}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>

            </form>
        </>
    )
}
