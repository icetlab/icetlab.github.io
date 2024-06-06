---
layout: page
title: research
permalink: /research/
description: important ICET-lab research projects, present and past
nav: true
nav_order: 3
display_categories: [performance, bots, cloud engineering, work]
horizontal: true
---

<div class="row">
  <div class="col-md-8">
    <p>
      The core research interest of ICET-lab is in software engineering for distributed, Web, and cloud-based systems, as well as (increasingly) in measuring and improving software performance. The overarching goal of the team is to understand how developers use emerging Internet technology, and to support the community in using these technologies effectively.
    </p>
    <p>
      Many of our studies have an empirical slant (e.g., we crawl open source repositories, send out surveys, or conduct interviews), but we also frequently conduct experimental research (e.g., controlled lab experiments, field studies, or performance evaluations). We are also keen on building proof-of-concepts and tools. We are commited to open and reproducible science, as well as to transferring our results to industry and society as a whole. As part of this, we often speak about our work at academic and industrial conferences.
    </p>
    <p>
      Virtually all our papers are available freely via the <a href="https://avandeursen.com/2016/11/06/green-open-access-faq/">green open access</a> model. If you cannot find a specific paper you are always free to email the authors, we will happily provide a (text-identical) preprint version.
    </p>
    <p>
      ICET-lab is currently mostly funded through grants from the <a href="http://vr.se/">Swedish Research Council (VR)</a> and the <a href="http://wasp-sweden.org/">Wallenberg AI, Autonomous Systems, and Software Programme (WASP)</a>. Historically, we have also received significant financial support from Sweden’s innovation agency Vinnova, the Swiss National Science Foundation (SNF), and the ICT Area of Advance at Chalmers, as well as the EU Horizon 2020 research programme.
    </p>
    <p>
      Here we briefly present some of our current research themes, as well as key papers for each theme. Please see <a href="https://icetlab.github.io/icetlab/publications/">here</a> for a complete publication list of the lab.
    </p>
  </div>

  <div class="col-md-4">
      <div class="row justify-content-sm-center">
        <div class="col-sm-8 mt-3 mt-md-0">
            {% include figure.liquid path="assets/img/ICET-Lab-LOGO-A2" title="Logo ICET-lab" class="img-fluid border-0" %}
        </div>  
      </div>
      <div class="row justify-content-sm-center">
        <div class="col-sm-6 mt-3 mt-md-0">
            {% include figure.liquid path="assets/img/chalmers.png" title="Logo Chalmers" class="img-fluid border-0 d-flex align-items-center" %}
        </div>
        <div class="col-sm-6 mt-3 mt-md-0">
            {% include figure.liquid path="assets/img/gu.png" title="Logo GU" class="img-fluid border-0 d-flex align-items-center" %}
        </div>
      </div>
      <div class="row justify-content-sm-center">
        <div class="col-sm-8 mt-3 mt-md-0">
          {% include figure.liquid path="assets/img/wasp.jpg" title="Logo WASP" class="img-fluid border-0 d-flex align-items-center" %}
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
          {% include figure.liquid path="assets/img/vr.jpg" title="Logo VR" class="img-fluid border-0 d-flex align-items-center" %}
        </div>
      </div>
    </div>
</div>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
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