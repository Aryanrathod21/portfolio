import About from "@/components/about";
import Banner from "@/components/banner";
import Homepage from "@/components/home";
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
 </div> 
  );
}
