export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-zinc-100 dark:bg-zinc-950 px-10">
            <p className="py-4 text-center text-slate-950 dark:text-white border-t border-neutral-200 dark:border-neutral-800">
                Copyright {currentYear} © Gipay All Right Reserved.
            </p>
        </footer>
    );
};