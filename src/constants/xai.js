const definition = {
    short: "Explainable AI (XAI) is the set of methods and practices that let people understand why an AI system produced a particular output, not just what the output was.",
    pillars: [
        {
            name: "Transparency",
            color: "#4eb1bc",
            text: "Openness about what the model is, how it was built, what data it saw and where it is known to fail (model cards, system cards, documentation).",
        },
        {
            name: "Interpretability",
            color: "#e9b44c",
            text: "How well a human can follow the model's internal mechanics: which features, neurons or circuits drive a result.",
        },
        {
            name: "Explainability",
            color: "#a78bfa",
            text: "A usable account of one decision, given in terms the affected person can act on (for example, 'declined because of debt-to-income ratio').",
        },
        {
            name: "Accountability",
            color: "#d5573b",
            text: "Clear responsibility and evidence so a decision can be audited, contested and corrected by a named owner.",
        },
    ],
};

const whyItMatters = [
    {
        title: "Trust and adoption",
        text: "People rely on a system only when they can check its reasoning. Unexplained answers push users to either over-trust or ignore the tool.",
    },
    {
        title: "Safety and debugging",
        text: "If you cannot see why a model failed, you cannot fix it. Explanations expose shortcuts, spurious correlations and hidden failure modes.",
    },
    {
        title: "Fairness",
        text: "Bias hides inside opaque models. Explanations let auditors check whether protected attributes, or proxies for them, drive decisions.",
    },
    {
        title: "Law and compliance",
        text: "Regulators increasingly require documentation, human oversight and information about automated decisions.",
    },
];

const stakes = [
    { domain: "Healthcare", example: "A model flags a scan as high-risk. The clinician must know which region drove the call before acting." },
    { domain: "Finance", example: "A loan is declined. The applicant is owed reasons they can understand and challenge." },
    { domain: "Hiring", example: "A resume screener ranks candidates. Employers must show the ranking is not driven by protected traits." },
    { domain: "Law and justice", example: "A risk score informs a decision about a person's liberty, so it has to be contestable." },
];

const challenges = [
    {
        id: "complexity",
        title: "Model complexity",
        color: "#d5573b",
        stat: "175B to 405B",
        statLabel: "parameters in GPT-3 and the open Llama 3.1 405B",
        text: "Frontier LLMs have billions to trillions of parameters, trained on internet-scale text. No person can read the weights, and decisions emerge from the interaction of millions of components.",
        detail: "Size for GPT-4, Claude and Gemini is not published, which is itself a transparency gap.",
    },
    {
        id: "opaque",
        title: "Opaque decision process",
        color: "#e9b44c",
        stat: "Polysemantic",
        statLabel: "single neurons mix many unrelated concepts",
        text: "Individual neurons rarely map to one idea (superposition), so reading neuron activations does not tell you what the model 'thinks'. Outputs are also probabilistic, so the same prompt can give different answers.",
        detail: "Interpretability researchers had to invent new tools (sparse autoencoders, circuit tracing) just to find readable units inside the model.",
    },
    {
        id: "faithfulness",
        title: "Explanations may not be faithful",
        color: "#a78bfa",
        stat: "< 20%",
        statLabel: "of the time a reasoning model admitted to using a hint it relied on (often)",
        text: "Asking an LLM to 'explain itself' produces plausible text, not necessarily the real cause. Anthropic found reasoning models often used a hint in the prompt without mentioning it in their written reasoning.",
        detail: "A fluent explanation is not evidence of a faithful one. It has to be tested.",
    },
    {
        id: "access",
        title: "Closed vs open weights",
        color: "#4eb1bc",
        stat: "3 of 4",
        statLabel: "of GPT, Claude, Gemini and Llama keep weights private",
        text: "Outsiders can only probe GPT, Claude and Gemini through an API, which limits what they can verify. Llama's open weights allow deep inspection, but open weights alone do not make a model understandable.",
        detail: "Open access enables research. It does not produce explanations by itself.",
    },
    {
        id: "regulation",
        title: "Regulatory pressure and ambiguity",
        color: "#7fc8a9",
        stat: "2024 to 2027",
        statLabel: "phase-in of the EU AI Act obligations",
        text: "The EU AI Act sets documentation, transparency and oversight duties that phase in over several years, and some dates have been adjusted. Regulators ask for explanations, but there is no agreed technical standard for what counts as one.",
        detail: "Teams must comply under uncertainty while the science is still maturing.",
    },
    {
        id: "tradeoff",
        title: "Accuracy vs interpretability",
        color: "#d98ad1",
        stat: "Trade-off",
        statLabel: "the most accurate models are often the least readable",
        text: "A decision tree is easy to read but weak on language or images. Deep networks are far more capable but harder to explain. Teams often have to choose, or add explanation layers on top.",
        detail: "Simple models for high-stakes tabular data, deep models plus explanation tools for language and vision.",
    },
];

// Four leading model families and what each organisation has done on explainability
const organisations = [
    {
        model: "GPT",
        org: "OpenAI",
        color: "#7fc8a9",
        access: "Closed weights (API)",
        efforts: [
            {
                name: "Automated neuron explanations",
                text: "Used GPT-4 to write natural-language descriptions of what neurons in a smaller model respond to, then scored the descriptions.",
            },
            {
                name: "Sparse autoencoders on GPT-4",
                text: "Trained large sparse autoencoders to break GPT-4's activations into millions of more interpretable features.",
            },
            {
                name: "Chain-of-thought monitoring",
                text: "Reads the reasoning text of o-series models to catch misbehaviour, and published evaluations measuring how monitorable that reasoning is.",
            },
            {
                name: "System cards and Model Spec",
                text: "Publishes safety documentation per release and a written spec describing intended model behaviour.",
            },
        ],
    },
    {
        model: "Claude",
        org: "Anthropic",
        color: "#d5573b",
        access: "Closed weights (API)",
        efforts: [
            {
                name: "Dictionary learning at scale",
                text: "Extracted millions of interpretable features from Claude 3 Sonnet (for example, a feature for the Golden Gate Bridge) and showed they can be steered.",
            },
            {
                name: "Circuit tracing",
                text: "Attribution graphs trace the intermediate steps Claude 3.5 Haiku takes, showing it plans rhymes ahead and shares circuits across languages. The tools are open-sourced.",
            },
            {
                name: "Faithfulness research",
                text: "Tested whether written reasoning reflects what the model actually used, and reported that it often does not.",
            },
            {
                name: "Constitutional AI and system cards",
                text: "Trains behaviour against a published set of written principles, with detailed system cards for each release.",
            },
        ],
    },
    {
        model: "Gemini",
        org: "Google DeepMind",
        color: "#8fa8e8",
        access: "Closed weights (API); open Gemma sibling",
        efforts: [
            {
                name: "Gemma Scope",
                text: "Released hundreds of open sparse autoencoders (30M+ features) for Gemma 2 so outside researchers can study a model without paying the training cost.",
            },
            {
                name: "Model cards",
                text: "Google researchers introduced model cards (2019), and Gemini ships with a model card describing use, data and evaluations.",
            },
            {
                name: "Concept-based tools",
                text: "TCAV tests whether a human-defined concept influences a prediction. The What-If Tool lets practitioners probe model behaviour interactively.",
            },
            {
                name: "Visible reasoning summaries",
                text: "Gemini thinking models can return summaries of their reasoning to developers.",
            },
        ],
    },
    {
        model: "LLaMA",
        org: "Meta",
        color: "#e9b44c",
        access: "Open weights (licensed)",
        efforts: [
            {
                name: "Open weights",
                text: "Anyone can download Llama models and inspect activations, so much outside interpretability research runs on Llama and similar models.",
            },
            {
                name: "Captum",
                text: "Meta's PyTorch library for attribution methods such as Integrated Gradients, extended to explain generative language models.",
            },
            {
                name: "Llama Guard",
                text: "A safeguard model that classifies prompts and responses against an open taxonomy of safety categories, making moderation decisions inspectable.",
            },
            {
                name: "Model cards and use guides",
                text: "Each release ships with a model card covering training data size, compute, emissions and intended use.",
            },
        ],
    },
];

const validationSteps = [
    {
        step: "Split and cross-validate",
        text: "Hold out data the model never trained on. Cross-validation repeats this across several splits so one lucky split cannot flatter the result.",
    },
    {
        step: "Measure performance",
        text: "Score the model with task metrics (accuracy, precision, recall, F1) and benchmarks.",
    },
    {
        step: "Check calibration",
        text: "A reliable model's confidence should match how often it is right. Overconfident wrong answers destroy trust.",
    },
    {
        step: "Test fairness and robustness",
        text: "Compare error rates across groups and test under noise, adversarial prompts and data drift.",
    },
    {
        step: "Red-team and audit",
        text: "Human experts try to break the system. Independent audits review documentation, evidence and incident logs.",
    },
    {
        step: "Monitor in production",
        text: "Track metrics after launch, since data shifts. Log decisions so they can be traced and corrected.",
    },
];

const metricGroups = [
    {
        group: "Correctness",
        color: "#4eb1bc",
        items: [
            { name: "Accuracy, precision, recall, F1", text: "Core classification scores. Which one matters depends on the cost of each kind of error." },
            { name: "ROC-AUC", text: "How well the model ranks positives above negatives across all thresholds." },
            { name: "Perplexity", text: "How surprised a language model is by real text. Lower is better." },
        ],
    },
    {
        group: "Reliability",
        color: "#e9b44c",
        items: [
            { name: "Calibration (ECE, Brier score)", text: "Gap between stated confidence and actual accuracy." },
            { name: "Robustness", text: "Performance drop under noisy, adversarial or shifted inputs." },
            { name: "Hallucination rate", text: "Share of answers with claims unsupported by the source or by fact (for example, TruthfulQA)." },
        ],
    },
    {
        group: "Fairness and safety",
        color: "#d5573b",
        items: [
            { name: "Demographic parity, equalized odds", text: "Compare approval rates or error rates between groups." },
            { name: "Red-team success rate", text: "How often testers can elicit harmful or policy-violating output." },
            { name: "Benchmark suites (MMLU, HELM)", text: "Broad, repeatable tests that let different models be compared." },
        ],
    },
    {
        group: "Explanation quality",
        color: "#a78bfa",
        items: [
            { name: "Faithfulness", text: "Does removing the features an explanation highlights actually change the output (deletion and insertion tests)?" },
            { name: "Stability", text: "Do similar inputs get similar explanations?" },
            { name: "Comprehensibility", text: "Can the intended audience actually use it? Measured with human studies." },
        ],
    },
];

const trustLoop = [
    { label: "Validate", text: "Prove it works on unseen data" },
    { label: "Explain", text: "Show why it decided" },
    { label: "Document", text: "Publish limits and evidence" },
    { label: "Monitor", text: "Watch it after launch" },
    { label: "Be accountable", text: "Own and fix failures" },
];

const takeaways = [
    "Explainability is about people being able to check and challenge an AI decision. It is not a single feature you switch on.",
    "LLMs are hard to explain because of their size, their distributed internal representations and the fact that a fluent explanation is not proof of a faithful one.",
    "Leading labs are attacking the problem from different angles: opening up the model (Anthropic, OpenAI, DeepMind), opening up the weights (Meta), and documenting behaviour (everyone).",
    "Validation and metrics supply the evidence. Explanations supply the reasons. Trust needs both, plus monitoring and clear accountability after launch.",
];

const references = [
    {
        id: 1,
        text: "Brown, T. et al. (2020). Language Models are Few-Shot Learners (GPT-3, 175B parameters). arXiv:2005.14165.",
        url: "https://arxiv.org/abs/2005.14165",
    },
    {
        id: 2,
        text: "Meta. Llama 3.1 model card (405B parameters, training data, compute and emissions).",
        url: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md",
    },
    {
        id: 3,
        text: "European Commission AI Act Service Desk. EU AI Act implementation timeline (dates for high-risk obligations have been adjusted, so check the current version).",
        url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline",
    },
    {
        id: 4,
        text: "Bills, S. et al. (2023). Language models can explain neurons in language models. OpenAI.",
        url: "https://openaipublic.blob.core.windows.net/neuron-explainer/paper/index.html",
    },
    {
        id: 5,
        text: "Gao, L. et al. (2024). Scaling and evaluating sparse autoencoders (applied to GPT-4). OpenAI. arXiv:2406.04093.",
        url: "https://arxiv.org/abs/2406.04093",
    },
    {
        id: 6,
        text: "OpenAI (2025). Evaluating chain-of-thought monitorability; Guan, M. et al. Monitoring Monitorability, arXiv:2512.18311.",
        url: "https://openai.com/index/evaluating-chain-of-thought-monitorability",
    },
    {
        id: 7,
        text: "Templeton, A. et al. (2024). Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet. Transformer Circuits Thread.",
        url: "https://transformer-circuits.pub/2024/scaling-monosemanticity/",
    },
    {
        id: 8,
        text: "Anthropic (2025). Tracing the thoughts of a large language model. Summarises circuit tracing and 'On the Biology of a Large Language Model' (Claude 3.5 Haiku).",
        url: "https://www.anthropic.com/research/tracing-thoughts-language-model",
    },
    {
        id: 9,
        text: "Anthropic (2025). Open-sourcing circuit-tracing tools (supports Gemma-2-2b and Llama-3.2-1b).",
        url: "https://www.anthropic.com/research/open-source-circuit-tracing",
    },
    {
        id: 10,
        text: "Chen, Y. et al. (2025). Reasoning Models Don't Always Say What They Think. Anthropic. arXiv:2505.05410.",
        url: "https://arxiv.org/abs/2505.05410",
    },
    {
        id: 11,
        text: "Lieberum, T. et al. (2024). Gemma Scope: Open Sparse Autoencoders Everywhere All At Once on Gemma 2. Google DeepMind. arXiv:2408.05147.",
        url: "https://arxiv.org/abs/2408.05147",
    },
    {
        id: 12,
        text: "Mitchell, M. et al. (2019). Model Cards for Model Reporting. arXiv:1810.03993.",
        url: "https://arxiv.org/abs/1810.03993",
    },
    {
        id: 13,
        text: "Kim, B. et al. (2018). Interpretability Beyond Feature Attribution: Quantitative Testing with Concept Activation Vectors (TCAV). arXiv:1711.11279.",
        url: "https://arxiv.org/abs/1711.11279",
    },
    {
        id: 14,
        text: "Wexler, J. et al. (2019). The What-If Tool: Interactive Probing of Machine Learning Models. arXiv:1907.04135.",
        url: "https://arxiv.org/abs/1907.04135",
    },
    {
        id: 15,
        text: "Miglani, V. et al. (2023). Using Captum to Explain Generative Language Models. arXiv:2312.05491.",
        url: "https://arxiv.org/abs/2312.05491",
    },
    {
        id: 16,
        text: "Sundararajan, M., Taly, A. & Yan, Q. (2017). Axiomatic Attribution for Deep Networks (Integrated Gradients). arXiv:1703.01365.",
        url: "https://arxiv.org/abs/1703.01365",
    },
    {
        id: 17,
        text: "Meta. Llama Guard 4 model card and Llama protections.",
        url: "https://developer.meta.com/ai/docs/model-cards-and-prompt-formats/llama-guard-4/",
    },
];

export {
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
};
