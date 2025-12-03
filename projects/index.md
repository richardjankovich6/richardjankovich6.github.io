---
layout: default
title: Game Projects
---

# Game Development Projects

<ul>
{% for project in site.projects %}
  <li>
    <a href="{{ project.url }}">{{ project.title }}</a>  
    – {{ project.engine }}
  </li>
{% endfor %}
</ul>