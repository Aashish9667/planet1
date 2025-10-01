import Page1 from "./newpage/page1";
import Shop from "./newpage/shop";
import Nav from "./newpage/nav";
import News from "./newpage/news";
import Ourservices from "./newpage/ourservices";
import Accessories from "./newpage/accessories";
import Footer  from "./newpage/footer";
import Paymentfotter  from "./newpage/paymentfotter";
export default function Home() {
  return (
    <div>
      <Nav />
      <section id="home" className="scroll-mt-20">
  <Page1 />
</section>

<section id="shop" className="scroll-mt-20">
  <Shop />
</section>

<section id="products" className="scroll-mt-20">
  <News />
</section>

<section id="accessories" className="scroll-mt-20">
  <Accessories />
</section>
<Ourservices/>
<section id="footer" className="scroll-mt-20">
<Footer/>
</section>
<Paymentfotter/>
    </div>
  );
}
