import logo from "./logo.svg";
import "./App.css";
import { lessons } from "./response/response";
import Lesson from "./components/lesson";

function App() {
  return (
    <div className="App">
      {lessons.map((item, index) => {
        return <Lesson key={index} item={item} />;
      })}
    </div>
  );
}

export default App;
