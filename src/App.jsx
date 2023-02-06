import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.module.scss";
import "./Reset.module.scss";

const app = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default app;
