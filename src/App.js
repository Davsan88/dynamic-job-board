import JobBoard from './JobBoard';
import JobCounter from './JobCounter';
import { DynamicForm } from './DynamicForm';

function App() {
  return (
    <div className="App">
      <JobBoard/>
      <JobCounter/>
      <br/>
      <DynamicForm/>
    </div>
  );
}

export default App;
