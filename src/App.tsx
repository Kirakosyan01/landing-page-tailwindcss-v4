import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";

function App() {

  return (
    <Layout title="ToolAI">
      <Hero />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  )
}

export default App;