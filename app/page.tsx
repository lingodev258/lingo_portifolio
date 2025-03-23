import AboutUs from "@/components/aboutUs";
import Hero from "@/components/hero";
import Tolls from "@/components/tools";

export default function Home() {
  
  return (
   <main className="flex justify-center">
    <div>
      <Hero/>
      <AboutUs/>
      <Tolls/>
    </div>
   </main>
  );
}
