---
layout: page
permalink: /collaborators/
title: collaborators
description: research collaborators of the ICET-lab (2016-present)
nav: false
nav_order: 4.5
map: true
---

We actively collaborate with researchers across Europe and the Americas. The map below shows our external research collaborators from the last ten years (2016&ndash;present).

<div id="collaborators-map" class="collaborators-map"></div>

<script>
  var collaboratorsData = {{ site.data.collaborators | jsonify }};
</script>
<script src="{{ '/assets/js/collaborators-map.js' | relative_url }}"></script>

<h2>Collaborators by Institution</h2>

{% assign continents = site.data.collaborators | group_by: "continent" | sort: "name" %}
{% for continent in continents %}
<h3>{{ continent.name }}</h3>

{% assign institutions = continent.items | group_by: "affiliation" %}
{% for group in institutions %}
**{{ group.name }}** ({{ group.items[0].city }})
<ul>
{% for person in group.items %}
<li><a href="{{ person.url }}" target="_blank">{{ person.name }}</a></li>
{% endfor %}
</ul>
{% endfor %}
{% endfor %}
