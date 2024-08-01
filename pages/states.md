---
layout: layouts/results
className: "state-results-page static-page"
description: Mutual Aid Resources
pagination:
  data: csvData.stantecMABD
  size: 1
  alias: item
  addAllPagesToCollections: true
title: '{{ item.State }}'
short-title: Results
permalink: "/states/{{ item.Abbr | slug }}/index.html"
---