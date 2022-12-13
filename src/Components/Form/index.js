import { useState, useEffect } from "react"; 

function Form({ toDos, setToDos }) {
    const [form, setForm] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (form === "" || form == null) {
            return false;
        }

        setToDos([
            ...toDos, 
            {
                id: toDos[toDos.length - 1].id + 1,
                toDo: form,
                checked: false,
            },
        ]);
    };

    useEffect(() => {
        setForm("");
        localStorage.setItem("toDos", JSON.stringify(toDos));
    }, [toDos]);

    return (
        <header className="header">
            <h1>ToDos</h1>
            <form onSubmit={onSubmit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    value={form}
                    onChange={(e) => setForm(e.target.value)}
                />
            </form>
        </header>
    )
}

export default Form;