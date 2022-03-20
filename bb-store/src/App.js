import { Header, Footer, Home, Shop, Wishlist, Cart, SignUp, Login, UserProfile, NotFound } from "./BleedBlueStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
