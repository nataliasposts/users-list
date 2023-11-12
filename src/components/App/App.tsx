import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.scss";

type AppProps = {
  children: ReactNode;
};

const App: React.FC<AppProps> = ({ children }: AppProps) => {
  return (
    <div className="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;
