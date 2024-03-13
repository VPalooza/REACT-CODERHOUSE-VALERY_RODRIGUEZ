import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="¡Miau miau!"/>
        </>
    );
}

export default App;
