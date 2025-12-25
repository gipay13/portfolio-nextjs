export default function ShinyBadge({ text }) {
    return (
        <div
            className="
                inline-flex relative px-5 py-1.5 rounded-full text-slate-950 dark:text-white backdrop-blur-3xl ring-1 ring-black/5 bg-white/50 shadow-lg overflow-hidden dark:ring-white/5 dark:bg-black/5 text-sm
                before:absolute before:inset-0 before:rounded-[inherit]
                before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%,transparent_100%)]
                before:bg-[length:250%_250%,100%_100%]
                before:bg-[position:200%_0,0_0]
                before:bg-no-repeat
                motion-safe:before:animate-shine
            "
        >
            {text}
        </div>
    );
}
