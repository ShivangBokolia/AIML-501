// Figures are public disclosures or third-party estimates. Bracketed numbers
// such as [1] point to the `references` list at the bottom of this file.
// Values marked "calculated" are derived from published numbers (see notes).

const pipeline = [
    {
        step: "Data collection",
        icon: "data",
        text: "Crawl web pages, books, code and licensed or synthetic data. Trillions of words are gathered.",
        load: { data: 3, compute: 0, energy: 0, time: 1 },
    },
    {
        step: "Cleaning & tokenization",
        icon: "filter",
        text: "Remove duplicates, spam and toxic text, then split what remains into tokens the model can read.",
        load: { data: 3, compute: 1, energy: 1, time: 1 },
    },
    {
        step: "Pre-training",
        icon: "chip",
        text: "The model predicts the next token across the whole dataset. This is where nearly all compute and energy go.",
        load: { data: 3, compute: 3, energy: 3, time: 3 },
    },
    {
        step: "Fine-tuning",
        icon: "tune",
        text: "Train on curated instruction and answer examples so the model follows directions instead of just continuing text.",
        load: { data: 1, compute: 1, energy: 1, time: 1 },
    },
    {
        step: "Alignment (RLHF)",
        icon: "people",
        text: "Humans rank answers, a reward model learns their preferences, and the LLM is tuned to match them.",
        load: { data: 1, compute: 2, energy: 1, time: 1 },
    },
    {
        step: "Evaluation & safety",
        icon: "shield",
        text: "Benchmarks and red-teaming test accuracy, bias and misuse before anyone outside the lab sees the model.",
        load: { data: 1, compute: 1, energy: 0, time: 2 },
    },
    {
        step: "Deployment",
        icon: "cloud",
        text: "Serve the model through APIs and apps. Every user query (inference) costs compute, so this cost never stops.",
        load: { data: 0, compute: 2, energy: 3, time: 3 },
    },
];

const resources = [
    {
        name: "Data",
        color: "#4eb1bc",
        icon: "data",
        stat: "300B to 15T+",
        unit: "training tokens",
        text: "GPT-3 saw about 300 billion tokens [9]. Llama 3.1 saw 15.6 trillion [5], around 50 times more.",
        why: "More and cleaner data lets a model learn more patterns. Quality filtering often matters as much as volume.",
    },
    {
        name: "Compute",
        color: "#d5573b",
        icon: "chip",
        stat: "10,000s",
        unit: "of GPUs in parallel",
        text: "Llama 3.1 405B trained on up to 16,000 H100 GPUs [5]. Epoch AI estimates GPT-4 used about 25,000 A100s [2].",
        why: "Compute is the main lever on capability, and it is the largest line on the bill (chips, plus renting them).",
    },
    {
        name: "Energy",
        color: "#e9b44c",
        icon: "bolt",
        stat: "1.3 to 22 GWh",
        unit: "per training run",
        text: "GPT-3 used about 1,287 MWh [8]. Llama 3.1 405B's GPUs alone drew roughly 22 GWh (calculated from [6]: 30.84M GPU-hours at 700 W), the yearly use of about 2,000 US homes [12].",
        why: "Power is a small share of cost but a growing constraint on where data centres can be built, and on emissions.",
    },
    {
        name: "Time",
        color: "#a78bfa",
        icon: "clock",
        stat: "Weeks to months",
        unit: "of continuous training",
        text: "Llama 3.1 405B used 30.84M GPU-hours [6], about 78 days on 16,384 GPUs (calculated). Epoch AI estimates GPT-4 at about 95 days [2].",
        why: "Long runs raise the risk of hardware failures and make mistakes expensive, since a bad run can't be cheaply redone.",
    },
];

// compute in FLOPs, cost in USD millions (Stanford AI Index 2024 / Epoch AI estimates)
const models = [
    {
        name: "GPT-3",
        org: "OpenAI",
        year: 2020,
        color: "#4eb1bc",
        params: "175B",
        tokens: "~300B",
        hardware: "V100 GPUs (Microsoft cluster)",
        time: "~15 days (Epoch est.)",
        energy: "~1,287 MWh",
        flops: 3.1e23,
        cost: 4.3,
        note: "Sources: [9] data and hardware, [8] energy, [2] time, [1] cost.",
    },
    {
        name: "Llama 2 70B",
        org: "Meta",
        year: 2023,
        color: "#d5573b",
        params: "70B",
        tokens: "2T",
        hardware: "A100 80GB",
        time: "1.72M GPU-hours",
        energy: "~690 MWh (calculated)",
        flops: 8.1e23,
        cost: 3.9,
        note: "Meta published 1.72M GPU-hours at 400 W and 291 tCO2e [7]. Energy is GPU-hours × power. Cost: [1].",
    },
    {
        name: "GPT-4",
        org: "OpenAI",
        year: 2023,
        color: "#e9b44c",
        params: "Undisclosed",
        tokens: "Undisclosed",
        hardware: "~25,000 A100s (Epoch est.)",
        time: "~95 days (Epoch est.)",
        energy: "Not published",
        flops: 2.1e25,
        cost: 78,
        note: "OpenAI has not published training details. Hardware and time: [2]. Cost: [1]. OpenAI's CEO reportedly said it cost over $100M [11].",
    },
    {
        name: "Gemini Ultra",
        org: "Google",
        year: 2023,
        color: "#a78bfa",
        params: "Undisclosed",
        tokens: "Undisclosed",
        hardware: "Google TPU v4 (~57,000 chips, Epoch est.)",
        time: "~100 days (Epoch est.)",
        energy: "Not published",
        flops: 5.0e25,
        cost: 191,
        note: "Google has not published training details. Compute, hardware and time are Epoch AI estimates [2]. Cost: [1].",
    },
    {
        name: "Llama 3.1 405B",
        org: "Meta",
        year: 2024,
        color: "#f0ebe6",
        params: "405B",
        tokens: "15.6T",
        hardware: "Up to 16,000 H100s",
        time: "30.84M GPU-hours (~78 days, calculated)",
        energy: "~22 GWh (GPUs)",
        flops: 3.8e25,
        cost: null,
        note: "Hardware, GPU-hours, tokens and 8,930 tCO2e (location-based): [5][6]. Meta didn't publish a cost; at an assumed $2 per GPU-hour it would be about $62M (calculated).",
    },
    {
        name: "Claude (3.5 Sonnet)",
        org: "Anthropic",
        year: 2024,
        color: "#c15f3c",
        params: "Undisclosed",
        tokens: "Undisclosed",
        hardware: "Undisclosed",
        time: "Not published",
        energy: "Not published",
        flops: 2.7e25,
        cost: null,
        note: "Anthropic's CEO said it 'cost a few $10M's to train' [10], but gave no exact number. The compute figure is a speculative Epoch AI estimate [2].",
    },
];

// Midpoints of the ranges Epoch AI reports for selected frontier models [3]
const costBreakdown = [
    {
        label: "AI chips & servers",
        pct: 57,
        color: "#d5573b",
        text: "Accelerators, other servers and interconnect. Epoch's range is 47 to 67% [3].",
    },
    {
        label: "Research & engineering staff",
        pct: 39,
        color: "#4eb1bc",
        text: "Researchers and engineers, including equity. Epoch's range is 29 to 49% [3].",
    },
    {
        label: "Energy",
        pct: 4,
        color: "#e9b44c",
        text: "Electricity for the training run itself. Epoch's range is 2 to 6% [3].",
    },
];

const takeaways = [
    "Pre-training is the expensive step: it takes most of the compute, energy and time. Fine-tuning and alignment are comparatively cheap but decide how useful the model feels.",
    "Training compute for frontier models has grown roughly 4 to 5 times a year [4], which is why estimated costs went from $4.3M (GPT-3) to $191M (Gemini Ultra) in three years [1].",
    "Data, compute and model size have to grow together. A larger model trained on too little data wastes compute, which is the idea behind the 'Chinchilla' scaling laws [13].",
    "Labs disclose less every year. Open-weight models like Llama give the clearest numbers, while closed models have to be estimated from outside.",
];

const references = [
    {
        id: 1,
        text: "Maslej, N. et al. (2024). Artificial Intelligence Index Report 2024, Chapter 1. Stanford HAI. Training cost and compute estimates by Epoch AI (GPT-3 $4.3M, Llama 2 70B $3.9M, GPT-4 $78M, Gemini Ultra $191M).",
        url: "https://hai.stanford.edu/assets/files/hai_ai-index-report-2024_chapter1.pdf",
    },
    {
        id: 2,
        text: "Epoch AI. Notable AI Models database (training compute, hardware, hardware quantity, training time). Retrieved Nov 2026.",
        url: "https://epoch.ai/data/ai-models",
    },
    {
        id: 3,
        text: "Epoch AI. How much does it cost to train frontier AI models? Cost breakdown: hardware 47 to 67%, R&D staff 29 to 49%, energy 2 to 6%.",
        url: "https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models",
    },
    {
        id: 4,
        text: "Epoch AI. Training compute of frontier AI models grows by 4-5x per year.",
        url: "https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year",
    },
    {
        id: 5,
        text: "Llama Team, Meta (2024). The Llama 3 Herd of Models. arXiv:2407.21783. (15.6T tokens, 3.8×10^25 FLOPs, up to 16K H100 GPUs at 700 W.)",
        url: "https://arxiv.org/abs/2407.21783",
    },
    {
        id: 6,
        text: "Meta. Llama 3.1 model card: 30.84M GPU-hours for 405B, 8,930 tCO2e location-based emissions.",
        url: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md",
    },
    {
        id: 7,
        text: "Meta. Llama 2 70B model card: 2T tokens, 1,720,320 GPU-hours on A100-80GB at 400 W, 291.42 tCO2eq.",
        url: "https://huggingface.co/meta-llama/Llama-2-70b-hf",
    },
    {
        id: 8,
        text: "Patterson, D. et al. (2021). Carbon Emissions and Large Neural Network Training. arXiv:2104.10350. (GPT-3: 1,287 MWh, 552 tCO2e.)",
        url: "https://arxiv.org/abs/2104.10350",
    },
    {
        id: 9,
        text: "Brown, T. et al. (2020). Language Models are Few-Shot Learners. arXiv:2005.14165. (175B parameters, 300B tokens, V100 GPUs.)",
        url: "https://arxiv.org/abs/2005.14165",
    },
    {
        id: 10,
        text: "Amodei, D. (2025). On DeepSeek and Export Controls. Claude 3.5 Sonnet 'cost a few $10M's to train'.",
        url: "https://darioamodei.com/on-deepseek-and-export-controls",
    },
    {
        id: 11,
        text: "Fortune (2024). AI training costs: how much is too much? Reports Sam Altman put GPT-4's training cost at more than $100 million.",
        url: "https://dc.fortune.com/2024/04/04/ai-training-costs-how-much-is-too-much-openai-gpt-anthropic-microsoft/",
    },
    {
        id: 12,
        text: "U.S. Energy Information Administration. How much electricity does an American home use? (10,791 kWh per year in 2022.)",
        url: "https://www.eia.gov/tools/faqs/faq.php?id=97&t=3",
    },
    {
        id: 13,
        text: "Hoffmann, J. et al. (2022). Training Compute-Optimal Large Language Models (Chinchilla). arXiv:2203.15556.",
        url: "https://arxiv.org/abs/2203.15556",
    },
];

export { pipeline, resources, models, costBreakdown, takeaways, references };
