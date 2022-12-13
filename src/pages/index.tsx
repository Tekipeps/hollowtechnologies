import About from "../views/About";
import Hero from "../components/Hero";
import Services from "../views/Services";
import Layout from "../components/layout";
import OurProcess from "../views/OurProcess";
import Contact from "../views/Contact";

export default function Home() {
  return (
    <Layout title="Hollow Technologies">
      <Hero />
      <About />
      <OurProcess />
      <Services />
      <Contact />
    </Layout>
  );
}
