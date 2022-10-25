

type Personal= {
    name: string;
    lastName: string;
    birthDate: number;
    Gender: string;
    email: string;
    info: boolean;
}

export function PersonalData() {
    const personal: Personal ={
    name: "",
    lastName: "",
    birthDate: 0,
    Gender: "",
    email: "",
    info: false
    }
    return (
        <>
            <form>
                <legend>FORM</legend>
                <div>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div>
                    <input
                        type="text"
                        name="LastName"
                        placeholder="Last Name"
                    />
                </div>
                <div>
                    <input type="text" name="Birthday" placeholder="Birthday" />
                </div>
                <div>
                    <input type="radio" name="Gender" />MALE
                    <input type="radio" name="Gender" />FEMALE
                </div>
                <div>
                    <input type="email" name="Email" placeholder="email" />
                </div>
                <div>
                    <input type="checkbox" name="Info" />
                    NEWSLETTER
                </div>
            </form>
        </>
    );
}
