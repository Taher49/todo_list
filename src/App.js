import Forminput from "./components/forminput";
import List from "./components/list";
import Footer from "./components/footer";
import { DataProvider } from "./components/dataProvider";


function App() {
  return (
    <DataProvider >

      <div className="App">
      <h1>To Do List</h1>
      <Forminput />
      <List />     
      <Footer />
      </div>
      </DataProvider >
  );
}

export default App;
