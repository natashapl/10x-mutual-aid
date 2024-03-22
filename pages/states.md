---
layout: layouts/page
className: "state-results-page"
pagination:
  data: csvData
  size: 1
  alias: item
  addAllPagesToCollections: true
permalink: "/states/{{ item.Abbr | slug }}/index.html"
---

<h1>Mutual Aid Assistance Results</h1>
<div class="usa-alert usa-alert--warning grid-container padding-x-0">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Disclaimer</h4>
    <div class="usa-alert__text grid-row grid-gap">
      <div class="mobile:grid-col-12 desktop:grid-col-10">
        This website contains references to non-federal resources and organizations. The references are solely for informational purposes and are not an endorsement of any non-federal entity by FEMA, Department of Homeland Security, or the U.S. government.   
      </div>
      <div class="mobile:grid-col-12 desktop:grid-col-2">
        <button class="usa-button" type="button">View full disclaimer</button>
      </div>
    </div>
  </div>
</div>
<section class="usa-section">
  <div class="grid-container">
    <h2 class="font-heading-xl margin-y-0">
      Overview of Mutual Aid Resources Available in {{ item.State }}
    </h2>
    <ul class="usa-list">
      <li>{{ item.State }} {{ item["IMAC Description"] | downcase }}</li>
      <li>{{ item.State }} {{ item["EMAC Public/Private"] | downcase }}</li>
    </ul>
  </div>
</section>