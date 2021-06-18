import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate.js';

class App extends Component{
  render() {
    return(
      <TodoListTemplate>
        템플릿 완성
      </TodoListTemplate>
    );
  }
}
/*
function App() {
  return (
    <TodoListTemplate>
      템플릿 완성
    </TodoListTemplate>
  );
}
*/
export default App;
