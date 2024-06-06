---
layout: page
title: Software Performance Benchmarking with JMH
description: measuring, predicting, and optimizing software performance in Java using JMH
img: assets/img/jmh.png
importance: 1
category: performance
related_publications: true
---

Performance is one of the most central non-functional properties of modern software. And yet we all experience the applications we use on a daily basis to continuously become slower, less reliable, and more bloated.

One of the reasons for this is that actually *testing* performance is much harder than testing functional correctness, and hence much more rarely done.

<div class="row">
    <div class="col-sm-9 mt-3 mt-md-0">
        For the last 10 years, ICET-lab has studied how Java developers can use the [Java Microbenchmark Harness (JMH)](https://openjdk.org/projects/code-tools/jmh/) to continuously benchmark their system, for example as part of their CI pipeline,
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="caption">
        A JMH benchmark in Java
    </div>
</div>

Concrete research results include detecting anti-patterns in JMH benchmarks which can lead to misleading measurement results {% cite costa:19 %}, demonstrating that statistical methods can be used to significantly reduce required benchmark repetitions {% cite laaber:20 %}, or experiments with coverage-based benchmark selection {% cite laaber:21 %}.

In this line of research, we have also developed multiple open source tools that can support benchmarking research and practice, including [Junit-to-JMH](https://github.com/alniniclas/junit-to-jmh), a tool to generate performance benchmark suites from unit tests {% cite jangali:22 %}, and [Bencher](https://github.com/chrstphlbr/bencher), a tool to analyse static and dynamic coverage of JMH benchmarks.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Selected JMH research results
</div>


In our ongoing work in this research theme, we are particularly interested in:

* How to _bootstrap_ performance testing in a project by generating (initial) performance test suites. [Junit-to-JMH](https://github.com/alniniclas/junit-to-jmh) {% cite jangali:22 %} is a first stab into this direction.

* How to _predict_ the execution time of benchmarks (and, hence, performance) prior to execution. We have already achieved initial success predicting the execution time of small pieces of code using graph-based neural networks {% cite samoaa:22:1 %}. The ultimate vision, of course, is to be able to warn developers _before_ committing slow code, without the need for expensive performance testing.

* How to make performance testing _easier_, through performance assessment bots {% cite markusse:22 %} or good visualizations {% cite cito:19%}.
