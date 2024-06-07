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

        <p>ICET-lab has conducted extensive benchmarking studies of real-life cloud providers, particularly of Infrastructure-as-a-Service clouds such as <a href="https://aws.amazon.com/pm/ec2/">AWS EC2</a> and function environments such as <a href="https://aws.amazon.com/pm/lambda">AWS Lambda</a>.</p>
    </div>
</div>

