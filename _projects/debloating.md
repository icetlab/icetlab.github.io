---
layout: page
title: Debloating ML Systems
description: measuring and reducing code bloat in AI platforms
img: assets/img/mlbloat.png
importance: 3
category: performance engineering
related_publications: true
---

*Active since 2023.*

<div class="row">
    <div class="col-sm-7 mt-3 mt-md-0">
        <p>Today's machine learning systems are growing wildly in size every year. Of course, most of this code is not actually required for the intended use cases of the system - it is <i>bloat</i>. This code bloat can have a significant impact on the performance of ML systems, as it can increase the memory footprint, the startup time, and the energy consumption of the system - and, of course, the larger the code base, the larger the attack surface for security vulnerabilities.</p>
        <p>In our research, we study the existence of code bloat in machine learning systems, and how it can be measured and reduced {% cite zhang:24 %}. We find that most machine learning containers in most use cases exhibit 50% or more bloat.</p>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mlbloat.png" title="growth of machine learning systems" class="img-fluid z-depth-1" %}
        <div class="caption">
            Example growth of a real-life machine learning system
        </div>
    </div>
</div>

In collaboration with the [Computer and Network Systems research unit](https://www.chalmers.se/en/departments/cse/our-research/computer-and-network-systems/) at Chalmers, we built BLAFS, a bloat-aware container filesystem that removes unused files at runtime while guaranteeing the debloated container still works correctly {% cite zhang:25 %}. Accessed files move into a debloating layer as the container runs, and, similar to garbage collection, files that are never accessed get removed. An optional reloading layer fetches anything mistakenly removed from a remote cache on demand.

Across the top 20 most-downloaded Docker Hub containers, four ML containers, and a 10-function serverless benchmark suite, BLAFS reduces container image sizes by up to 95% and cold starts by up to 68%. In a security-hardened mode it removes up to 89% of known CVEs, where the two state-of-the-art debloating tools we compared against, including [docker-slim](https://hub.docker.com/r/dslim/docker-slim), largely fail on the same workloads.

**Contacts:**

[Dr. Ahmed Ali-Eldin Hassan](https://www.chalmers.se/en/persons/ahmhass/), CNS unit, Chalmers

[Dr. Philipp Leitner](http://philippleitner.net)

---
