import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import tabs
import Done from './Components/Tabs/Done';
import Todo from './Components/Tabs/Todo';
// import components
import TodoApp from './Components/TodoApp';
import TodoList from './Components/TodoList';
function App() {
  return (
    <Router>
      <TodoApp />
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/done' element={<Done />} />
      </Routes>
    </Router>
  );
}

export default App;
