import React, {useEffect, useState} from 'react';
import './app.scss';
import ColorBox from './components/ColorBox';
import TodoList from "./components/todolist";
import TodoForm from "./components/todoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFilterForm from "./components/PostFilterForm";
import queryString from 'query-string'
import ClockComponent from "./components/Clock";
function App() {
  const [todoList, setTodoList] = useState([
    {id:1, title: "aaaaaaaaaaaaaaaaaaaaa"},
    {id: 2, title: "bbbbbbbbbbbbbbbbbbbbb"},
    {id: 3, title: "ccccccccccccccccccccc"},
  ]);
  const [postsList, setPostsList] = useState();
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    // titleLike: ''
  });
  const [status, hideStatus] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const params = queryString.stringify(filter);
      const API = `https://js-post-api.herokuapp.com/api/posts?${params}`;
      const res = await fetch(API);
      const data = await res.json();
      setPostsList(data.data);
      setPagination(data.pagination);
    }
    fetchData();
  }, [filter]);
  function handlePageChange(newPage) {
    console.log(newPage);
    setFilter({
      ...filter,
      _page: newPage
    });
  }
  function handleChangeFilters(newFilter){
    console.log(newFilter)
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }
  function handleTodoClick (todo){
    const index = todoList.findIndex(x => x.id===todo.id );
    if(index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleOnSubmitForm(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <p>Demo react hooks</p>
      {
        status && <ClockComponent></ClockComponent>
      }

      <button onClick={() => hideStatus(!status)}>Hide Clock</button>
      <PostFilterForm onSubmit={(newFilter)=> handleChangeFilters(newFilter)}></PostFilterForm>
      <PostList posts={postsList}></PostList>
      <Pagination pagination={pagination} onPageChange={(newPage) => handlePageChange(newPage)}></Pagination>
      {/*<ColorBox />*/}
      {/*<TodoForm onSubmit={handleOnSubmitForm}></TodoForm>*/}
      {/*<TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>*/}
    </div>
  );
}

export default App;
