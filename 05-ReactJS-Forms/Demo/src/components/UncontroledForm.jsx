export default function UncontrolledForm() {
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);//взимаме през DOM дървото данните от формата и ги запазваме
        
        console.log(formData.get(`username`)); //достъпваме ги по name , чрез get()
        console.log(formData.get(`password`));

    }
    
    
    return (
        <>
            <h1>Uncontrolled Form</h1>

            <form onSubmit={submitHandler} action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" />
                </div>
                <div>
                    <button>Register</button>
                    <button type="button">Reset</button>
                </div>
                
            </form>
        </>
    )
}