---
layout: page
permalink: /research/
title: research 
description: ICET-lab research projects, present and past
nav: true
nav_order: 3

themes:
  - align: right
    publications: performance
    content: theme_performance.md
    title: Performance Analysis
---

<div class="row">
  <div class="col-md-8">
The core research interest of ICET-lab is in software engineering for distributed, Web, and cloud-based systems, as well as (increasingly) in measuring and improving software performance. The overarching goal of the team is to understand how developers use emerging Internet technology, and to support the community in using these technologies effectively.

Many of our studies have an empirical slant (e.g., we crawl open source repositories, send out surveys, or conduct interviews), but we also frequently conduct experimental research (e.g., controlled lab experiments, field studies, or performance evaluations). We are also keen on building proof-of-concepts and tools. We are commited to open and reproducible science, as well as to transferring our results to industry and society as a whole. As part of this, we often speak about our work at academic and industrial conferences.

Virtually all our papers are available freely via the <a href="https://avandeursen.com/2016/11/06/green-open-access-faq/">green open access</a> model. If you cannot find a specific paper you are always free to email the authors, we will happily provide a (text-identical) preprint version.

ICET-lab is currently mostly funded through grants from the <a href="http://vr.se/">Swedish Research Council (VR)</a> and the <a href="http://wasp-sweden.org/">Wallenberg AI, Autonomous Systems, and Software Programme (WASP)</a>. Historically, we have also received significant financial support from Sweden’s innovation agency Vinnova, the Swiss National Science Foundation (SNF), and the ICT Area of Advance at Chalmers, as well as the EU Horizon 2020 research programme.

In the following, we briefly present some of our current research themes, as well as key papers for each theme. Please see <a href="https://icetlab.github.io/icetlab/publications/">here</a> for a complete publication list of the lab.
</div>

<div class="col-md-4">
<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/chalmers.png" title="Logo Chalmers" class="img-fluid z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/gu.png" title="Logo GU" class="img-fluid z-depth-1" %}
  </div>
</div>
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/wasp.jpg" title="Logo WASP" class="img-fluid z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/vr.jpg" title="Logo VR" class="img-fluid z-depth-1" %}
    </div>
</div>
</div>

---

<div class="row">
  <div class="col-md-6">
    <b>Performance Analysis</b>
    Under construction.
  </div>
  <div class="col-md-6">
    <div class="publications">
        {% bibliography --group_by none --query @*[theme=performance]* %}
    </div>
  </div>
</div>

---

<div class="row">
  <div class="col-md-6">
    <b>Performance Analysis</b>
    Under construction.
  </div>
  <div class="col-md-6">
    <div class="publications">
        {% bibliography --group_by none --query @*[theme=performance]* %}
    </div>
  </div>
</div>