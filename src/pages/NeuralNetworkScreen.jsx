import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    components,
    architecture,
    trainingLoop,
    insights,
} from "../constants/neuralNetwork";

// Diagram geometry (SVG user units)
const W = 900;
const H = 380;
const COL_X = [110, 340, 570, 790];
const R = 18;

const nodeY = (count, i) => (H / count) * (i + 0.5) * 0.8 + H * 0.1;

const NetworkDiagram = () => (
    <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full min-w-[640px]"
        role="img"
        aria-label="Neural network diagram: input layer, two hidden layers and an output layer, with every neuron connected to every neuron in the next layer"
    >
        {/* Weights: every neuron connects to every neuron in the next layer */}
        {architecture
            .slice(0, -1)
            .map((layer, li) =>
                Array.from({ length: layer.count }).flatMap((_, a) =>
                    Array.from({ length: architecture[li + 1].count }).map(
                        (_, b) => (
                            <line
                                key={`${li}-${a}-${b}`}
                                x1={COL_X[li]}
                                y1={nodeY(layer.count, a)}
                                x2={COL_X[li + 1]}
                                y2={nodeY(architecture[li + 1].count, b)}
                                stroke={(a + b) % 2 ? "#4eb1bc" : "#d5573b"}
                                strokeOpacity="0.45"
                                strokeWidth={1 + ((a * 3 + b * 2) % 3)}
                            />
                        ),
                    ),
                ),
            )}
        {/* Neurons */}
        {architecture.map((layer, li) =>
            Array.from({ length: layer.count }).map((_, i) => (
                <circle
                    key={`${li}-${i}`}
                    cx={COL_X[li]}
                    cy={nodeY(layer.count, i)}
                    r={R}
                    fill="#0c1b1d"
                    stroke={layer.color}
                    strokeWidth="3"
                />
            )),
        )}
        {/* Layer labels */}
        {architecture.map((layer, li) => (
            <g key={layer.label} textAnchor="middle">
                <text
                    x={COL_X[li]}
                    y={H - 22}
                    fill="#f0ebe6"
                    fontSize="16"
                    fontWeight="700"
                >
                    {layer.label}
                </text>
                <text x={COL_X[li]} y={H - 4} fill="#c2ad99" fontSize="13">
                    {layer.sub}
                </text>
            </g>
        ))}
    </svg>
);

const NeuralNetworkScreen = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="w-full min-h-screen pt-48 bg-radial-[at_200%_40%] from-[#2d737b] via-background-green via-60% to-background-green">
                {/* Hero */}
                <div className="flex flex-col items-center text-center text-white px-6 pb-12 gap-3">
                    <span className="font-semibold tracking-widest uppercase text-xs">
                        Artifact 2
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Visualizing a Neural Network
                    </h2>
                    <p className="text-nav max-w-2xl">
                        A visual walkthrough of the six building blocks of a
                        neural network, based on experimenting with the{" "}
                        <a
                            href="https://playground.tensorflow.org/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-highlight underline"
                        >
                            TensorFlow Playground
                        </a>
                        . Start with the architecture, then go through each
                        component.
                    </p>
                </div>

                <div className="px-6 lg:px-24 xl:px-48 pb-24 flex flex-col gap-16">
                    {/* 1. ARCHITECTURE */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                1. Architecture: how data flows
                            </h3>
                            <p className="text-nav">
                                Data enters at the input layer, moves left to
                                right through the hidden layers and leaves as a
                                prediction. Every line is a weight.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl bg-white/10 border border-white/30 p-4">
                            <NetworkDiagram />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <p className="text-nav">
                                <span className="font-bold text-white">
                                    Circles
                                </span>{" "}
                                are neurons. Each one sums its weighted inputs
                                and applies an activation function.
                            </p>
                            <p className="text-nav">
                                <span className="font-bold text-white">
                                    Lines
                                </span>{" "}
                                are weights. Colour shows sign and thickness
                                shows size, as in the Playground.
                            </p>
                            <p className="text-nav">
                                <span className="font-bold text-white">
                                    Columns
                                </span>{" "}
                                are layers. More hidden layers let the network
                                learn more complex patterns.
                            </p>
                        </div>
                    </section>

                    {/* 2. TRAINING LOOP */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                2. Training loop: how it learns
                            </h3>
                            <p className="text-nav">
                                Pressing play in the Playground repeats these
                                four steps, and the epoch counter goes up each
                                time through the data.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 items-stretch">
                            {trainingLoop.map((s, i) => (
                                <React.Fragment key={s.step}>
                                    <div className="rounded-2xl p-4 bg-white/10 border border-white/30 flex flex-col gap-2 flex-1">
                                        <span className="text-xs font-bold text-highlight">
                                            STEP {i + 1}
                                        </span>
                                        <h4 className="font-bold text-white">
                                            {s.step}
                                        </h4>
                                        <p className="text-nav text-sm">
                                            {s.text}
                                        </p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        <p className="text-center text-nav text-sm">
                            Step 4 feeds back into step 1 until the loss stops
                            improving.
                        </p>
                    </section>

                    {/* 3. COMPONENTS */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                3. Components
                            </h3>
                            <p className="text-nav">
                                Each card defines the component, explains its
                                role, and points to where it appears in the
                                Playground.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {components.map((c, i) => (
                                <div
                                    key={c.name}
                                    className="rounded-2xl p-5 bg-white/10 border border-white/30 flex flex-col gap-3"
                                    style={{
                                        borderTop: `4px solid ${c.color}`,
                                    }}
                                >
                                    <h4
                                        className="text-xl font-bold"
                                        style={{ color: c.color }}
                                    >
                                        {i + 1}. {c.name}
                                    </h4>
                                    <p className="text-white text-sm">
                                        <span className="font-bold">
                                            What it is:{" "}
                                        </span>
                                        {c.definition}
                                    </p>
                                    <p className="text-white text-sm">
                                        <span className="font-bold">
                                            Why it matters:{" "}
                                        </span>
                                        {c.role}
                                    </p>
                                    <p className="text-nav text-sm pt-2 border-t border-white/20">
                                        <span className="font-bold">
                                            In the Playground:{" "}
                                        </span>
                                        {c.playground}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. SUMMARY */}
                    <section className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                4. Summary
                            </h3>
                        </div>
                        <div className="rounded-2xl p-6 bg-white/10 border border-white/30 flex flex-col gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-highlight">
                                    Why visualize neural networks?
                                </h4>
                                <p className="text-white mt-2">
                                    A neural network is easy to treat as a black
                                    box. Visualizing it turns abstract ideas
                                    like weights, activations and loss into
                                    things you can see change. It makes the
                                    concepts easier to learn, helps you spot
                                    problems such as overfitting early, and
                                    makes the model easier to explain to people
                                    who are not technical.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-highlight">
                                    Key insights from the exercise
                                </h4>
                                <ul className="mt-2 flex flex-col gap-2 list-disc pl-5 text-white">
                                    {insights.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default NeuralNetworkScreen;
