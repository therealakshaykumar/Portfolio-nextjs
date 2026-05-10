import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Section_Divider from "@/components/Section-Divider";
import Skills from "@/components/Skills";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akshay Kumar",
    "jobTitle": "Full-Stack Developer",
    "url": "https://therealakshay.vercel.app/",
    "sameAs": [
      "https://github.com/therealakshaykumar",
      "https://www.linkedin.com/in/therealakshay"
    ],
    "knowsAbout": [
      "Node.js",
      "React",
      "Next.js",
      "Express.js",
      "TypeScript",
      "Web Development"
    ]
  }

  return (
    <main className="flex flex-col items-center px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Intro />
      <Section_Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
