---
title: "Karla Walker"
layout: "layout/home.html"
---

{% for item in collections.projects %}

<div>
  <h2>{{ item.data.title }}</h2>
  
  {{ item.data.summary }}

<a href="{{ item.url }}">View Project</a>

</div>

{% endfor%}
