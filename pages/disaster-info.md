---
title: Document with Sidenav
permalink: /disaster-info/
layout: layouts/page
sidenav: true
---

# Assistance Questionnaire

Disaster info

<form id="results">

<button class="usa-button" action="blog" style="margin: 50px 0 50px 0;">Continue</button>
</form>

<script>
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const disasterState = urlParams.get('location')
  document.getElementById("results").action = {{ '/posts/' | url }}+disasterState;
</script>
