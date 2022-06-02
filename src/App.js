import { useState } from 'react';
import { Header } from './components/Header.js';
import { Input } from './components/Input.js';
import { List } from './components/List.js';

export const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  return (
    <>
      <Header />
      <h2> 请输入您的待办事项：</h2>
      <Input todoItems={todoItems} setTodoItems={setTodoItems} />
      <List todoItems={todoItems} setTodoItems={setTodoItems}/>
    </>
    );
}
