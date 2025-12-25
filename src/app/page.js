import { FloatingDock } from "@/components/floating-dock";
import Header from "@/components/header";
import { IconBrandTabler, IconBrowserPlus, IconHome, IconUser } from "@tabler/icons-react";

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

  return (
    <main className="relative">
      <header>
        <Header/>
        <nav className="z-30 fixed max-h-1/3 my-auto flex items-center md:inset-y-0 bottom-[3vh] md:right-[1vw]">
          <FloatingDock mobileClassName="translate-x-5" items={links} />
        </nav>
      </header>
    </main>
  );
}
