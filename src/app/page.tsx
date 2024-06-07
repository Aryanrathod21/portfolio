import About from "@/components/about";
import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Homepage from "@/components/home";
import Projectdesc from "@/components/projectdesc";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import Image from "next/image";


export default function Home() {
  return (
<div className="bg-slate-50">
      <Homepage/>
      <About/>
      <Technologies/>
      <Projects/>
      <Projectdesc/>
      <Contact/>
 </div> 
  );
}
