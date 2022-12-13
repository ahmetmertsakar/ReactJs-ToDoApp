import { React } from "react";

// Components içerisinden göndermiş olduğumuz state'in verilerini çağırıyoruz.
function List({ toDos, setToDos, hide }) {

    const checkToDo = (e) => {
        // Uyumlu id'yi bulduktan sonra işaretli olma durumunu(checked) değiştiriyoruz.
        let newToDos = toDos.map((toDo) => {
            if (parseInt(toDo.id) === parseInt(e.target.id)) {
                // id'ler eşleşebilsin diye parseInt kullanarak integera çevirdik.
                return { ...toDo, checked: !toDo.checked };
            }
            return toDo;
        });
        setToDos(newToDos); // işaretli olma durumunu set ediyoruz.
    };

    const deleteToDo = (e) => {
        setToDos(
            toDos.filter((toDo) => parseInt(toDo.id) !== parseInt(e.target.id)) // id karşılaştırması yaparak filtreleme yapıyoruz.
        );
    };

    const isCompleted = (e) => {
        // Event olarak gelen verinin işaretli olma durumuna göre ve footerdan gelen veriye göre listeleme yapıyoruz.
        // hidden classı atandığında dom listede görünmüyor.
        if (e.checked === true && hide === "All") {
            return "completed";
        }
        else if (e.checked === true && hide === "Active") {
            return "completed hidden";
        }
        else if (e.checked === false && hide === "Completed") {
            return "hidden";
        }
    };

    return (
        <div className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {toDos.map((toDo) => (
                    <li key={toDo.id} id={toDo.id} className={isCompleted(toDo)}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                defaultChecked={toDo.checked}
                                id={toDo.id}
                                onClick={checkToDo}
                            />
                            <label>{toDo.toDo}</label>
                            <button
                                className="destroy"
                                id={toDo.id}
                                onClick={deleteToDo}
                            ></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default List;

