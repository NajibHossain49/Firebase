import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const App = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4"> {/* flex-1 makes the content area grow */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
