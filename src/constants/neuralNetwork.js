// Content for the Neural Network Components artifact (TensorFlow Playground)

const components = [
    {
        name: "Layers",
        color: "#4eb1bc",
        definition:
            "A layer is a group of neurons that process data at the same stage. Every network has an input layer, one or more hidden layers and an output layer.",
        role: "Layers stack to build depth. Early layers pick up simple patterns, and later layers combine them into more complex ones.",
        playground:
            "The 'Hidden layers' control adds or removes whole columns of neurons.",
    },
    {
        name: "Neurons",
        color: "#d5573b",
        definition:
            "A neuron is the basic computing unit. It multiplies each input by a weight, adds the results plus a bias, and passes the sum through an activation function.",
        role: "Each neuron learns to respond to one pattern in its inputs. Many neurons together can represent complicated decision boundaries.",
        playground:
            "Each square in a hidden layer is a neuron. Its thumbnail shows the region of the data it responds to.",
    },
    {
        name: "Weights",
        color: "#e0a458",
        definition:
            "A weight is a number on the connection between two neurons. It sets how strongly one neuron's output influences the next.",
        role: "Weights (and biases) are what the network learns. Training is the process of adjusting them to reduce the error.",
        playground:
            "Lines between neurons are weights. Blue is positive, orange is negative, and a thicker line means a larger magnitude.",
    },
    {
        name: "Activation Functions",
        color: "#8fb573",
        definition:
            "An activation function is applied to a neuron's weighted sum. Common choices are ReLU, Tanh, Sigmoid and Linear.",
        role: "They add non-linearity. Without them, any number of layers collapses into one linear model that cannot fit curved boundaries.",
        playground:
            "The 'Activation' dropdown switches the function for all hidden neurons.",
    },
    {
        name: "Loss Functions",
        color: "#c78bd6",
        definition:
            "A loss function measures how far the network's predictions are from the true answers, giving one number for the error.",
        role: "It is the score training tries to lower. Classification typically uses cross-entropy and regression uses mean squared error.",
        playground:
            "'Training loss' and 'Test loss' are shown in the Output panel. A big gap between them signals overfitting.",
    },
    {
        name: "Optimization Algorithms",
        color: "#f0ebe6",
        definition:
            "An optimizer decides how to update the weights using the gradients of the loss. Gradient descent, SGD, Momentum and Adam are common examples.",
        role: "It controls how fast and how reliably the network moves toward low loss. Too large a step overshoots, too small is slow.",
        playground:
            "The playground uses stochastic gradient descent. 'Learning rate' sets the step size and 'Batch size' sets how many samples feed each update.",
    },
];

// Architecture diagram: columns of neurons, left to right
const architecture = [
    { label: "Input layer", sub: "Features (x1, x2)", count: 2, color: "#4eb1bc" },
    { label: "Hidden layer 1", sub: "4 neurons", count: 4, color: "#d5573b" },
    { label: "Hidden layer 2", sub: "3 neurons", count: 3, color: "#d5573b" },
    { label: "Output layer", sub: "Prediction", count: 1, color: "#8fb573" },
];

// The training loop, shown as a flowchart under the architecture diagram
const trainingLoop = [
    {
        step: "Forward pass",
        text: "Inputs flow through the layers. Each neuron applies weights, then its activation function.",
    },
    {
        step: "Compute loss",
        text: "The loss function compares the output to the true label and gives an error score.",
    },
    {
        step: "Backpropagation",
        text: "The error is passed backward to work out how much each weight contributed to it.",
    },
    {
        step: "Update weights",
        text: "The optimizer nudges every weight by learning rate times gradient. Then the loop repeats.",
    },
];

const insights = [
    "Seeing the weights change colour and thickness made it clear that learning is just adjusting numbers, not magic.",
    "Adding a hidden layer or neuron only helps on harder shapes (like the spiral). Simple data does not need a big network.",
    "Switching activation to Linear showed why non-linearity matters: the network could only draw straight boundaries.",
    "Watching training and test loss together exposes overfitting. Regularization and more data narrow the gap.",
    "The learning rate has a visible sweet spot. Too high makes the loss bounce around and too low barely moves it.",
];

export { components, architecture, trainingLoop, insights };
