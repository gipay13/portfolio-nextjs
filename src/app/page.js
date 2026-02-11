import AuroraBackground from "@/components/aurora-background";
import { BoxReveal } from "@/components/box-reveal";
import { CardHoverEffect } from "@/components/card-hover-effect";
import { FloatingDock } from "@/components/floating-dock";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { LinkPreview } from "@/components/link-preview";
import ScrollVelocity from "@/components/scroll-velocity";
import ShinyBadge from "@/components/shiny-badge";
import SlideContent from "@/components/slide-content";
import Tabs from "@/components/tabs";
import { project } from "@/data/project";
import { tools } from "@/data/tools";
import { IconBrandTabler, IconBrowserPlus, IconHome, IconUser } from "@tabler/icons-react";

export default function Home() {
  const links = [
    {
        id: 'home',
        title: "Beranda",
        icon: (<IconHome className="h-full w-full text-slate-950 dark:text-neutral-300" />),
    },
    {
      id: 'portfolio',
      title: "Portolio",
      icon: (<IconBrowserPlus className="h-full w-full text-slate-950 dark:text-neutral-300" />),
    },
    {
        id: 'about',
        title: "Tentang Saya",
        icon: (<IconUser className="h-full w-full text-slate-950 dark:text-neutral-300" />),
    },
    {
        id: 'tools',
        title: "Alat Ngoding",
        icon: (<IconBrandTabler className="h-full w-full text-slate-950 dark:text-neutral-300" />),
    },
  ];

  return (
    <main className="relative">
      <header>
        <Header/>
        <nav className="z-30 fixed max-h-1/3 my-auto flex items-center md:inset-y-0 bottom-[3vh] md:right-[1vw]">
          <FloatingDock mobileClassName="translate-x-5" items={links} />
        </nav>
      </header>
      <section id="home">
        <AuroraBackground >
          <div className="w-full h-full flex flex-col justify-between px-0 py-5 md:px-10 md:py-10">
            <div className=""></div>
            <div className="text-center">
              <div className="mb-3">
                <ShinyBadge text="Halo, Perkenalkan Saya" />
              </div>
              <SlideContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.1}
              >
                <h1 className="tracking-wide uppercase text-[5rem] md:text-[9rem] text-slate-950 dark:text-white font-anton leading-none">
                  Ghifary Anshar Ariestiand
                </h1>
              </SlideContent>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3">
              <SlideContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.3}
              >
                <h6 className="text-5xl uppercase tracking-wide text-neutral-500 font-six-caps font-bold">
                  Fullstack Web Developer
                </h6>
              </SlideContent>
              <SlideContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.3}
              >
                <div className="flex items-center gap-4 z-40 text-neutral-500">
                  {tools.slice(0, 5).map((item) => (
                    <LinkPreview
                      key={item.title}
                      url={item.link}
                      className="pt-0 mt-0"
                    >
                      {item.icon}
                    </LinkPreview>
                  ))}
                </div>
              </SlideContent>
            </div>
          </div>
        </AuroraBackground>
      </section>
      {/* <section className="py-10 bg-zinc-100 dark:bg-zinc-950">
        <ScrollVelocity texts={['Fullstack Web Developer', 'Fullstack Web Developer']} className="font-anton tracking-wide" />
      </section> */}
      <section id="about" className="py-20 bg-zinc-100 dark:bg-zinc-950">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center md:justify-start mb-10">
            <BoxReveal boxColorLight="#18181b" boxColorDark="#e5e5e5" duration={0.5}>
              <h1 className="text-center md:text-start font-anton text-6xl tracking-wide text-slate-950 dark:text-white px-3">Tentang Saya</h1>
            </BoxReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 px-3">
              <div className="col-span-full md:col-span-3">
                <BoxReveal boxColorLight="#18181b" boxColorDark="#e5e5e5" duration={0.3}>
                  <div className="p-5 border border-black/20 dark:border-white/20 rounded-xl bg-white dark:bg-black">
                    <p className="text-lg text-slate-950 dark:text-white">Saya seorang programmer yang berfokus pada pengembangan sistem yang menyederhanakan proses kerja dan memecahkan masalah nyata. Saya terbiasa membangun aplikasi back office yang melibatkan alur data kompleks, automasi perhitungan, dan integrasi antarbagian. Setiap masalah saya tangani dengan memahami kebutuhan pengguna, merancang alur kerja yang efisien, dan memastikan hasilnya minim bug dan mudah digunakan.</p>
                  </div>
                </BoxReveal>
              </div>
              <div className="col-span-full md:col-span-2">
                <BoxReveal boxColorLight="#18181b" boxColorDark="#e5e5e5" duration={0.8}>
                  <div className="p-5 border border-black/20 dark:border-white/20 rounded-xl bg-white dark:bg-black">
                    <h3 className="text-3xl tracking-wide font-anton font-bold text-slate-950 dark:text-white">Pendidikan</h3>
                    <ul className="list-disc list-inside text-base text-slate-950 dark:text-white">
                      <li className="">S1 Ilmu Komputer - Universitas Bina Sarana Informatika | 2017-2021</li>
                    </ul>
                    <p className="text-lg"></p>
                  </div>
                </BoxReveal>
              </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="py-10 px-3 bg-zinc-100 dark:bg-zinc-950">
        <div className="w-full mx-auto">
          <h1 className="font-anton text-6xl tracking-wide text-center text-slate-950 dark:text-white px-3">Projek Yang Telah Saya Selsaikan</h1>
          <div className="w-full mt-10 max-w-3xl mx-auto">
            <Tabs items={project} />
          </div>
        </div>
      </section>
      <section id="tools" className="py-10 bg-zinc-100 dark:bg-zinc-950">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="font-anton text-6xl tracking-wide text-center text-slate-950 dark:text-white px-3">DevTools Yang Saya Gunakan</h1>
          <CardHoverEffect items={tools} />
        </div>
      </section>
      <Footer/>
    </main>
  );
}
