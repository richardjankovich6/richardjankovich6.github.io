---
layout: default
title: Projects
# published: false
permalink: /projects/
---

<!-- # Projects -->
<h1>Projects</h1>

If you can see this, the page is working.
<!-- <p>If you can see this, the page is working.</p> -->



<ul class="projects-list">
  {% assign sorted_projects = site.projects | sort: 'order' %}
  {% for project in sorted_projects %}
    <li class="project-item">
      <h2>
        <a href="{{ project.url | relative_url }}">
          {{ project.title }}
        </a>
        – {{ project.engine }}
      </h2>
      {% if project.summary %}
        <!-- project.summary -->
        <p>{{ project.summary }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>

