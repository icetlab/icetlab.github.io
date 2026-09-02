---
layout: page
title: Faster Code from AI?
description: can LLMs and agents make real software faster, and how would we know?
img: assets/img/aioptimization.png
importance: 2
category: performance engineering
related_publications: true
---

*Active since 2024.*

Functional correctness got a cheap verifier. Efficiency did not.

Unit tests are fast, binary, and trustworthy enough to run inside a training loop or inside an
agent's inner loop, which is why the correctness of LLM-generated code has improved so quickly.
Performance has no equivalent. Benchmarks are slow, statistically fragile, expensive to run, and
frequently do not even exercise the code path whose cost changed. As a result there is essentially
no reward signal for execution cost anywhere in the stack: not in training, not in agent
scaffolding, and not in the CI pipelines of most projects.

We think this makes the efficiency gap in machine-generated code structural rather than a
temporary artifact of model scale, and that it will not close on its own.

Our first study in this theme asks the direct question: can LLMs optimize *real* software?
{% cite yi:25 %} mines 65 optimization tasks from performance-critical open-source Java
projects and validates every proposed patch against developer-written JMH benchmarks, comparing
against the improvement the human developer actually achieved. The answer is more interesting than
either camp expects.

<div class="row">
    <div class="col-sm-8 offset-sm-2">
        {% include figure.liquid loading="eager" path="assets/img/aioptimization.png" title="distribution of speedup scores" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Distribution of speedup scores for LLM-generated patches, by prompting strategy and by model. The red line is the original code. The blue line is the median developer solution.
        </div>
    </div>
</div>

Models solve a surprisingly large share of these genuinely hard engineering tasks, and most of their
patches do make the code faster. But the spread is enormous, and on average they remain behind the
human developers whose commits we compare against, across every model and prompting strategy we
tried. The problem is not that AI writes slow code. It is that AI writes *unpredictable* code, which
for a production system is often the worse property.

<div class="row">
    <div class="col-sm-8 offset-sm-2">
        {% include figure.liquid loading="eager" path="assets/img/aieffectsize.png" title="effect sizes" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Effect sizes against the original code (circles) and against the developer's own patch (triangles). Every configuration beats the original. None beats the developer.
        </div>
    </div>
</div>

Two limitations explain most of the gap. Models struggle to locate the hotspot on their own, and even
when we hand them the problem description they often fail to synthesize the algorithmic change that
the human found. Telling the model *what* to optimize helps considerably more than showing it the
benchmark code.

We also find that the popular algorithmic-puzzle benchmarks give a substantially more optimistic
picture of LLM optimization ability than real production code does, which matters because most of
what the field currently believes about machine efficiency rests on those benchmarks.

In our ongoing work in this theme, we are particularly interested in:

-   **Execution-cost oracles.** Can a performance signal be made fast, cheap, and trustworthy enough
    to sit inside a generation loop? This continues our work on predicting execution time without
    executing {% cite samoaa:22:1 %} and on making benchmark suites dramatically
    cheaper to run {% cite laaber:20 %}. An oracle that cannot say "I don't know" is
    worse than no oracle at all, so quantifying its uncertainty is part of the problem.

-   **Whether the instruments can be trusted.** Recent audits of the standard efficiency benchmarks
    suggest that a substantial share of their reference solutions are not actually faster than the
    code they replace. Validating a cost oracle is itself a research contribution.

-   **Avoidance rather than optimization.** Every benchmark in this space poses the same task: here
    is slow code, make it fast. Almost nobody asks the industrial question: an agent makes fifty
    commits to a repository over three months. Does the system get slower? That is harder, because
    there is no identified hotspot and no reference patch, and the effects are diffuse and
    cumulative.

**Contacts:**

[Lirong Esme Yi](https://www.icet-lab.eu/people/)

[Prof. Philipp Leitner](http://philippleitner.net)
