import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import SectionAboutUs from "@/components/SectionAboutUs";
import SectionContactUs from "@/components/SectionContactUs";
import SectionServices from "@/components/SectionServices";
import Area from "@/components/utils/Area";
  
export default function Home() {
  return (
    <div>
      <div className="bg-light-green lg:pb-20">

        <Area>
          <Header />
        </Area>

        <Area>
          <Main />

        </Area>

      </div>

      <SectionServices />
      <SectionAboutUs />
      <SectionContactUs />
      <Footer />
    </div>
  )
}
