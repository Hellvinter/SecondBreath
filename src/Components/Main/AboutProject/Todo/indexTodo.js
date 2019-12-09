import React, {useState, useEffect} from 'react';

import TodoMarkup from './todoMarkup';

import { shortFrontTodo } from '../info';

function Todo (props) {

    //let data = shortFrontTodo;

    return (
        <TodoMarkup {...props} />
    );
}
export default Todo;