---
layout: page
title: LLMs in Software Engineering Practice
description: how do software engineers actually use LLMs, and what do organisations do about it?
img: assets/img/chatgpt.png
importance: 1
category: AI-assisted development
related_publications: true
---

*Active since 2023.*

With LLMs now performing a large share of everyday software engineering activities, organisations
have moved quickly to integrate them into their internal processes. What is far less clear is what
engineers actually do with these tools, how much the way they are prompted matters, and what
happens at the organisational level once the tools are in use.

ICET-lab studies three connected aspects:

* The *usage* of LLMs and LLM chatbots in software engineering practice.
* The *design* of prompts and assistants for tasks across the software development lifecycle.
* The *policies* organisations build around them.

### How engineers use them

Our observational study of 24 professional engineers using ChatGPT over a week in their own jobs
{% cite khojah:24 %} found that practitioners rarely expect ready-to-use artifacts.
They far more often ask for guidance on how to approach a task, or for an explanation of a topic in
more abstract terms. From a categorisation of their dialogues, we derive three purposes for starting
a conversation with an assistant: to manipulate software artifacts, to get guidance on solving a
problem, and to get training on a skill or concept.

<div class="row align-items-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        <p>The purpose of the interaction, together with internal factors (how the engineer prompts) and external factors (the organisation and its policy), shapes the engineer's experience in terms of perceived productivity and trust.</p>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/chatgpt.png" title="Framework of ChatGPT usage in SE" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Framework of ChatGPT usage in software engineering industry.
        </div>
    </div>
</div>

### How much prompting actually matters

The internal factors turned out to be worth a study of their own. CodePromptEval
{% cite khojah:25 %} is a dataset of 7,072 prompts covering five prompt techniques —
few-shot examples, persona, chain-of-thought, function signature, and list of packages — and every
combination of them, evaluated across three LLMs on 221 function-level generation tasks.

<div class="row">
    <div class="col-sm-8 offset-sm-2">
        {% include figure.liquid loading="eager" path="assets/img/promptprogramming.png" title="pass@1 by prompt technique" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Pass@1 for all 32 combinations of prompt techniques, exemplified for GPT-4o. The gap between the best and worst combination is roughly ten percentage points.
        </div>
    </div>
</div>

The headline result is a deflationary one. Providing the function signature matters; most of the
techniques that dominate practitioner advice do not add much on top of it, and some combinations
make things worse. The difference between the best and the worst combination of techniques is about
ten percentage points, meaning prompt programming has a noticeable effect on roughly one generation
task in ten. Correctness is also not the whole story — we find that techniques that help correctness
do not necessarily help the similarity or the quality of the resulting code.

### What organisations do about it

Adoption is not only a technical question. We interviewed managers at 11 software organisations
across four countries in Europe and Asia about how they write LLM policy, and what drives it
{% cite khojah:26 %}. The concerns that shape these policies — ownership and
quality of generated content, accountability, and the risk of sensitive data leaving the
organisation through an external API — are largely not the ones the research literature focuses on.

In our ongoing work in this theme, we are studying how context provided in a prompt affects the
quality of generated artifacts, and how the picture above changes as engineers move from chat
interfaces to autonomous coding agents.

**Contacts:**

[Ranim Khojah](https://ranimkhojah.com)

[Dr. Larissa Salerno](https://www.lsalerno.com/)

Dr. Francisco Gomes de Oliveira Neto

[Dr. Philipp Leitner](http://philippleitner.net)
