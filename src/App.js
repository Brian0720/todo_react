import { useState, useEffect } from "react";

import "./assets/theme/index.scss"
import './App.css';
import TopPanel from "./components/TopPanel.component";
import CenterPanel from './components/CenterlPanel.component';
import DetailsPanel from "./components/DetailsPanel.component";

function App() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [todoItems, setTodoItems] = useState([]);
  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  useEffect(() => {
    fetch("./../data/todo.json")
      .then((resp) => resp.json())
      .then((data) => setTodoItems(data))
      .catch((err) => console.log("Something is not right!", err));
  }, []);

  return (
    <div className="App viewport">
      <TopPanel />
      <CenterPanel
        todos={todoItems}
        isDetailsVisible={isDetailsVisible}
        setIsDetailsVisible={toggleDetails}
      />
      <DetailsPanel isDetailsVisible={isDetailsVisible} />
    </div>
  );
}

export default App;
