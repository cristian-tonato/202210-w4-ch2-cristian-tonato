import { useState } from "react";


type Personal= {
    name: string;
    lastName: string;
    birthday: number;
    gender: string;
    email: string;
    info: boolean;
}

export function PersonalData() {
    const personal: Personal ={
    name: "",
    lastName: "",
    birthday: 0,
    gender: "",
    email: "",
    info: false
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
        };
    
    return (
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
                            type="text"
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
                                value={form.gender}
                                onInput={handleForm}
                            />
                            MALE
                            <input
                                type="radio"
                                name="gender"
                                value={form.gender}
                                onInput={handleForm}
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
                            onInput={handleForm}
                        />
                        NEWSLETTER
                    </label>
                </div>
                <div>
                    <button type="submit">ENVIAR</button>
                </div>
            </form>
        </>
    );
}
