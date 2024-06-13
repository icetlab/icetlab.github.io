---
layout: page
title: Visualizing Performance of Cloud Applications
description: bringing software performance into the IDE
img: assets/img/performancehat.png
importance: 2
category: cloud engineering
related_publications: true
---

A common challenge in software engineering for the cloud is to understand the performance of applications. Applications are often composed of many services and run on shared infrastructure. Besides the inherent [performance variability of cloud services](/projects/cloudbenchmarking), the performance of applications can be affected by many factors, such as the the network, the application code, and user behavior.

To help developers understand the performance of their applications, and predict performance problems upfront, we have developed an idea dubbed *Feedback-Driven Development (FDD)* {% cite cito:15:2 %}. The idea is to bring performance feedback into the Integrated Development Environment (IDE) of developers. This way, developers can see the performance of their applications while they are developing them, and can take corrective actions before even deploying.

<div class="row">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/performancehat.png" title="feedback-driven development" class="img-fluid z-depth-1" %}
        <div class="caption">
            Conceptual overview of feedback-driven development (FDD)
        </div>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        In FDD, runtime performance data is collected from, for example, application performance monitoring tools such as <a href="https://www.dynatrace.com/monitoring/platform/application-performance-monitoring/">Dynatrace</a>. This data is then attached to elements in the abstract syntax tree (AST) of the application. This allows us to not only visualize runtime data in the IDE, but also reason about the impact of simple code changes or additions.
    </div>
</div>

We developed these ideas further in a proof-of-concept prototype called *PerformanceHat* {% cite cito:15:2 %}. PerformanceHat is a plugin for the Eclipse IDE.

<div>
    {% include figure.liquid loading="eager" path="assets/img/performancehat_tool.png" title="screenshot of PerformanceHat" class="img-fluid z-depth-1" %}
    <div class="caption">
        Screenshots of PerformanceHat in action
    </div>
</div>

<div class="row">
    <div class="col-sm-7 mt-3 mt-md-0">
        In a controlled experiment, we were able to demonstrate that developers using PerformanceHat were able to identify performance problems faster and more accurately than developers without the tool {% cite cito:19 %}.

        Our ideas on feedback-driven development have been picked up by practitioners on multiple occasions. For example, [Adrian Colyer](https://www.crunchbase.com/person/adrian-colyer) has featured our work on his blog [The Morning Paper](https://blog.acolyer.org/2015/11/10/runtime-metric-meets-developer-building-better-cloud-applications-using-feedback/), in addition to appearing in some other talks and [media coverage](http://radar.oreilly.com/2015/11/four-short-links-11-november-2015.html).
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/perfhat_experiment.png" title="results of a controlled experiment evaluating PerformanceHat" class="img-fluid z-depth-1" %}
        <div class="caption">
            Results of a controlled experiment evaluating PerformanceHat
        </div>
    </div>
</div>

**Contacts:**

[Prof. Jürgen Cito](https://informatics.tuwien.ac.at/people/juergen-cito)

[Dr. Philipp Leitner](http://philippleitner.net)

---