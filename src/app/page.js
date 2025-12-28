
import AuroraBackground from "@/components/aurora-background";
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
        <div className="w-full h-full flex flex-col justify-between p-10">
          <div className=""></div>
          <div className="text-center px-5">
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
              <h1 className="tracking-wide uppercase text-[9rem] text-slate-950 dark:text-white font-anton leading-none mb-5">
                Ghifary Anshar Ariestiand
              </h1>
            </SlideContent>
          </div>
          <div className="w-full flex items-center justify-between">
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
    </main>
  );
}
