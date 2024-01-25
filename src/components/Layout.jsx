import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Meta-Final-Project" />
        <title>Meta-Final-Project</title>
        <link
          rel="icon"
          type="image/png"
          href="images/Lemon2.png"
          sizes="24x24"
        />
        <meta name="description" content="Final project for Meta Certificate" />
        <meta name="author" content="Badea Andrei" />
        <meta property="og:image" content="/images/Lemon2.png" />
        <meta property="og:title" content="Meta-Final-Project" />
        <meta property="og:url" content="http://localhost:3000/" />
      </Helmet>
      <header>
        <Navbar />
      </header>
        {children}
      <Footer />
    </>
  );
};

export default Layout;
