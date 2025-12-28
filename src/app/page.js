
import AuroraBackground from "@/components/aurora-background";
import { BoxReveal } from "@/components/box-reveal";
import { CardHoverEffect } from "@/components/card-hover-effect";
import { FloatingDock } from "@/components/floating-dock";
import Header from "@/components/header";
import { LinkPreview } from "@/components/link-preview";
import ScrollVelocity from "@/components/scroll-velocity";
import ShinyBadge from "@/components/shiny-badge";
import SlideContent from "@/components/slide-content";
import { IconBrandTabler, IconBrowserPlus, IconHome, IconUser } from "@tabler/icons-react";
import { SiGit, SiLaravel, SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Home() {
  const links = [
    {
        title: "Beranda",
        icon: (<IconHome className="h-full w-full text-slate-950 dark:text-neutral-300" />),
        href: "#",
    },
    {
        title: "Tentang Saya",
        icon: (<IconUser className="h-full w-full text-slate-950 dark:text-neutral-300" />),
        href: "#",
    },
    {
        title: "Alat Ngoding",
        icon: (<IconBrandTabler className="h-full w-full text-slate-950 dark:text-neutral-300" />),
        href: "#",
    },
    {
        title: "Portolio",
        icon: (<IconBrowserPlus className="h-full w-full text-slate-950 dark:text-neutral-300" />),
        href: "#",
    },
  ];

  const tools = [
    {
      logo: '/logo/Laravel.png',
      icon: <SiLaravel className="size-10 text-zinc-400" />,
      title: "Laravel",
      description: "Elegant full-stack framework",
      link: "https://laravel.com/",
    },
    {
      logo: '/logo/Tailwind.png',
      icon: <SiTailwindcss className="size-10 text-zinc-400" />,
      title: "Tailwind CSS",
      description: "Utility-first styling",
      link: "https://tailwindcss.com/",
    },
    {
      logo: '/logo/Next.png',
      icon: <SiNextdotjs className="size-10 text-zinc-400" />,
      title: "NextJS",
      description: "Production-ready React framework",
      link: "https://nextjs.org/",
    },
    {
      logo: '/logo/Git.png',
      icon: <SiGit className="size-10 text-zinc-400" />,
      title: "Git",
      description: "Distributed version control",
      link: "https://git-scm.com/",
    },
    {
      logo: '/logo/MySQL.png',
      icon: <SiMysql className="size-10 text-zinc-400" />,
      title: "MySQL",
      description: "Reliable relational database",
      link: "https://www.mysql.com/",
    },
    {
      logo: '/logo/PHP.png',
      title: "PHP",
      description: "Robust backend language",
      link: "https://www.php.net/",
    },
    {
      logo: '/logo/Bootstrap.png',
      title: "Bootsrap CSS",
      description: "Responsive UI toolkit",
      link: "https://getbootstrap.com/",
    },
    {
      logo: '/logo/Javascript.png',
      title: "Javascript",
      description: "Essential web scripting",
      link: "https://nodejs.org/en",
    },
    {
      logo: '/logo/Typescript.png',
      title: "Typescript",
      description: "Typed JavaScript enhancement",
      link: "https://www.typescriptlang.org/",
    },
    {
      logo: '/logo/jQuery.png',
      title: "JQuery",
      description: "Simplified DOM utilities",
      link: "https://jquery.com/",
    },
    {
      logo: '/logo/React.png',
      title: "ReactJS",
      description: "Modern UI library",
      link: "https://reactbits.dev/",
    },
    {
      logo: '/logo/Alpine.png',
      title: "AlpineJS",
      description: "Minimal reactive JavaScript",
      link: "https://alpinejs.dev/",
    },
    {
      logo: '/logo/Flutter.png',
      title: "Flutter",
      description: "Cross-platform UI toolkit",
      link: "https://flutter.dev/",
    },
    {
      logo: '/logo/Codeigniter.png',
      title: "Codeigniter",
      description: "Lightweight PHP framework",
      link: "https://www.codeigniter.com/",
    },
    {
      logo: '/logo/CSS3.png',
      title: "CSS",
      description: "Structured visual styling",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      logo: '/logo/Dart.png',
      title: "Dart",
      description: "Scalable client language",
      link: "https://dart.dev/",
    },
    {
      logo: '/logo/Material-UI.png',
      title: "Material UI",
      description: "Modern React component",
      link: "https://mui.com/",
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
      <AuroraBackground>
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
              <h6 className="text-5xl uppercase tracking-wide text-zinc-500 font-six-caps font-bold">
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
              <div className="flex items-center gap-4 z-40 text-zinc-500">
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
      <section className="py-10 bg-zinc-100 dark:bg-zinc-950">
        <ScrollVelocity texts={['Fullstack Web Developer', 'Fullstack Web Developer']} className="font-anton tracking-wide" />
      </section>
      <section className="py-20 bg-zinc-100 dark:bg-zinc-950">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center md:justify-start mb-10">
            <BoxReveal boxColorLight="#09090b" boxColorDark="#f4f4f5" duration={0.5}>
              <h1 className="text-center md:text-start font-anton text-6xl tracking-wide text-slate-950 dark:text-white px-3">Tentang Saya</h1>
            </BoxReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 px-3">
              <div className="col-span-full md:col-span-3">
                <BoxReveal boxColorLight="#09090b" boxColorDark="#f4f4f5" duration={0.3}>
                  <div className="p-5 border border-black/20 dark:border-white/20 rounded-xl bg-white dark:bg-black">
                    <p className="text-lg text-slate-950 dark:text-white">Saya seorang programmer yang berfokus pada pengembangan sistem yang menyederhanakan proses kerja dan memecahkan masalah nyata. Saya terbiasa membangun aplikasi back office yang melibatkan alur data kompleks, automasi perhitungan, dan integrasi antarbagian. Setiap masalah saya tangani dengan memahami kebutuhan pengguna, merancang alur kerja yang efisien, dan memastikan hasilnya minim bug dan mudah digunakan.</p>
                  </div>
                </BoxReveal>
              </div>
              <div className="col-span-full md:col-span-2">
                <BoxReveal boxColorLight="#09090b" boxColorDark="#f4f4f5" duration={0.8}>
                  <div className="p-5 border border-black/20 dark:border-white/20 rounded-xl bg-white dark:bg-black">
                    <h3 className="text-3xl tracking-wide font-anton font-bold text-slate-950 dark:text-white">Pendidikan</h3>
                    <ul className="list-disc list-inside text-lg text-slate-950 dark:text-white">
                      <li className="">S1 Ilmu Komputer - Universitas Bina Sarana Informatika | 2017-2021</li>
                    </ul>
                    <p className="text-lg"></p>
                  </div>
                </BoxReveal>
              </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-zinc-100 dark:bg-zinc-950">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="font-anton text-6xl tracking-wide text-center text-slate-950 dark:text-white px-3">DevTools Yang Saya Gunakan</h1>
          <CardHoverEffect items={tools} />
        </div>
      </section>
    </main>
  );
}
