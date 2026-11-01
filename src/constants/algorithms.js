const types = {
    Supervised: {
        color: "#4eb1bc",
        blurb: "Learns from labelled examples: every input comes with the right answer.",
    },
    Unsupervised: {
        color: "#d5573b",
        blurb: "Finds structure in unlabelled data with no answers provided.",
    },
};

const domains = {
    Tabular: { color: "#e0b84f", blurb: "Rows and columns: sales, finance, sensors" },
    "Computer Vision": { color: "#7fc8a9", blurb: "Images and video" },
    NLP: { color: "#8fa8e8", blurb: "Text and speech" },
    "Generative AI": { color: "#d98ad1", blurb: "Creating new text, images, audio" },
};

// interpretability / dataHunger are 1 (low) to 5 (high) qualitative ratings
const algorithms = [
    {
        name: "Linear Regression",
        family: "Linear Models",
        type: "Supervised",
        domains: ["Tabular"],
        explanation:
            "Fits a straight line (or plane) through the data by minimising the squared distance between predictions and real values, then uses that line to predict a number.",
        uses: ["House price prediction", "Sales forecasting"],
        interpretability: 5,
        dataHunger: 1,
    },
    {
        name: "Decision Trees",
        family: "Tree-Based Models",
        type: "Supervised",
        domains: ["Tabular"],
        explanation:
            "Asks a chain of yes/no questions about the features (for example, 'is income above 50k?'), splitting the data at each step until each branch ends in a prediction.",
        uses: ["Loan approval rules", "Customer support triage", "Medical diagnosis flowcharts"],
        interpretability: 5,
        dataHunger: 1,
    },
    {
        name: "Random Forests",
        family: "Tree-Based Models",
        type: "Supervised",
        domains: ["Tabular"],
        explanation:
            "Trains hundreds of decision trees on random slices of the data and features, then averages their votes. Many noisy trees cancel each other's mistakes.",
        uses: ["Loan approval", "Fraud detection", "Medical diagnosis support"],
        interpretability: 3,
        dataHunger: 2,
    },
    {
        name: "Support Vector Machine",
        family: "Margin-Based",
        type: "Supervised",
        domains: ["Tabular", "NLP", "Computer Vision"],
        explanation:
            "Draws the boundary that separates classes with the widest possible margin. Kernels let it bend that boundary to fit non-linear patterns.",
        uses: ["Text categorisation", "Face detection", "Gene classification"],
        interpretability: 2,
        dataHunger: 2,
    },
    {
        name: "Convolutional Neural Network",
        family: "Deep Neural Networks",
        type: "Supervised",
        domains: ["Computer Vision"],
        explanation:
            "Slides small learnable filters across an image to detect edges, then shapes, then whole objects, stacking layers to build up from pixels to meaning.",
        uses: ["Tumour detection in X-rays", "Self-driving perception", "Face unlock"],
        interpretability: 1,
        dataHunger: 5,
    },
    {
        name: "Transformers (GPT, BERT)",
        family: "Deep Neural Networks",
        type: "Supervised",
        note: "Pre-trained with self-supervision (GPT predicts the next word, BERT fills in masked words), then fine-tuned with labels",
        domains: ["NLP", "Generative AI"],
        explanation:
            "Uses self-attention to let every word weigh how relevant every other word is, so it captures context across a whole passage in parallel.",
        uses: ["GPT: chatbots and text generation", "BERT: search ranking and question answering", "Machine translation"],
        interpretability: 1,
        dataHunger: 5,
    },
    {
        name: "K-Means Clustering",
        family: "Clustering",
        type: "Unsupervised",
        domains: ["Tabular", "Computer Vision"],
        explanation:
            "Picks k centre points, assigns every data point to its nearest centre, moves each centre to the middle of its group, and repeats until stable.",
        uses: ["Customer segmentation", "Image colour compression"],
        interpretability: 4,
        dataHunger: 1,
    },
    {
        name: "Principal Component Analysis",
        family: "Dimensionality Reduction",
        type: "Unsupervised",
        domains: ["Tabular", "Computer Vision"],
        explanation:
            "Rotates the data onto new axes ordered by how much variation they capture, so you can keep the few axes that matter and drop the rest.",
        uses: ["Compressing sensor data", "Face recognition (eigenfaces)", "Visualising high-dimensional data"],
        interpretability: 3,
        dataHunger: 1,
    },
    {
        name: "Diffusion Models (Stable Diffusion)",
        family: "Generative Models",
        type: "Unsupervised",
        note: "Learns by removing noise from images, with no human labels needed (text prompts only guide generation)",
        domains: ["Generative AI", "Computer Vision"],
        explanation:
            "Trains by gradually adding noise to images, then learns to reverse the process. To create a picture it starts from pure noise and removes it step by step, steered by a text prompt.",
        uses: ["Text-to-image art (Stable Diffusion)", "Image editing and inpainting", "Product mockups"],
        interpretability: 1,
        dataHunger: 5,
    },
];

export { algorithms, types, domains };
