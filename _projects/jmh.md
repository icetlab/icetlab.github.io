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

<div class="row">
    <div class="col-sm-7 mt-3 mt-md-0 align-items-center">
        <p>One of the reasons for this is that actually <i>testing</i> performance is much harder than testing functional correctness, and hence much more rarely done.</p>

        <p>For the last 10 years, ICET-lab has studied how Java developers can use the <a href="https://openjdk.org/projects/code-tools/jmh/">Java Microbenchmark Harness</a> (JMH) to continuously benchmark their system, for example as part of their CI pipeline.</p>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0 align-items-center">
        {% include figure.liquid loading="eager" path="assets/img/jmhexample.png" title="a JMH benchmark" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            A JMH benchmark example from the <a href="https://protobuf.dev">Protobuf</a> project
        </div>
    </div>
</div>

Concrete research results include detecting anti-patterns in JMH benchmarks which can lead to misleading measurement results {% cite costa:19 %}, demonstrating that statistical methods can be used to significantly reduce required benchmark repetitions {% cite laaber:20 %}, or experiments with coverage-based benchmark selection {% cite laaber:21 %}.

In this line of research, we have also developed multiple open source tools that can support benchmarking research and practice, including [Junit-to-JMH](https://github.com/alniniclas/junit-to-jmh), a tool to generate performance benchmark suites from unit tests {% cite jangali:22 %}, and [Bencher](https://github.com/chrstphlbr/bencher), a tool to analyse static and dynamic coverage of JMH benchmarks.

<div class="row">
    <div class="col-sm-7 mt-3 mt-md-0 align-items-center">
        {% include figure.liquid loading="eager" path="assets/img/badpracticeimpact.png" title="impact of bad JMH practices on benchmark results" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            The impact of bad JMH practices on benchmark results
        </div>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0 align-items-center">
        {% include figure.liquid loading="eager" path="assets/img/dynamicreconfig.png" title="dynamically reconfiguring JMH benchmarks" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Dynamically reconfiguring JMH to reduce benchmark execution time
        </div>
    </div>
</div>

In our ongoing work in this research theme, we are particularly interested in:

* How to _bootstrap_ performance testing in a project by generating (initial) performance test suites. [Junit-to-JMH](https://github.com/alniniclas/junit-to-jmh) {% cite jangali:22 %} is a first stab into this direction.

* How to _predict_ the execution time of benchmarks (and, hence, performance) prior to execution. We have already achieved initial success predicting the execution time of small pieces of code using graph-based neural networks {% cite samoaa:22:1 %}. The ultimate vision, of course, is to be able to warn developers _before_ committing slow code, without the need for expensive performance testing.

* How to make performance testing _easier_, through performance assessment bots {% cite markusse:22 %} or good visualizations {% cite cito:19%}.

**Contacts:**

[Dr. Christoph Laaber](https://laaber.net) (probably the world's foremost expert on academic research about JMH benchmarking)

[Dr. Philipp Leitner](http://philippleitner.net)

---