import JobBoard from './JobBoard';
import JobCounter from './JobCounter';
import { DynamicForm } from './DynamicForm';
import BotListManager from './BotListManager';

function App() {
  return (
    <div className="App">
      <JobBoard/>
      <JobCounter/>
      <br/>
      <DynamicForm/>
      <br/>
      <BotListManager/>
    </div>
  );
}

export default App;
