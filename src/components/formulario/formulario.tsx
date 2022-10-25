import { SyntheticEvent, useState } from "react";
//import "./formulario.scss";

type User = {
    name: string;
    age: number;
    phone: string;
    isOk: boolean;
};

export function Formulario() {
    const user: User = { name: "", age: 0, phone: "", isOk: false };

    const [form, setForm] = useState(user);

    const handlerSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        console.log("Enviando");
    };

    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setForm({
            ...form,
            [element.name]:
                element.type === "checkbox" ? element.checked : element.value,
        });
    };

    return (
        <form onSubmit={handlerSubmit}>
            <legend>Formulario</legend>
            <div>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onInput={handleForm}
                    placeholder="Dime tu nombre"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="age"
                    value={form.age}
                    onInput={handleForm}
                    placeholder="Dime tu edad"
                />
            </div>
            <div>
                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onInput={handleForm}
                    placeholder="Teléfono"
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="isOk"
                        checked={form.isOk}
                        onChange={handleForm}
                    />{" "}
                    Estoy de acuerdo ...
                </label>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}
