import initialTasks from '../tasks.json';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import TaskList from './TaskList/TaskList';
import css from './App311/App311.module.css';
import { useState } from 'react';

const App311 = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');

  const addTask = newTask => {
    setTasks(prevTask => {
      return [...prevTask, newTask];
    });
  };

  const deleteTask = taskId => {
    setTasks(prevTask => {
      return prevTask.filter(task => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={css.container}>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
};

export default App311;
