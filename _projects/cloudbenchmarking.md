---
layout: page
title: Cloud Benchmarking
description: measuring the performance of cloud systems
img: assets/img/cloudbenchmark.png
importance: 2
category: performance
related_publications: true
---

<div class="row align-items-center">
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cloudbenchmark.png" title="two identical cloud instances have wildly different IO performance" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Two identical cloud instances from <a href="https://aws.amazon.com">AWS</a> exhibit wildly different IO performance
        </div>
    </div>
    <div class="col-sm-7 mt-3 mt-md-0">
        <p>With the cloud, it's hard to know precisely what you are paying for in terms of performance. Even computing resources that are configured identically (and which cost the same) may differ dramatically in actual performance when used.</p>
        <p>Not only is your performance inherently dependent on what <i>other</i> tenants are doing on the same servers, even the hardware itself may vary from instance to instance or service to service.</p>
        <p>ICET-lab has conducted extensive benchmarking studies of real-life cloud providers, particularly of Infrastructure-as-a-Service clouds such as <a href="https://aws.amazon.com/pm/ec2/">AWS EC2</a> and function (serverless) environments such as <a href="https://aws.amazon.com/pm/lambda">AWS Lambda</a>, pioneering tools and methods that allow customers to predict better what to expect from the services they are using.</p>
    </div>
</div>

<div class="row align-items-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        <p>For Infrastructure-as-a-Service clouds, we have compared the performance of three industry-leading services (EC2, Microsoft Azure, and IBM Softlayer), with a particular focus on how <i>predictable</i> performance is. We have executed over 50.000 individual benchmark runs, making this the largest study of it's kind to our knowledge {% cite leitner:16 %}.</p>
        <p>To enable this work, we have built a custom open-source cloud benchmarking toolkit dubbed <a href="https://github.com/sealuzh/cloud-workbench">Cloud Workbench (CWB)</a> {% cite scheuner:14 %}. CWB is flexible enough to support a wide range of benchmarking studies - for example, we used the same toolkit to compare software performance in different cloud environments {% cite laaber:19a %}.</p>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/benchmarkresults.png" title="performance variation in different cloud providers" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Comparison of the performance variation in different cloud providers
        </div>
    </div>    
</div>

<div class="container">
    <div class="row align-items-center">
        <div class="col-sm-8 offset-sm-2">
            {% include figure.liquid loading="eager" path="assets/img/cwb-show-execution.png" title="Cloud Workbench" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            The web-based user interface of Cloud Workbench
        </div>
    </div>
</div>

For benchmarking serverless systems, we are a member of and collaborate extensively with the [SPEC Research Group](https://research.spec.org), a worldwide research collaboration under the umbrella of the  Standard Performance Evaluation Corporation ([SPEC](https://spec.org)), a non-profit consortium that is responsible for most state-of-the-art benchmarks that computer systems are compared with.

We are currently working on a toolkit for benchmarking serverless applications, along with an empirical study of AWS Lambda performance. More details about this work will be added soon!

**Contacts:**

[Dr. Joel Scheuner](https://joelscheuner.com)

[Dr. Philipp Leitner](http://philippleitner.net)

---