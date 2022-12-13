import { useState } from "react";

import Form from './Form';
import List from './List';
import Footer from './Footer';

function Components() {
    const [toDos, setToDos] = useState([
        {
            id: 1,
            toDo: "Taste JavaScript",
            checked: false
        },
        {
            id: 2,
            toDo: "Code furiously",
            checked: false
        },
        {
            id: 3,
            toDo: "Promote Mavo",
            checked: false
        },
        {
            id: 4,
            toDo: "Give talks",
            checked: false
        },
        {
            id: 5,
            toDo: "Write tutorials",
            checked: false
        },
        {
            id: 6,
            toDo: "Have a life!",
            checked: false
        }] || JSON.parse(localStorage.getItem("toDos")) );

    const [hide, setHide] = useState("All");

    return (
        <div className="toDoApp">
            <Form toDos={toDos} setToDos={setToDos} />
            <List toDos={toDos} setToDos={setToDos} hide={hide} />
            <Footer toDos={toDos} setToDos={setToDos} setHide={setHide} />
        </div>
    )
}

export default Components;