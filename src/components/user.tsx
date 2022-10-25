export function User({
    name,
    onDelete,
}: {
    name: string;
    onDelete: (name: string) => void;
}) {
    const handleClick = () => {
        console.log("Click", name);
        onDelete(name);
    };

    return (
        <div>
            <hr />
            <p>
                {name} <span onClick={handleClick}>🗑️</span>
            </p>
            <hr />
        </div>
    );
}
