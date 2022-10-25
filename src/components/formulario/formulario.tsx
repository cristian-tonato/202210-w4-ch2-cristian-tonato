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
                        <h2>REGISTER</h2>
                        <div>
                            <label>
                                Name:{" "}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your Name"
                                    value={form.name}
                                    onInput={handleForm}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Last Name:
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter your Last Name"
                                    value={form.lastName}
                                    onInput={handleForm}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                BirthDate
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
                            <legend>GENDER : </legend>
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
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        onChange={handleForm}
                                    />OTHER
                                </label>
                            </fieldset>
                        </div>
                        <div>
                            <label>
                                EMAIL  : {" "}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
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
                                DO YOU WISH RECEIVE NEWSLETTER?
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
        const template = (
            <>
                <form onSubmit={handlerSubmit}>
                    <h2>ACOUNT</h2>
                    <div>
                        USERNAME:
                        <input
                            type="text"
                            name="username"
                            onInput={handleForm}
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        PASSWORD:{" "}
                        <input
                            type="password"
                            name="password"
                            onChange={handleForm}
                            placeholder="password"
                            value={form.password}
                        />
                    </div>
                    <div>
                        CONFIRM PASSWORD:{" "}
                        <input
                            type="password"
                            name="repeatPassword"
                            onChange={handleForm}
                            placeholder="Repeat password"
                            value={form.repeatPassword}
                            required
                        />
                    </div>
                    <div>
    
                        ACOUNT TYPE: 
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
                           Next
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
                
                >Previous</button>
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
