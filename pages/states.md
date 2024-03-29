---
layout: layouts/results
className: "state-results-page"
pagination:
  data: csvData
  size: 1
  alias: item
  addAllPagesToCollections: true
permalink: "/states/{{ item.Abbr | slug }}/index.html"
---
