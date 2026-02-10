---
layout: page
permalink: /collaborators/
title: collaborators
description: research collaborators of the ICET-lab (2021-present)
nav: true
nav_order: 4.5
map: true
---

We actively collaborate with researchers across Europe and the Americas. The map below shows our external research collaborators from the last five years (2021&ndash;present).

<div id="collaborators-map" class="collaborators-map"></div>

<script>
  var collaboratorsData = {{ site.data.collaborators | jsonify }};
</script>
<script src="{{ '/assets/js/collaborators-map.js' | relative_url }}" defer></script>

<h2>Collaborators by Institution</h2>

{% assign grouped = site.data.collaborators | group_by: "affiliation" %}
{% for group in grouped %}
**{{ group.name }}** ({{ group.items[0].city }})
<ul>
{% for person in group.items %}
<li>{{ person.name }}</li>
{% endfor %}
</ul>
{% endfor %}
