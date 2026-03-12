import Image from "next/image";

export default function PortfolioCard({ data }) {
    if (!data) return null;

    return (
        <div className="p-5 rounded-lg bg-white dark:bg-black border border-black/10 dark:border-white/10 min-w-0">
            <Image
                className="w-full object-cover rounded-md"
                src={data.image}
                alt={data.title}
                width={1000}
                height={1000}
            />

            <div className="mt-4">
                <h1 className="text-lg font-semibold text-slate-950 dark:text-white wrap-break-word">
                    {data.title}
                </h1>

                <p className="text-sm text-neutral-500 mt-1 wrap-break-word">
                    {data.description}
                </p>

                <div className="flex items-center gap-1.5 mt-5 flex-wrap">
                    {data.tools?.map((tool) => (
                        <span
                            key={tool.name}
                            className="text-xs font-medium px-2 py-1 rounded-md border"
                            style={{
                                color: tool.color,
                                borderColor: tool.color,
                                backgroundColor: `${tool.color}20`,
                            }}
                        >
                            {tool.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}