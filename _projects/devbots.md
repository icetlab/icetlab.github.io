---
layout: page
title: Software Development Bots
description: bot-based automation in software projects
img: assets/img/devbots.png
importance: 1
category: bots
related_publications: true
---

Automation is a key enabler for effective software development. It can help developers to focus on the more creative aspects of software development, while repetitive tasks are taken care of by machines. Our key research interest in this area is how developers interact with highly automated tools ("DevBots").

<div class="row align-items-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        <p>We identify six key characteristics of DevBots {% cite erlenhov:20 %}. On a high level, all DevBots are automation tools with exhibit some human traits. Further, DevBots commonly have a human-like identity, such as a name.</p>

        <p>Other characteristics depend on the type of bot. In our research, we distinguish between <i>>Charlie</i> bots (where the defining characteristic is a human-language interface), <i>Alex</i> bots (which are defined by doing things autonomously, independent of a human developer), and <i>Sam</i> bots (which exhibit a "smartness" that goes beyond executing a well-defined script).</p>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/devbot_characteristics.png" title="DevBot Characteristics" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            DevBot Characteristics
        </div>
    </div>    
</div>

<div class="row align-items-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bot_identification.png" title="Process to Decide if an Automation Tool is a DevBot" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Process to Decide if an Automation Tool is a DevBot
        </div>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        <p>We also propose an process to identify if a specific automation tool is indeed a DevBot, and if so, which type {% cite erlenhov:20 %}.</p>
    </div>    
</div>

<div class="row align-items-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        <p>In our ongoing work, we are also interested in bots for continuous performance assessment {% cite markusse:22 %}, connecting the lab's interest in performance engineering and measurement with software development automation. We are currently working with researchers at Concordia Univeersity (Canada), Eindhoven University of Technology (The Netherlands), and <a href="https://www.mozilla.org/">Mozilla</a> on better bots for monitoring software performance.</p>
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/performancebot.png" title="A DevBot for Continuous Performance Assessment" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            A DevBot for Continuous Performance Assessment
        </div>
    </div>    
</div>

Obviously, the rise of Large Language Models (LLMs) has transformed this area of research. ICET-lab members are actively involved in research on how LLMs can support developers {% cite khojah:24 %}, and for which use cases more traditional DevBots and automation pipelines are more suited.

**Contacts:**

[Linda Erlenhov](https://research.chalmers.se/person/e9linda)

[Ranim Khojah](https://ranimkhojah.com)

[Dr. Francisco Gomes](https://www.chalmers.se/en/persons/gomesf/)

[Dr. Philipp Leitner](http://philippleitner.net)
