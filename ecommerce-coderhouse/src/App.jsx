import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { Checkout } from "./components/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:id"
                        element={<ItemListContainer />}
                    />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </div>
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
