# Welcome to Nev-r-Blog-UI

**Maintainer's Note:** At the time of this writing, Nev-R-Blog-UI is merely a prototype of how the application is supposed to work from a UI / UX perspective. It is also a work in progress. With this being said, documentation is far from complete.

**Nev-r-Blog-ui** is the client-side dashboard for the soon to be famous **Nev-r-Blog** static content management system. Nev-r-Blog SCMS will consist of three seperate applications.

## Nev-R-Blog-UI

Nev-R-Blog-UI will serve as a friendly user interface where your clients will be able to create, edit and delete their websites content. Features include:

-   a multi-leveled access control system for Administrators, Editors and Contributors.

-   the ability to deploy static website content with the click of a button.

Nev-R-Blog-UI will be created with ReactJS.

## Nev-R-Blog-Server

Nev-R-Blog-Server will be the official API server for Nev-R-Blog. It will be built with Node, Express and MongoDB. Unlike regular content management systems, Nev-R-Blog-Server is meant to be deployed in a location that's seperate from your publically hosted website, making it more secure than other Content Management solutions.

## Nev-R-Blog-Builder

Nev-R-Blog-Static is the build system that merges data from the Nev-R-Blog Server with component templates to create static HTML files. Features include:

-   a dedicated static site generator
-   automatic optimization of site assets (CSS, JavaScript, Images, etc).
-   deployment to your host / CDN of choice.

Nev-R-Blog-Builder is built with Gatsby.

## FAQs

### Why Nev-R-Blog?

Originally, the first three letters of Nev-R-Blog stood for Node, Express, and VueJS. However, I am hoping that a project of such magnitude might secure me a career as a full-stack developer, and most of the shops out here prefer to use React as their JavaScript framework of choice. With this benig said, I decided to keep the name for sentimental reasons.

### Why are you breaking this up into three seperate projects?

Not everyone may be happy with the technical decisions I made with this project. You may want to port Nev-R-Blog-UI from React to Vue. Or you may want to use a different API server like Contentful, Sanity, or Cockpit. Finally, you may want to use a combination of Gulp and Eleventy in place of Nev-R-Blog-Static.

This is open source software, and I myself like tinkering. By splitting this project into three different repos, it will make it all the easier for you to modify Nev-R-Blog to fit your specific needs.

### When will it be completed?

When I say it is. Bear in mind that I also work a full time job outside of the tech industry, and every now and then, I like to get out from behind my desk to enjoy a healthy work / life balance.

### Do you accept money?

Hells yeah! I have a wife and cat to feed. Once I figure out how to get the new donation feature working on github, it will be implemented.

### Will there be better documentation?

I take documentation very seriously. There have been numerous times when bad documentation has sent me running from an open source project, that could have otherwise been very useful to me. As Nev-R-Blog reaches completion, I will make a point of giving you some of the best documentation that you have ever seen in an open source project. That is a solid promise.
