import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Five from "@/components/sectionFive/Five";
import Four from "@/components/sectionFour/Four";
import Three from "@/components/sectionThree/Three";
import Two from "@/components/sectionTwo/Two";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}

      {/* Hero */}
      <Hero />
      {/* Hero */}

      <Two />
      <Three />
      <Four />
      <Five />
    </main>
  );
}
