import About from "../views/About";
import Hero from "../components/Hero";
import Contact from "../views/Contact";
import Services from "../views/Services";
import Footer from "../components/Footer";
import Layout from "../components/layout";
import OurProcess from "../views/OurProcess";

export default function Home() {
  return (
    <Layout title="Hollow Technologies">
      <Hero />
      <About />
      <OurProcess />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  );
}
