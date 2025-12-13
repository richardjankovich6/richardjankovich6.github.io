---
layout: default
title: Game Projects
permalink: /projects/
published: false
---

# Game Development Projects


<ul class="project-list">
  {% for project in site.projects %}
    {% unless project.published == false %}
      <li>
        <a href="{{ project.url }}">{{ project.title }}</a><br>  
        – {{ project.engine }}
        <span style="color: #999;">Engine: {{ project.engine }}</span>
      </li>
    {%endunless%}
  {% endfor %}
</ul>