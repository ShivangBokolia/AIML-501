import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    pipeline,
    resources,
    models,
    costBreakdown,
    takeaways,
    references,
} from "../constants/llmTraining";

const ICONS = {
    data: (
        <>
            <ellipse cx="12" cy="6" rx="8" ry="3" />
            <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </>
    ),
    filter: <path d="M3 4h18l-7 8v7l-4 2v-9L3 4z" />,
    chip: (
        <>
            <rect x="6" y="6" width="12" height="12" rx="2" />
            <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
        </>
    ),
    tune: <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6" />,
    people: (
        <>
            <circle cx="9" cy="8" r="3" />
            <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5a3 3 0 010 6M18 14c1.8.7 3 2.5 3 4.5" />
        </>
    ),
    shield: (
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" />
    ),
    cloud: (
        <path d="M7 18a4 4 0 010-8 5.5 5.5 0 0110.5 1.5A3.3 3.3 0 0117 18H7z" />
    ),
    bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
    clock: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </>
    ),
};

const Icon = ({ name, color = "currentColor", size = 28 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        {ICONS[name]}
    </svg>
);

const LOAD_KEYS = [
    { key: "data", label: "Data", color: "#4eb1bc" },
    { key: "compute", label: "Compute", color: "#d5573b" },
    { key: "energy", label: "Energy", color: "#e9b44c" },
    { key: "time", label: "Time", color: "#a78bfa" },
];

const LOAD_WORDS = ["None", "Low", "Medium", "High"];

const LoadMeter = ({ load }) => (
    <div className="flex flex-col gap-1.5 pt-3 mt-auto border-t border-white/20">
        {LOAD_KEYS.map(({ key, label, color }) => (
            <div
                key={key}
                className="flex items-center gap-2 text-xs text-nav"
                title={`${label}: ${LOAD_WORDS[load[key]]}`}
            >
                <span className="w-14">{label}</span>
                <div className="flex gap-1 flex-1">
                    {[1, 2, 3].map((n) => (
                        <span
                            key={n}
                            className="h-2 flex-1 rounded-full"
                            style={{
                                background:
                                    n <= load[key]
                                        ? color
                                        : "rgba(255,255,255,0.15)",
                            }}
                        />
                    ))}
                </div>
                <span className="w-12 text-right">{LOAD_WORDS[load[key]]}</span>
            </div>
        ))}
    </div>
);

// Horizontal bar chart. Compute uses a log scale because the values span
// two orders of magnitude and linear bars would hide the smaller models.
const BarChart = ({ rows, valueOf, format, log, ariaLabel }) => {
    const known = rows.filter((m) => valueOf(m) != null);
    const vals = known.map(valueOf);
    const max = Math.max(...vals);
    const min = Math.min(...vals);
    const width = (v) =>
        log
            ? 12 +
              (88 * (Math.log10(v) - Math.log10(min / 3))) /
                  (Math.log10(max) - Math.log10(min / 3))
            : (v / max) * 100;

    return (
        <div className="flex flex-col gap-3" role="img" aria-label={ariaLabel}>
            {rows.map((m) => {
                const v = valueOf(m);
                return (
                    <div
                        key={m.name}
                        className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[9rem_1fr] items-center gap-3 text-sm"
                    >
                        <span className="text-white font-semibold leading-tight">
                            {m.name}
                        </span>
                        {v == null ? (
                            <span className="text-nav italic text-xs">
                                Not published
                            </span>
                        ) : (
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-6 rounded-md"
                                    style={{
                                        width: `${width(v)}%`,
                                        background: m.color,
                                    }}
                                />
                                <span className="text-white text-xs whitespace-nowrap">
                                    {format(v)}
                                </span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const fmtFlops = (v) => {
    const exp = Math.floor(Math.log10(v));
    return `${(v / 10 ** exp).toFixed(1)}×10^${exp}`;
};

const fmtCost = (v) => `$${v}M`;

const Row = ({ label, value }) => (
    <div className="flex justify-between gap-3 text-sm border-b border-white/10 py-1.5">
        <span className="text-nav">{label}</span>
        <span className="text-white text-right">{value}</span>
    </div>
);

const LLMTrainingScreen = () => {
    const [active, setActive] = useState(2);
    const step = pipeline[active];

    return (
        <div className="relative">
            <Navbar />
            <div className="w-full min-h-screen pt-48 bg-radial-[at_200%_40%] from-[#2d737b] via-background-green via-60% to-background-green">
                {/* Hero */}
                <div className="flex flex-col items-center text-center text-white px-6 pb-12 gap-3">
                    <span className="font-semibold tracking-widest uppercase text-xs">
                        Artifact 3
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Generative AI LLM Infrastructure: Training Process and
                        Costs
                    </h2>
                    <p className="text-nav max-w-2xl">
                        An infographic that follows a generative AI model from
                        raw data to deployment, shows what it consumes along the
                        way, and compares the published numbers for GPT, Llama,
                        Gemini and Claude.
                    </p>
                </div>

                <div className="px-6 lg:px-24 xl:px-48 pb-24 flex flex-col gap-16">
                    {/* 1. PIPELINE */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                1. The training pipeline
                            </h3>
                            <p className="text-nav">
                                Seven stages, from raw data to a live product.
                                Select a stage to see how heavily it uses each
                                resource.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 md:gap-0 items-stretch">
                            {pipeline.map((s, i) => (
                                <React.Fragment key={s.step}>
                                    <button
                                        onClick={() => setActive(i)}
                                        aria-pressed={active === i}
                                        className={`cursor-pointer rounded-2xl p-3 flex md:flex-col items-center md:text-center gap-3 border transition-all ${
                                            active === i
                                                ? "bg-white/20 border-highlight scale-105"
                                                : "bg-white/10 border-white/30 hover:bg-white/15"
                                        }`}
                                    >
                                        <span
                                            className="shrink-0 rounded-full p-2 text-highlight"
                                            style={{
                                                background:
                                                    "rgba(255,255,255,0.1)",
                                            }}
                                        >
                                            <Icon name={s.icon} />
                                        </span>
                                        <span className="flex flex-col md:items-center">
                                            <span className="text-xs font-bold text-highlight">
                                                {i + 1}
                                            </span>
                                            <span className="text-white text-sm font-semibold leading-tight">
                                                {s.step}
                                            </span>
                                        </span>
                                    </button>
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="rounded-2xl p-5 bg-white/10 border border-white/30 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-bold text-highlight">
                                    STAGE {active + 1} OF {pipeline.length}
                                </span>
                                <h4 className="text-xl font-bold text-white">
                                    {step.step}
                                </h4>
                                <p className="text-white text-sm">
                                    {step.text}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-nav mb-2">
                                    RESOURCE LOAD AT THIS STAGE
                                </p>
                                <LoadMeter load={step.load} />
                            </div>
                        </div>
                    </section>

                    {/* 2. RESOURCES */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                2. What training consumes
                            </h3>
                            <p className="text-nav">
                                Four resources decide how capable a model can
                                get and what it costs to build.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {resources.map((r) => (
                                <div
                                    key={r.name}
                                    className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-3"
                                    style={{
                                        borderTop: `4px solid ${r.color}`,
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            name={r.icon}
                                            color={r.color}
                                            size={32}
                                        />
                                        <h4
                                            className="text-xl font-bold"
                                            style={{ color: r.color }}
                                        >
                                            {r.name}
                                        </h4>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-white">
                                            {r.stat}
                                        </p>
                                        <p className="text-nav text-sm">
                                            {r.unit}
                                        </p>
                                    </div>
                                    <p className="text-white text-sm">
                                        {r.text}
                                    </p>
                                    <p className="text-nav text-sm pt-2 border-t border-white/20">
                                        <span className="font-bold">
                                            Why it matters:{" "}
                                        </span>
                                        {r.why}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. CHARTS */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                3. Compute and cost, side by side
                            </h3>
                            <p className="text-nav">
                                More compute generally means a more capable
                                model and a bigger bill. Both charts are
                                estimates for the final training run only.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-4">
                                <div>
                                    <h4 className="font-bold text-white">
                                        Training compute (FLOPs)
                                    </h4>
                                    <p className="text-nav text-xs">
                                        Log scale: each step is a large
                                        multiple. Sources: [2], [5].
                                    </p>
                                </div>
                                <BarChart
                                    rows={models}
                                    valueOf={(m) => m.flops}
                                    format={fmtFlops}
                                    log
                                    ariaLabel="Bar chart of estimated training compute in FLOPs for each model"
                                />
                            </div>
                            <div className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-4">
                                <div>
                                    <h4 className="font-bold text-white">
                                        Estimated training cost (USD)
                                    </h4>
                                    <p className="text-nav text-xs">
                                        Compute cost only, linear scale. Source:
                                        Stanford AI Index [1]. Not published for
                                        Llama 3.1 or Claude.
                                    </p>
                                </div>
                                <BarChart
                                    rows={models}
                                    valueOf={(m) => m.cost}
                                    format={fmtCost}
                                    ariaLabel="Bar chart of estimated training cost in millions of US dollars for each model"
                                />
                            </div>
                        </div>

                        <div className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-4">
                            <div>
                                <h4 className="font-bold text-white">
                                    Where the money goes (frontier models,
                                    approximate)
                                </h4>
                                <p className="text-nav text-xs">
                                    Midpoints of Epoch AI's ranges [3], so they
                                    are approximate.
                                </p>
                            </div>
                            <div
                                className="flex h-10 rounded-xl overflow-hidden"
                                role="img"
                                aria-label={costBreakdown
                                    .map((c) => `${c.label} ${c.pct}%`)
                                    .join(", ")}
                            >
                                {costBreakdown.map((c) => (
                                    <div
                                        key={c.label}
                                        className="flex items-center justify-center text-xs font-bold text-black"
                                        style={{
                                            width: `${c.pct}%`,
                                            background: c.color,
                                        }}
                                    >
                                        {c.pct}%
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {costBreakdown.map((c) => (
                                    <p
                                        key={c.label}
                                        className="text-nav text-sm"
                                    >
                                        <span
                                            className="inline-block w-3 h-3 rounded-sm mr-2"
                                            style={{ background: c.color }}
                                        />
                                        <span className="font-bold text-white">
                                            {c.label}.
                                        </span>{" "}
                                        {c.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4. MODELS */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                4. Model case files
                            </h3>
                            <p className="text-nav">
                                What each lab has shared. "Not published" means
                                the company hasn't disclosed it, so the numbers
                                above are outside estimates.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {models.map((m) => (
                                <div
                                    key={m.name}
                                    className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-2"
                                    style={{
                                        borderTop: `4px solid ${m.color}`,
                                    }}
                                >
                                    <div>
                                        <h4
                                            className="text-xl font-bold"
                                            style={{ color: m.color }}
                                        >
                                            {m.name}
                                        </h4>
                                        <p className="text-nav text-sm">
                                            {m.org}, {m.year}
                                        </p>
                                    </div>
                                    <div>
                                        <Row
                                            label="Parameters"
                                            value={m.params}
                                        />
                                        <Row
                                            label="Training data"
                                            value={m.tokens}
                                        />
                                        <Row
                                            label="Hardware"
                                            value={m.hardware}
                                        />
                                        <Row label="Time" value={m.time} />
                                        <Row label="Energy" value={m.energy} />
                                        <Row
                                            label="Est. cost"
                                            value={
                                                m.cost
                                                    ? `~$${m.cost}M`
                                                    : "Not published"
                                            }
                                        />
                                    </div>
                                    <p className="text-nav text-xs pt-2 mt-auto">
                                        {m.note}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 5. SUMMARY */}
                    <section className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-white">
                            5. Key takeaways
                        </h3>
                        <div className="rounded-2xl p-6 bg-white/10 border border-white/30 flex flex-col gap-6">
                            <ul className="flex flex-col gap-3 list-disc pl-5 text-white">
                                {takeaways.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    {/* REFERENCES */}
                    <section className="flex flex-col gap-4" id="references">
                        <h3 className="text-2xl font-bold text-white">
                            References
                        </h3>
                        <p className="text-nav text-sm">
                            Bracketed numbers in the page, such as [1], point to
                            these sources. "Calculated" means derived from
                            published numbers.
                        </p>
                        <ol className="rounded-2xl p-6 bg-white/10 border border-white/30 flex flex-col gap-3">
                            {references.map((r) => (
                                <li
                                    key={r.id}
                                    className="flex gap-3 text-sm text-white"
                                >
                                    <span className="font-bold text-highlight w-8 shrink-0">
                                        [{r.id}]
                                    </span>
                                    <span>
                                        {r.text}{" "}
                                        <a
                                            href={r.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-highlight underline break-all"
                                        >
                                            {r.url}
                                        </a>
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default LLMTrainingScreen;
