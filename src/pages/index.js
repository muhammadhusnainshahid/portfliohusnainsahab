import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import SkillsTabs from "@/components/SkillsTabs";
import ProjectsFilter from "@/components/ProjectsFilter";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <section id="hero" className="min-h-screen w-6xl mx-auto flex justify-center items-center">
        <Hero />
      </section>

      <section id="about" className="py-10">
        <About />
      </section>

      <section id="education" className="py-10">
        <Education />
      </section>

      <section id="skills" className="py-10">
        <SkillsTabs />
      </section>

      <section id="projects" className="py-10">
        <ProjectsFilter />
      </section>

      <section id="contact" className="py-10">
        <Contact />
      </section>
    </main>
  );
}
