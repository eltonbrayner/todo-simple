import React from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = React.useState([]);
  const [typeSubmit, setTypeSubmit] = React.useState({
    type: 'send',
    index: 'send',
  });
  const [task, setTask] = React.useState('');

  function handleSubmit(type, i) {
    if (task.length === 0) return false;
    if (type === 'send' && i === 'send') {
      setTodo([...todo, task]);
      setTask('');
    } else {
      const newArr = [...todo.filter((el) => el !== todo[parseInt(i)]), task];
      setTodo(newArr);
      setTask('');
      setTypeSubmit({ type: 'send', index: 'send' });
    }
  }

  function handleChange({ target }) {
    return setTask(target.value);
  }

  function handleEdit(i) {
    setTask(todo[i]);
    setTypeSubmit({ type: 'edit', index: i.toString() });
  }

  function handleRemove(e) {
    const elm = todo[e];
    const newArr = todo.filter((el) => el !== elm);
    setTodo(newArr);
  }

  return (
    <div className="App">
      <header>
        <input
          type="text"
          placeholder="O que você pretende fazer?"
          value={task}
          onChange={handleChange}
        />
        <button onClick={() => handleSubmit(typeSubmit.type, typeSubmit.index)}>
          Enviar
        </button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Atividade</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {todo &&
            todo.map((el, i) => (
              <tr key={i}>
                <td>{el}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>Editar</button>
                  <button onClick={() => handleRemove(i)}>Apagar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
