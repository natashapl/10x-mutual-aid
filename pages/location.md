---
title: Document with Sidenav
permalink: /location/
layout: layouts/page
sidenav: true
---

<h1 style="font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif; font-weight: normal; color: #005288;">Assistance Questionnaire</h1>

<form action="{{ '/disaster-info/' | url }}">

<label for="state">What is the primary location of the disaster event?</label>
<select name="state">
  <option value="AK">Alaska</option>
  <optoin value="AL">Alabama</option>
  <option value="AR">Arkansas</option>
  <option value="AS">American Samoa</option>
  <option value="CA">California</option>
</select>

<label>Describe the extent and location of the disaster</label>
<textarea></textarea>

<button class="usa-button" style="margin: 50px 0 50px 0;">Continue</button>
</form>
