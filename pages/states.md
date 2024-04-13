---
layout: layouts/results
className: "state-results-page"
pagination:
  data: csvData.stantecMABD
  size: 1
  alias: item
  addAllPagesToCollections: true
title: '{{ item.State }}'
permalink: "/states/{{ item.Abbr | slug }}/index.html"
---