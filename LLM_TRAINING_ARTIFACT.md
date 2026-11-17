# Artifact 3: How a Large Language Model Is Trained

Page: `/#/artifactThree` ([LLMTrainingScreen.jsx](src/pages/LLMTrainingScreen.jsx)). Data and references: [llmTraining.js](src/constants/llmTraining.js).

## Main points

1. **Seven-stage pipeline.** Data collection, cleaning and tokenization, pre-training, fine-tuning, alignment (RLHF), evaluation and safety, deployment.
2. **Pre-training dominates.** It takes most of the compute, energy and time. Fine-tuning and alignment are comparatively cheap, but they decide how useful the model feels. Deployment is a cost that never stops, because every query uses compute.
3. **Four resources drive capability and cost.** For data, GPT-3 saw about 300B tokens, while Llama 3.1 saw 15.6T, about 50 times more. For compute, Llama 3.1 405B trained on up to 16K H100 GPUs, and Epoch AI estimates GPT-4 used about 25,000 A100s. For energy, GPT-3 used 1,287 MWh, and Llama 3.1 405B's GPUs alone used about 22 GWh, roughly what 2,000 US homes use in a year. For time, Llama 3.1 405B took about 78 days, and Epoch AI estimates GPT-4 at about 95 days.

4. **Costs have grown fast.** Estimated training compute cost went from $4.3M (GPT-3, 2020) to $78M (GPT-4) and $191M (Gemini Ultra) in 2023. Frontier training compute has grown about 4 to 5× per year.
5. **Where the money goes.** Roughly 57% chips and servers, 39% research staff, 4% energy (midpoints of Epoch AI's ranges).
6. **Open models disclose the most.** Llama publishes GPU-hours, hardware and emissions. GPT-4, Gemini and Claude have to be estimated from outside.

## Key considerations

- **Accuracy over completeness.** Every figure was checked against a primary source or a named dataset. Undisclosed values show "Not published" or "Undisclosed", not a guess.
- **Estimates vs. disclosures.** Closed-model figures (GPT-4, Gemini Ultra, Claude) come from Epoch AI and the Stanford AI Index. Some, such as Claude's compute, are labeled speculative by Epoch.
- **Calculated values are labeled.** Llama energy (GPU-hours × power), Llama 3.1's ~78 days, and its ~$62M at an assumed $2 per GPU-hour are my arithmetic, not published numbers.
- **Scope of the numbers.** Costs cover the final training run only, not failed runs, research experiments or inference. Llama energy counts GPUs only, not cooling or networking.
- **Weakest source.** Reference [11] (Fortune, for Altman's "$100M+" remark) was only seen as a search snippet. Check it before relying on it.
- **Corrections made along the way.** Llama 2 70B cost is $3.9M (not $3M). The 54-day figure for Llama 3.1 was a measurement window, not the run length. The cost split was updated to Epoch's actual ranges.

## Design rationale

- **Fits the portfolio.** Same layout, teal palette, card style and Tailwind classes as Artifacts 1 and 2, so it reads as part of one site. It is registered in `App.jsx` and listed on the Artifacts page.
- **Story first, then data.** Sections move from process (pipeline), to inputs (resources), to scale (charts), to evidence (model case files), to conclusions (takeaways), to references. A newcomer can stop after any section and still have the idea.
- **Interactive pipeline.** Clicking a stage shows a Low/Medium/High meter for data, compute, energy and time. This shows which stage uses which resource, which a static diagram can't do as clearly.
- **Consistent resource colors.** Data is teal, compute orange, energy amber, time purple. These colors are reused in the cards and the load meters so each resource is recognizable.
- **Honest chart choices.**
  - Compute is on a **log scale**, because values span two orders of magnitude and linear bars would hide the smaller models.
  - Cost is on a **linear scale**, which shows how much larger the frontier models are.
  - Models with no published value say "Not published" instead of showing a zero or an invented bar.
- **Accessibility.** Charts have `aria-label`s, the pipeline stages are real buttons with `aria-pressed`, load levels are written as words as well as bars, and the layout stacks on mobile.
- **Plain language.** Each resource card gives a headline number, a concrete example and a "Why it matters" line. This keeps it readable for non-technical audiences.
- **Data separated from layout.** All figures and references live in `llmTraining.js`. Updating a number or adding a model doesn't touch the page code.
- **Traceable claims.** Bracketed numbers like [1] on the page link to a numbered References list with URLs.

## References

The full list of 13 sources (Stanford AI Index 2024, Epoch AI, Meta's Llama papers and model cards, Patterson et al. 2021, Brown et al. 2020, Amodei 2025, EIA, Hoffmann et al. 2022) is at the bottom of the page and in `llmTraining.js`.
