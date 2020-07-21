import React, {Component} from 'react';
import PropTypes from 'prop-types';


TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
}

function TodoList(props) {
  function handleClick(value){
    if(onTodoClick){
      onTodoClick(value);
    }
  }
    const {todos, onTodoClick} = props;
    return (
      <div>
        <ul className={"todo-list"}>
          {
            todos.map((value, index) => (
              <li key={value.id} onClick={() => handleClick(value)}>{value.title}</li>
            ))
          }
        </ul>
      </div>
    );
}


export default TodoList;