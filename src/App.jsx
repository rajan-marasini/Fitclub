import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Program from "./components/Programs/Program";
import Reason from "./components/Reasons/Reason";
import Testimonials from "./components/Testominials/Testimonials";
function App() {
    return (
        <div className="App">
            <Hero />
            <Program />
            <Reason />
            <Plans />
            <Testimonials />
            <Join />
            <Footer />
        </div>
    );
}

export default App;
