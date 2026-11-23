import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    definition,
    whyItMatters,
    stakes,
    challenges,
    organisations,
    validationSteps,
    metricGroups,
    trustLoop,
    takeaways,
    references,
} from "../constants/xai";

const SectionHead = ({ title, children }) => (
    <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-nav">{children}</p>
    </div>
);

const pct = (v) => (Number.isFinite(v) ? `${(v * 100).toFixed(1)}%` : "n/a");

const PRESETS = {
    balanced: { tp: 80, fp: 10, fn: 20, tn: 90 },
    imbalanced: { tp: 5, fp: 5, fn: 15, tn: 175 },
};

const MetricBar = ({ label, value, color, hint }) => (
    <div className="flex flex-col gap-1">
        <div className="flex justify-between text-sm">
            <span className="text-white font-semibold">{label}</span>
            <span className="text-white">{pct(value)}</span>
        </div>
        <div className="h-3 rounded-full bg-white/15 overflow-hidden">
            <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                    width: `${Number.isFinite(value) ? value * 100 : 0}%`,
                    background: color,
                }}
            />
        </div>
        <span className="text-xs text-nav">{hint}</span>
    </div>
);

const Slider = ({ label, value, onChange, color }) => (
    <label className="flex flex-col gap-1 text-sm text-white">
        <span className="flex justify-between">
            <span>{label}</span>
            <span className="font-bold">{value}</span>
        </span>
        <input
            type="range"
            min="0"
            max="200"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            style={{ accentColor: color }}
            className="w-full cursor-pointer"
        />
    </label>
);

const ExplainableAIScreen = () => {
    const [openChallenge, setOpenChallenge] = useState("faithfulness");
    const [orgIdx, setOrgIdx] = useState(1);
    const [cm, setCm] = useState(PRESETS.balanced);

    const org = organisations[orgIdx];

    const { tp, fp, fn, tn } = cm;
    const total = tp + fp + fn + tn;
    const accuracy = (tp + tn) / total;
    const precision = tp / (tp + fp);
    const recall = tp / (tp + fn);
    const f1 = (2 * precision * recall) / (precision + recall);
    const set = (key) => (v) => setCm((c) => ({ ...c, [key]: v }));

    const filterBtn = (active, label, onClick) => (
        <button
            key={label}
            onClick={onClick}
            aria-pressed={active}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer border transition-colors ${
                active
                    ? "bg-white text-dark border-transparent"
                    : "text-white border-white/30 bg-white/10 hover:bg-white/20"
            }`}
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
                        Artifact 4
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Explainable AI
                    </h2>
                    <p className="text-nav max-w-2xl">
                        An infographic on what explainable AI is, why it is hard
                        for models like GPT, Claude, Gemini and Llama, how
                        leading labs are tackling it, and how validation and
                        metrics build trust.
                    </p>
                </div>

                <div className="px-6 lg:px-24 xl:px-48 pb-24 flex flex-col gap-16">
                    {/* 1. WHAT AND WHY */}
                    <section className="flex flex-col gap-6">
                        <SectionHead title="1. What is Explainable AI, and why does it matter?">
                            {definition.short}
                        </SectionHead>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {definition.pillars.map((p) => (
                                <div
                                    key={p.name}
                                    className="rounded-2xl p-4 bg-white/10 border border-white/30 flex flex-col gap-2"
                                    style={{
                                        borderTop: `4px solid ${p.color}`,
                                    }}
                                >
                                    <h4
                                        className="text-lg font-bold"
                                        style={{ color: p.color }}
                                    >
                                        {p.name}
                                    </h4>
                                    <p className="text-white text-sm">
                                        {p.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-3">
                                <h4 className="text-xl font-bold text-white">
                                    Why transparency is critical
                                </h4>
                                <ul className="flex flex-col gap-3">
                                    {whyItMatters.map((w) => (
                                        <li key={w.title} className="text-sm">
                                            <span className="text-highlight font-bold">
                                                {w.title}.{" "}
                                            </span>
                                            <span className="text-white">
                                                {w.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-3">
                                <h4 className="text-xl font-bold text-white">
                                    Where the stakes are highest
                                </h4>
                                <ul className="flex flex-col gap-3">
                                    {stakes.map((s) => (
                                        <li key={s.domain} className="text-sm">
                                            <span className="text-accent font-bold">
                                                {s.domain}.{" "}
                                            </span>
                                            <span className="text-white">
                                                {s.example}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 2. CHALLENGES */}
                    <section className="flex flex-col gap-6">
                        <SectionHead title="2. Challenges in explainability">
                            Six obstacles stand between today's LLMs and a clear
                            explanation. Select one to read the detail.
                        </SectionHead>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {challenges.map((c) => {
                                const open = openChallenge === c.id;
                                return (
                                    <button
                                        key={c.id}
                                        onClick={() =>
                                            setOpenChallenge(open ? null : c.id)
                                        }
                                        aria-expanded={open}
                                        className={`text-left cursor-pointer rounded-2xl p-5 border flex flex-col gap-3 transition-all ${
                                            open
                                                ? "bg-white/20 border-white/60"
                                                : "bg-white/10 border-white/30 hover:bg-white/15"
                                        }`}
                                        style={{
                                            borderTop: `4px solid ${c.color}`,
                                        }}
                                    >
                                        <h4 className="text-lg font-bold text-white">
                                            {c.title}
                                        </h4>
                                        <div>
                                            <p
                                                className="text-3xl font-bold"
                                                style={{ color: c.color }}
                                            >
                                                {c.stat}
                                            </p>
                                            <p className="text-nav text-xs">
                                                {c.statLabel}
                                            </p>
                                        </div>
                                        {open && (
                                            <div className="flex flex-col gap-2 pt-2 border-t border-white/20">
                                                <p className="text-white text-sm">
                                                    {c.text}
                                                </p>
                                                <p className="text-nav text-sm">
                                                    <span className="font-bold">
                                                        Takeaway:{" "}
                                                    </span>
                                                    {c.detail}
                                                </p>
                                            </div>
                                        )}
                                        {!open && (
                                            <span className="text-xs text-nav mt-auto">
                                                Select to expand
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* 3. INDUSTRY SOLUTIONS */}
                    <section className="flex flex-col gap-6">
                        <SectionHead title="3. Current solutions from industry leaders">
                            Each lab has a different strategy. Pick a model to
                            see its approach.
                        </SectionHead>

                        <div className="flex flex-wrap gap-2">
                            {organisations.map((o, i) => (
                                <button
                                    key={o.model}
                                    onClick={() => setOrgIdx(i)}
                                    aria-pressed={orgIdx === i}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer border transition-colors ${
                                        orgIdx === i
                                            ? "text-dark border-transparent"
                                            : "text-white border-white/30 bg-white/10 hover:bg-white/20"
                                    }`}
                                    style={
                                        orgIdx === i
                                            ? { background: o.color }
                                            : undefined
                                    }
                                >
                                    {o.model}{" "}
                                    <span className="font-normal opacity-80">
                                        ({o.org})
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div
                            className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-4"
                            style={{ borderTop: `4px solid ${org.color}` }}
                        >
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <h4
                                    className="text-2xl font-bold"
                                    style={{ color: org.color }}
                                >
                                    {org.model}
                                </h4>
                                <span className="text-xs text-nav">
                                    {org.org} · {org.access}
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {org.efforts.map((e) => (
                                    <div
                                        key={e.name}
                                        className="rounded-xl p-4 bg-white/10 flex flex-col gap-1"
                                    >
                                        <h5 className="text-white font-bold">
                                            {e.name}
                                        </h5>
                                        <p className="text-white/90 text-sm">
                                            {e.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4. VALIDATION AND METRICS */}
                    <section className="flex flex-col gap-6">
                        <SectionHead title="4. Validation and performance metrics">
                            Explanations say why. Validation and metrics show
                            whether the model is actually reliable. Together
                            they make an AI system accountable.
                        </SectionHead>

                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-3">
                            {validationSteps.map((v, i) => (
                                <div
                                    key={v.step}
                                    className="rounded-2xl p-4 bg-white/10 border border-white/30 flex flex-col gap-2"
                                >
                                    <span className="text-xs font-bold text-highlight">
                                        STEP {i + 1}
                                    </span>
                                    <h5 className="text-white font-bold leading-tight">
                                        {v.step}
                                    </h5>
                                    <p className="text-white/90 text-xs">
                                        {v.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Interactive metric calculator */}
                        <div className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl font-bold text-white">
                                    Try it: how one metric can mislead
                                </h4>
                                <p className="text-nav text-sm">
                                    A classifier that flags risky cases. Move
                                    the sliders to change its results, or load
                                    the imbalanced example where accuracy looks
                                    great while most real problems are missed.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {filterBtn(false, "Balanced example", () =>
                                        setCm(PRESETS.balanced),
                                    )}
                                    {filterBtn(
                                        false,
                                        "Imbalanced example",
                                        () => setCm(PRESETS.imbalanced),
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                                <div className="flex flex-col gap-3">
                                    <Slider
                                        label="True positives (risk caught)"
                                        value={tp}
                                        onChange={set("tp")}
                                        color="#7fc8a9"
                                    />
                                    <Slider
                                        label="False positives (false alarms)"
                                        value={fp}
                                        onChange={set("fp")}
                                        color="#e9b44c"
                                    />
                                    <Slider
                                        label="False negatives (risk missed)"
                                        value={fn}
                                        onChange={set("fn")}
                                        color="#d5573b"
                                    />
                                    <Slider
                                        label="True negatives (correctly cleared)"
                                        value={tn}
                                        onChange={set("tn")}
                                        color="#4eb1bc"
                                    />
                                </div>
                                <div
                                    className="grid grid-cols-[auto_1fr_1fr] gap-1 text-center text-xs text-nav"
                                    role="img"
                                    aria-label={`Confusion matrix: ${tp} true positives, ${fp} false positives, ${fn} false negatives, ${tn} true negatives`}
                                >
                                    <span />
                                    <span className="py-1">
                                        Predicted risky
                                    </span>
                                    <span className="py-1">Predicted safe</span>
                                    <span className="self-center pr-2 text-right">
                                        Actually risky
                                    </span>
                                    <span
                                        className="rounded-lg py-6 text-xl font-bold text-dark"
                                        style={{ background: "#7fc8a9" }}
                                    >
                                        {tp}
                                    </span>
                                    <span
                                        className="rounded-lg py-6 text-xl font-bold text-dark"
                                        style={{ background: "#d5573b" }}
                                    >
                                        {fn}
                                    </span>
                                    <span className="self-center pr-2 text-right">
                                        Actually safe
                                    </span>
                                    <span
                                        className="rounded-lg py-6 text-xl font-bold text-dark"
                                        style={{ background: "#e9b44c" }}
                                    >
                                        {fp}
                                    </span>
                                    <span
                                        className="rounded-lg py-6 text-xl font-bold text-dark"
                                        style={{ background: "#4eb1bc" }}
                                    >
                                        {tn}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <MetricBar
                                        label="Accuracy"
                                        value={accuracy}
                                        color="#4eb1bc"
                                        hint="(TP + TN) / all cases"
                                    />
                                    <MetricBar
                                        label="Precision"
                                        value={precision}
                                        color="#e9b44c"
                                        hint="Of the cases flagged, how many were real: TP / (TP + FP)"
                                    />
                                    <MetricBar
                                        label="Recall"
                                        value={recall}
                                        color="#d5573b"
                                        hint="Of the real cases, how many were caught: TP / (TP + FN)"
                                    />
                                    <MetricBar
                                        label="F1 score"
                                        value={f1}
                                        color="#a78bfa"
                                        hint="Balance of precision and recall"
                                    />
                                </div>
                            </div>
                            {accuracy >= 0.85 && recall < 0.5 && (
                                <p className="text-sm text-white rounded-xl bg-accent/30 border border-accent/60 p-3">
                                    Accuracy is {pct(accuracy)}, yet the model
                                    catches only {pct(recall)} of real risks.
                                    When one class is rare, accuracy hides
                                    failures, so reporting several metrics is
                                    part of accountability.
                                </p>
                            )}
                        </div>

                        <div className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-4">
                            <h4 className="text-xl font-bold text-white">
                                How it builds trust
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                                {trustLoop.map((t, i) => (
                                    <div
                                        key={t.label}
                                        className="relative rounded-xl p-3 bg-white/10 text-center flex flex-col gap-1"
                                    >
                                        <span className="text-highlight font-bold text-sm">
                                            {i + 1}. {t.label}
                                        </span>
                                        <span className="text-white/90 text-xs">
                                            {t.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-nav text-xs">
                                The loop repeats: monitoring finds new failures,
                                which feed back into validation.
                            </p>
                        </div>
                    </section>

                    {/* 5. TAKEAWAYS */}
                    <section className="bg-white/15 p-5 rounded-xl flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-white">
                            Key takeaways
                        </h3>
                        <ul className="text-nav flex flex-col gap-2 list-disc list-inside">
                            {takeaways.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                    </section>

                    {/* REFERENCES */}
                    <section className="bg-white/15 p-5 rounded-xl flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-white">
                            References
                        </h3>
                        <ol className="flex flex-col gap-2">
                            {references.map((r) => (
                                <li key={r.id} className="text-nav text-sm">
                                    [{r.id}] {r.text}{" "}
                                    <a
                                        href={r.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-highlight underline break-all"
                                    >
                                        Link
                                    </a>
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

export default ExplainableAIScreen;
