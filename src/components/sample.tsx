// import "./sample.css";
import { Counter } from "./counter";
import { CounterComplex } from "./counter.complex";
import style from "./sample.module.css";

interface IProps {
    user: string;
    age: number;
    data: Array<number>;
    children: JSX.Element;
}

// export function Sample(props: IProps) {
//    const title: string = `Hola ${props.user ? props.user + props.age : "mundo"}`;

export function Sample({ user, data, children }: IProps) {
    const title = `Hola ${user ? user : "mundo"}`;

    return (
        <>
            <div>
                <h1>{title.toUpperCase()}</h1>
            </div>
            <p className={style.warning}>Learning React</p>
            {children}
            <Counter data={data}></Counter>
            <Counter data={[]}></Counter>
            <CounterComplex></CounterComplex>
        </>
    );
}
