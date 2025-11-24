import Courses from "@/components/Courses";
import JoinNow from "@/components/JoinNow";
import Features from "@/components/Features ";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
// import Image from "next/image";

export default function Home() {
  return (
    <div >
      {/* <div>Welcome to my course manager next app</div> */}
      <div>
        <Hero></Hero>
        <Features></Features>
        <Courses></Courses>
        <Testimonials></Testimonials>
        <JoinNow></JoinNow>
      </div>
    </div>
  );
}

// className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"

