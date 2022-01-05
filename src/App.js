import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import { ConfigureStore } from "./components/redux/configureStore";

const store = ConfigureStore();
function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
