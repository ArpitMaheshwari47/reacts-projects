import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utilis/Store";

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
