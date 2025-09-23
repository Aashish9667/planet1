import Page1 from "./newpage/page1";
import Page22 from "./newpage/page22";
import Navbar from "./newpage/Navbar";
import Page3 from "./newpage/page3";
import Page4 from "./newpage/page4";
import Page44 from "./newpage/Page44";
import Footer  from "./newpage/Footer";
import LastPage  from "./newpage/Lastpage";
export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home" className="scroll-mt-20">
  <Page1 />
</section>

<section id="shop" className="scroll-mt-20">
  <Page22 />
</section>

<section id="products" className="scroll-mt-20">
  <Page3 />
</section>

<section id="accessories" className="scroll-mt-20">
  <Page44 />
</section>
<Page4/>
<section id="footer" className="scroll-mt-20">
<Footer/>
</section>
<LastPage/>
    </div>
  );
}
