import React, {useState} from "react";
import classes from "./search.module.css";

const Search = (props) => {
    let idRef = React.createRef();
    let [isFetching, setIsFetching] = useState(false);
    let words = []
    let letters = [];
    let IDs = '';
    let filterText = [];
    for (let i = 0; i < props.text.length; i++) {
        for (let j = 0; j < props.id.length; j++) {
            if (props.text[i].id === props.id[j]) {
                filterText.push(props.text[i].text)
            }
        }
    }
    function numFromStr() {
        let id = ([...IDs]
            .map(i => {
                if (isFinite(i) === true || i === ".") {
                    return i
                } else {
                    return " "
                }
            })
            .join("")
            .split(" ")
            .filter(i => i !== "")
            .map(i => Number(i)))
        props.setId(id);
        setIsFetching(true)
    }

    return <div>
        <div>
            Идентифакторы строк:
            <input type="text" ref={idRef} onChange={() => {
                IDs = idRef.current.value
            }}/>
            <button onClick={numFromStr}>Подсчитать</button>
        </div>
        <div>
            {isFetching
                ?
                <div className={classes.container}>
                    <div>
                        Текст
                    </div>
                    <div>
                        Количество слов
                    </div>
                    <div>
                        Количество гласных
                    </div>
                    <div className={classes.data}>
                        <div>
                            {filterText.map(item => {
                                words = (item.split(' ').length);
                                const matchedEn = item.match(/[aeiou]/gi);
                                const matchedRu = item.match(/[уеыаоэяию]/gi);
                                if (matchedRu && matchedEn) {
                                    letters = (matchedRu.length + matchedEn.length)
                                } else if (matchedRu) {
                                    letters = (matchedRu.length)
                                } else if (matchedEn) {
                                    letters = (matchedEn.length)
                                } else {
                                    letters = (0)
                                }

                                return <div className={classes.info}>
                                    <div>
                                        {item}
                                    </div>
                                    <div>
                                        {words}
                                    </div>
                                    <div>
                                        {letters}
                                    </div></div>
                            })}
                        </div>

                    </div>
                </div>
                : <></>}
        </div>

    </div>
}
export default Search