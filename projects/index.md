---
layout: default
title: Game Projects
---

# Game Development Projects

<ul class="project-list">
{% for project in site.projects %}
  <li>
    <a href="{{ project.url }}">{{ project.title }}</a><br>  
    <!-- – {{ project.engine }} -->
    <span style="color: #999;">Engine: {{ project.engine }}</span>
  </li>
{% endfor %}
</ul>