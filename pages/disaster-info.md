---
title: Document with Sidenav
permalink: /disaster-info/
layout: layouts/page
sidenav: true
---

<h1 style="font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif; font-weight: normal; color: #005288; width: 400px;">{% image "./_img/disaster-info.png" "illustration" %} <span style="position: relative; bottom: 40px;">Questionnaire</h1>

<h3>Disaster damage</h3>

<label>Primary disaster type</label>
<select>
  <option>Flood</option>
  <option>Fire</option>
  <option>Storm</option>
</select>

<label>Please describe the damage</label>
<textarea></textarea>

<h3>Point of contact</h3>

<label>First name</label>
<input></input>
<label>Last name</label>
<input></input>

<label>Communication method</label>
<select>
  <option>Phone call</option>
  <option>Text message</option>
  <option>E-mail</option>
<select><br>
<input></input>

<form id="results">

<button class="usa-button" action="blog" style="margin: 50px 0 50px 0;">Continue</button>
</form>

<script>
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const disasterState = urlParams.get('state')
  document.getElementById("results").action = "{{ '/posts/' | url }}"+disasterState;
</script>
