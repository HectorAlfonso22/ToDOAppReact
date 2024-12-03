import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
import React from 'react';

function TodoSearch(){
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext)

    return(
        <input placeholder="Ingrese la Tarea" className="TodoSearch" value={searchValue} onChange={(event)=> {
            setSearchValue(event.target.value);
        }}/>
    );
}

export { TodoSearch };