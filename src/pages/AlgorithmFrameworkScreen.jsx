import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { algorithms, types, domains } from "../constants/algorithms";

const Dots = ({ value, color }) => (
    <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
            <span
                key={n}
                className="w-2.5 h-2.5 rounded-full"
                style={{
                    background: n <= value ? color : "rgba(240,235,230,0.15)",
                }}
            />
        ))}
    </div>
);

const DomainTag = ({ name }) => (
    <span
        className="text-xs font-semibold px-2 py-0.5 rounded-full border"
        style={{
            color: domains[name].color,
            borderColor: domains[name].color + "80",
            background: domains[name].color + "1a",
        }}
    >
        {name}
    </span>
);

const TypeBadge = ({ type }) => (
    <span
        className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-dark"
        style={{ background: types[type].color }}
    >
        {type}
    </span>
);

const Chip = ({ algo }) => (
    <a
        href={`#algo-${algo.name.replace(/\W+/g, "-")}`}
        className="text-sm text-white px-3 py-1 rounded-full border border-white/30 bg-white/10 hover:bg-white/25 transition-colors"
        style={{ borderLeft: `4px solid ${types[algo.type].color}` }}
    >
        {algo.name}
    </a>
);

// Group the algorithms of one type by family, keeping first-seen order
const familiesOf = (type) => {
    const map = new Map();
    algorithms
        .filter((a) => a.type === type)
        .forEach((a) => {
            if (!map.has(a.family)) map.set(a.family, []);
            map.get(a.family).push(a);
        });
    return [...map.entries()];
};

const AlgorithmFrameworkScreen = () => {
    const [typeFilter, setTypeFilter] = useState("All");
    const [domainFilter, setDomainFilter] = useState("All");

    const shown = algorithms.filter(
        (a) =>
            (typeFilter === "All" || a.type === typeFilter) &&
            (domainFilter === "All" || a.domains.includes(domainFilter)),
    );

    const filterBtn = (active, label, onClick, color) => (
        <button
            key={label}
            onClick={onClick}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer border transition-colors ${
                active
                    ? "text-dark border-transparent"
                    : "text-white border-white/30 bg-white/10 hover:bg-white/20"
            }`}
            style={active ? { background: color || "#f0ebe6" } : undefined}
        >
            {label}
        </button>
    );

    return (
        <div className="relative">
            <Navbar />
            <div className="w-full min-h-screen pt-48 bg-radial-[at_200%_40%] from-[#2d737b] via-background-green via-60% to-background-green">
                {/* Hero */}
                <div className="flex flex-col items-center text-center text-white px-6 pb-12 gap-3">
                    <span className="font-semibold tracking-widest uppercase text-xs">
                        Artifact 1
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        The Machine Learning Algorithm Types
                    </h2>
                    <p className="text-nav max-w-2xl">
                        {algorithms.length} algorithms classified by how they
                        learn, where they are used, and what they are good at.
                        Start with the family tree, then check the domain grid,
                        then explore each algorithm in detail.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                        {Object.entries(types).map(([t, v]) => (
                            <span
                                key={t}
                                className="flex items-center gap-2 text-sm"
                            >
                                <span
                                    className="w-3 h-3 rounded-full"
                                    style={{ background: v.color }}
                                />
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="px-6 lg:px-24 xl:px-48 pb-24 flex flex-col gap-16">
                    {/* 1. FAMILY TREE */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                1. Family Tree: how they learn
                            </h3>
                            <p className="text-nav">
                                The first split is whether the training data
                                comes with answers (labels). Each branch then
                                groups algorithms that share the same core idea.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="px-6 py-2 rounded-full bg-white text-dark font-bold">
                                Machine Learning
                            </span>
                            <span className="w-px h-6 bg-white/40" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-6 pt-6 border-t border-white/30 relative">
                            {Object.entries(types).map(([type, meta]) => (
                                <div
                                    key={type}
                                    className="rounded-2xl p-4 bg-white/10 border border-white/30 flex flex-col gap-4"
                                    style={{
                                        borderTop: `4px solid ${meta.color}`,
                                    }}
                                >
                                    <div>
                                        <h4
                                            className="text-xl font-bold"
                                            style={{ color: meta.color }}
                                        >
                                            {type} Learning
                                        </h4>
                                        <p className="text-nav text-sm">
                                            {meta.blurb}
                                        </p>
                                    </div>
                                    {familiesOf(type).map(([family, algos]) => (
                                        <div
                                            key={family}
                                            className="flex flex-col gap-2 pl-3 border-l-2 border-white/20"
                                        >
                                            <span className="text-xs uppercase tracking-widest text-nav font-semibold">
                                                {family}
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                {algos.map((a) => (
                                                    <Chip
                                                        key={a.name}
                                                        algo={a}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 2. DOMAIN GRID */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                2. Domain Grid: where they are used
                            </h3>
                            <p className="text-nav">
                                Learning type crossed with application domain.
                                An algorithm appears in every domain it is
                                commonly applied to, so repeats are intentional.
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <div className="min-w-[760px] grid grid-cols-[110px_repeat(4,1fr)] gap-2">
                                <div />
                                {Object.entries(domains).map(([d, meta]) => (
                                    <div
                                        key={d}
                                        className="rounded-xl p-3 text-center"
                                        style={{
                                            background: meta.color + "26",
                                            border: `1px solid ${meta.color}80`,
                                        }}
                                    >
                                        <div
                                            className="font-bold"
                                            style={{ color: meta.color }}
                                        >
                                            {d}
                                        </div>
                                        <div className="text-xs text-nav">
                                            {meta.blurb}
                                        </div>
                                    </div>
                                ))}
                                {Object.entries(types).map(([type, meta]) => (
                                    <React.Fragment key={type}>
                                        <div
                                            className="rounded-xl p-3 flex items-center justify-center font-bold text-dark text-center"
                                            style={{ background: meta.color }}
                                        >
                                            {type}
                                        </div>
                                        {Object.keys(domains).map((d) => {
                                            const cell = algorithms.filter(
                                                (a) =>
                                                    a.type === type &&
                                                    a.domains.includes(d),
                                            );
                                            return (
                                                <div
                                                    key={d}
                                                    className="rounded-xl p-2 bg-white/10 border border-white/20 flex flex-col gap-1.5 min-h-24"
                                                >
                                                    {cell.length === 0 && (
                                                        <span className="text-nav/60 text-xs m-auto">
                                                            none in this map
                                                        </span>
                                                    )}
                                                    {cell.map((a) => (
                                                        <Chip
                                                            key={a.name}
                                                            algo={a}
                                                        />
                                                    ))}
                                                </div>
                                            );
                                        })}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. DETAIL CARDS */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                3. Algorithm Profiles
                            </h3>
                            <p className="text-nav">
                                Filter by type or domain. The dot meters compare
                                algorithms on two trade-offs. Interpretability
                                is how easily a human can explain a prediction.
                                Data hunger is how much data it needs to work
                                well (both are qualitative, general-case
                                ratings).
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-nav text-sm w-20">
                                    Type
                                </span>
                                {filterBtn(typeFilter === "All", "All", () =>
                                    setTypeFilter("All"),
                                )}
                                {Object.entries(types).map(([t, m]) =>
                                    filterBtn(
                                        typeFilter === t,
                                        t,
                                        () => setTypeFilter(t),
                                        m.color,
                                    ),
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-nav text-sm w-20">
                                    Domain
                                </span>
                                {filterBtn(domainFilter === "All", "All", () =>
                                    setDomainFilter("All"),
                                )}
                                {Object.entries(domains).map(([d, m]) =>
                                    filterBtn(
                                        domainFilter === d,
                                        d,
                                        () => setDomainFilter(d),
                                        m.color,
                                    ),
                                )}
                            </div>
                        </div>

                        {shown.length === 0 && (
                            <p className="text-nav">
                                No algorithm in this map matches that
                                combination. Try another filter.
                            </p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {shown.map((a) => (
                                <div
                                    key={a.name}
                                    id={`algo-${a.name.replace(/\W+/g, "-")}`}
                                    className="scroll-mt-32 rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-highlight/30"
                                    style={{
                                        borderTop: `4px solid ${types[a.type].color}`,
                                    }}
                                >
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <TypeBadge type={a.type} />
                                            <span className="text-xs text-nav">
                                                {a.family}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-bold text-white">
                                            {a.name}
                                        </h4>
                                        {a.note && (
                                            <span className="text-xs text-nav italic">
                                                {a.note}
                                            </span>
                                        )}
                                        <div className="flex flex-wrap gap-1.5">
                                            {a.domains.map((d) => (
                                                <DomainTag key={d} name={d} />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-xs uppercase tracking-widest text-nav font-semibold mb-1">
                                            How it works
                                        </h5>
                                        <p className="text-white/90 text-sm">
                                            {a.explanation}
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="text-xs uppercase tracking-widest text-nav font-semibold mb-1">
                                            Example uses
                                        </h5>
                                        <ul className="list-disc list-inside text-white/90 text-sm">
                                            {a.uses.map((u) => (
                                                <li key={u}>{u}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-auto grid grid-cols-2 gap-3 pt-2 border-t border-white/15">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-nav">
                                                Interpretability
                                            </span>
                                            <Dots
                                                value={a.interpretability}
                                                color={types[a.type].color}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-nav">
                                                Data hunger
                                            </span>
                                            <Dots
                                                value={a.dataHunger}
                                                color={types[a.type].color}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. TAKEAWAYS */}
                    <section className="bg-white/15 p-5 rounded-xl flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-white">
                            How to read the differences
                        </h3>
                        <ul className="text-nav flex flex-col gap-2 list-disc list-inside">
                            <li>
                                Tabular data is dominated by linear models and
                                tree-based methods. They are cheap, fast and
                                often the most accurate choice.
                            </li>
                            <li>
                                Images and text are where deep networks (CNNs,
                                Transformers) win, because they learn their own
                                features, but they need far more data and are
                                hard to interpret.
                            </li>
                            <li>
                                Unsupervised methods do not predict a label.
                                They summarise (PCA), group (K-Means) or create
                                (diffusion models), which is why they are often
                                used before or alongside supervised models.
                            </li>
                            <li>
                                Generative AI today is mostly built on
                                Transformers and diffusion models, linking the
                                NLP and vision branches of the map.
                            </li>
                        </ul>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AlgorithmFrameworkScreen;
