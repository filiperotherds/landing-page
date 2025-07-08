import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Units from "@/components/units";
import Feature from "@/components/feature";
import Treatments from "@/components/treatments";
import FixedButton from "@/components/fixed-button";
import UnderConstruction from "@/components/under-construction";

export default function Home() {
  return (
    <>
      {/* Desktop Screen */}
      <div className="hidden sm:flex w-screen h-screen items-center justify-center font-outfit bg-[#f5faff] text-blue-950">
        <UnderConstruction/>
      </div>

      {/* Mobile Screen */}
      <div className="flex sm:hidden font-outfit w-screen h-full scroll-smooth bg-[#f5faff] text-blue-950">
        {/* Fixed Whatsapp Button */}
        <FixedButton />

        {/* Header Section */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Partners Section */}
        <Partners />

        {/* Units Section */}
        <Units />

        {/* Feature Section */}
        <Feature />

        {/* Tratamentos Section */}
        <Treatments />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
