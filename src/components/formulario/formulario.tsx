import { useState } from "react";


type Personal = {
    name: string;
    lastName: string;
    birthday: number;
    gender: string;
    email: string;
    info: boolean;
    username: string;
    password: string;
    repeatPassword:string;
    account: string;
};

export function PersonalData() {
    const personal: Personal ={
    name: "",
    lastName: "",
    birthday: 0,
    gender: "",
    email: "",
    info: false,
    username: "",
    password:"",
    repeatPassword:"",
    account: ""
    }

    const [counter,setCounter]= useState(0);
    const handlerCounter= (value:number)=>{
        setCounter(counter+value)
    }
    const[form,setForm]= useState(personal);
    
    const handlerSubmit = (ev: any) => {
        ev.preventDefault();
        console.log("Enviando");
    }
        const handleForm = (ev: any) => {
            const element = ev.target as HTMLFormElement;
            setForm({
                ...form,
                [element.name]:
                    element.type === "checkbox"
                        ? element.checked
                        : element.value,
            });
        }
        const persData=()=>{
            const template = (
                <>
                    <form onSubmit={handlerSubmit}>
                        <legend>FORM</legend>
                        <div>
                            <label>
                                NAME:{" "}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={form.name}
                                    onInput={handleForm}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                LASTNAME:
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={form.lastName}
                                    onInput={handleForm}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                BD
                                <input
                                    type="date"
                                    name="birthday"
                                    placeholder="Birthday"
                                    value={form.birthday}
                                    onInput={handleForm}
                                />
                            </label>
                        </div>
                        <div>
                            <legend>GENDER</legend>
                            <fieldset>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        onChange={handleForm}
                                    />
                                    MALE
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        onChange={handleForm}
                                    />
                                    FEMALE
                                </label>
                            </fieldset>
                        </div>
                        <div>
                            <label>
                                EMAIL{" "}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    value={form.email}
                                    onInput={handleForm}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="info"
                                    checked={form.info}
                                    onChange={handleForm}
                                />
                                NEWSLETTER
                            </label>
                        </div>
                        <div>
                            <button type="submit">ENVIAR</button>
                        </div>
                        <div>
                            <button
                                type="submit"
                                onClick={() => {
                                    handlerCounter(+1);
                                }}
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </>
            );
        
    return template
       }
       const accessData=()=>{
        const template=( 
            <>
                <form onSubmit={handlerSubmit}>
                    <legend>Formulario</legend>
                    <div>
                        <input
                            type="text"
                            name="username"
                            onInput={handleForm}
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            onChange={handleForm}
                            placeholder="password"
                            value={form.password}
                        />
                    </div>
                    <div>
                        <legend>Acount type</legend>
                        <select name="acount" required>
                            <option value="PER">PERSONAL</option>
                            <option value="PRO">PRO</option>
                            <option value="BUS">BUSSINES</option>
                        </select>
                    </div>
                    <div>
                        <button
                            onInput={handleForm}
                            onClick={() => {
                                handlerCounter(-1);
                            }}
                        >
                            Previous
                        </button>
                        <button
                            onInput={handleForm}
                            onClick={() => {
                                handlerCounter(1);
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </>
        );
        return template
    }
    const confirmation=()=>{
        const template = (
            <>
            <div>
                <h2>CONFIRMATION</h2>
                <p>Name:{form.name} </p>
                <p>Last Name:{form.lastName}</p>
                <p>Birthday:{form.birthday}</p>
                <p>Gender:{form.gender}</p>
                <p>Email:{form.email}</p>
                <p>Username:{form.username}</p>
                <p>Account type:{form.account} </p>
                <p>Password:{form.password}</p>
            </div>
            <div>
                <button type="submit" onClick={()=>{
                    handlerCounter(-1)
                }}
                
                >PREVious</button>
            </div>
            </>
        );
        return template
    };
     if (counter === 0) return persData();
     if (counter === 1) return accessData();
     if (counter === 2) return confirmation();
     return <></>;
};
