import { useState } from "react";
import { User } from "./user";

export function Foo({ names }: { names: Array<string> }) {
    const [namesState, setNamesState] = useState(names);

    const is = Math.random() > 0.5 ? true : false;
    console.log(is);

    const onDelete = (name: string) => {
        const newState = namesState.filter((item) => item !== name);
        setNamesState(newState);
    };

    return (
        <>
            {is && <p>Hola soy Foo</p>}
            {namesState.map((item) => (
                <User key={item} name={item} onDelete={onDelete}></User>
            ))}
        </>
    );
}
