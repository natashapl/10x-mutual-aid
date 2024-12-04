# 10x Bringing Mutual Aid

A prototype website for the 10x project bringing mutual aid to underserved communities for post disaster rebuilding. [View the latest deployment of the website.](https://federalist-fc42b3e8-1d7d-4650-b068-c0c57c55dcfd.sites.pages.cloud.gov/site/gsa-tts/10x-mutual-aid/).

This prototype uses a Static Site Generator (SSG) called Eleventy (11ty). It was generated from [pages-uswds-11ty](https://github.com/cloud-gov/pages-uswds-11ty) by a Cloud.gov Pages template setup process.

## Running the prototype locally

Requires Node.js and npm to run. Node v20.11.0 is confirmed to work, and probably other versions work as well.

1. Install dependencies: `npm install`
2. Run a local server: `npm run dev`
3. Visit [http://localhost:8080/](http://localhost:8080/)

## Deploying the prototype

The software is deployed to Cloud.gov Pages (previously known as Federalist) automatically upon commiting code to, or merging a branch into, the `main` Git branch. Deployment takes a couple of minutes, after which the most recent deployment will live at this URL:

[https://federalist-fc42b3e8-1d7d-4650-b068-c0c57c55dcfd.sites.pages.cloud.gov/site/gsa-tts/10x-mutual-aid/](https://federalist-fc42b3e8-1d7d-4650-b068-c0c57c55dcfd.sites.pages.cloud.gov/site/gsa-tts/10x-mutual-aid/)