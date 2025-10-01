import Counter from "./Counter";
import UserList from "./UserList";
import FocusInput from "./FocusInput";
import TimerDisplay from "./TimerDisplay";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Demo React Hooks</h1>
      
      <h3>1. useState</h3>
      <Counter />
      <hr />

      <h3>2. useEffect</h3>
      <UserList />
      <hr />

      <h3>3. useRef</h3>
      <FocusInput />
      <hr />

      <h3>4. Custom Hook</h3>
      <TimerDisplay />
    </div>
  );
}

export default App;
