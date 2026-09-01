---
layout: page
title: research
permalink: /research/
description: important ICET-lab research projects, present and past
nav: false
nav_order: 3
display_categories: [performance engineering, machine-speed performance, AI-assisted development, cloud and distributed systems]
horizontal: true
category_descriptions:
  performance engineering: >
    Measuring software performance so that the result can be trusted — microbenchmarking,
    regression detection in CI, and cutting the cost of performance testing.
    <em>Philipp Leitner.</em>
  machine-speed performance: >
    What happens to efficiency when code is written by machines, and what a performance signal
    would have to look like to sit inside a generation loop.
    <em>Lirong Esme Yi, Philipp Leitner.</em>
  AI-assisted development: >
    How software engineers actually work with LLMs, agents, and bots — usage, prompting, review,
    and the organisational policies that grow around them.
    <em>Ranim Khojah, Larissa Salerno, Linda Erlenhov, Francisco Gomes de Oliveira Neto.</em>
  cloud and distributed systems: >
    The lab's foundational thread: performance and engineering practice for cloud, serverless,
    and service-based systems. Less central than it was, but not closed.
    <em>Philipp Leitner.</em>
---

<div class="row">
  <div class="col-md-8 justify-content-sm-center">
    <p>
      ICET-lab studies how software systems are built, and how well they run. Our two core interests are <strong>software performance engineering</strong> — measuring, predicting, and improving the performance of software from individual methods up to cloud deployments — and <strong>AI-assisted software engineering</strong>, meaning both how developers actually work with LLMs and coding agents, and what happens to a system when much of its code is machine-authored.
    </p>
    <p>
      Increasingly these are one question. Code is now produced at machine speed, but the feedback loops that are supposed to keep it correct, fast, and maintainable were designed for humans. Functional correctness has a cheap and trustworthy verifier in the form of unit tests. Efficiency does not, and so it is not rewarded anywhere in the stack. Much of our current work is about closing that gap.
    </p>
    <p>
      Many of our studies have an empirical slant (e.g., we crawl open source repositories, send out surveys, or conduct interviews), but we also frequently conduct experimental research (e.g., controlled lab experiments, field studies, or performance evaluations). We are also keen on building proof-of-concepts and tools. We are commited to open and reproducible science, as well as to transferring our results to industry and society as a whole. As part of this, we often speak about our work at academic and industrial conferences.
    </p>
    <p>
      Virtually all our papers are available freely via the <a href="https://avandeursen.com/2016/11/06/green-open-access-faq/">green open access</a> model. If you cannot find a specific paper you are always free to email the authors, we will happily provide a (text-identical) preprint version.
    </p>
  </div>
  <div class="col-md-4 d-none d-md-block">
      <div class="row justify-content-sm-center">
        <div class="col-sm-8 mt-3 mt-md-0">
            {% include figure.liquid path="assets/img/ICET-Lab-LOGO-A2.png" title="Logo ICET-lab" class="img-fluid border-0" %}
        </div>  
      </div>
      <div class="row align-items-center">
        <div class="col-sm-6 mt-3 mt-md-0">
            {% include figure.liquid path="assets/img/chalmers.png" title="Logo Chalmers" class="img-fluid border-0 d-flex align-items-center" %}
        </div>
        <div class="col-sm-6 mt-3 mt-md-0">
            {% include figure.liquid path="assets/img/gu.png" title="Logo GU" class="img-fluid border-0 d-flex align-items-center" %}
        </div>
      </div>
    </div>
</div>

<hr />

<div class="row">
  <div class="col-md-8 justify-content-sm-center">
    <p>
      ICET-lab is currently mostly funded through grants from the <a href="http://vr.se/">Swedish Research Council (VR)</a> and the <a href="http://wasp-sweden.org/">Wallenberg AI, Autonomous Systems, and Software Programme (WASP)</a>. Historically, we have also received significant financial support from Sweden’s innovation agency Vinnova, the Swiss National Science Foundation (SNF), and the ICT Area of Advance at Chalmers, as well as the EU Horizon 2020 research programme.
    </p>
  </div>
  <div class="col-md-4 d-none d-md-block">
    <div class="row">
        <div class="col-sm-12 mt-3 mt-md-0">
          {% include figure.liquid path="assets/img/wasp.jpg" title="Logo WASP" class="img-fluid border-0 d-flex align-items-center" %}
        </div>
    </div>
    <div class="row justify-content-sm-center">
        <div class="col-sm-6 mt-3 mt-md-0">
          {% include figure.liquid path="assets/img/vr.jpg" title="Logo VR" class="img-fluid border-0 d-flex align-items-center" %}
        </div>
      </div>
  </div>
</div>

<hr />

<h3> Research Themes </h3>
<p>
  Here we briefly present some of our current research themes, as well as key papers for each theme. Please see <a href="https://www.icet-lab.eu/publications/">here</a> for a complete publication list of the lab.
</p>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign blurb = page.category_descriptions[category] %}
  {% if blurb %}<p class="category-description">{{ blurb }}</p>{% endif %}
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% endif %}
</div>

<hr />

### Past Themes

Research lines that have run their course. The work stands; we are simply not adding to it.

**[Migrating to Microservices](/projects/microservicemigration/)** (2019–2024) — a grounded-theory
and survey line on how organisations actually move from monoliths to microservices, covering the
decision-making, the migration journey itself, and the competences it demands of engineers. Concluded
with [Hamdy Michael Ayas et al. (2024)](https://doi.org/10.1016/j.jss.2024.112055) in the Journal of
Systems and Software.

**Serverless performance benchmarking** (2019–2026) — fine-grained, cross-provider benchmarking of
FaaS platforms, function triggers, and orchestrated serverless applications (CrossFit, TriggerBench).
See the [publication list](/publications/) for the full set.