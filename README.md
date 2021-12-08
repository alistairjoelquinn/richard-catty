## Richard Catty - Eco-conscious Writer

This is the brochure website for writer [Richard Catty](https://www.richardcatty.com/). 

Client side the application has been built with Nextjs and TypeScript. When the user first lands on the home page they are welcomed with a paragraph being typed out in front on them using [React Typist](https://github.com/jstejada/react-typist).

![Home Page Typing Text](/md-images/home-page.png)

The hamburger menu opens the side navigation, which appears from the right. The [menu](https://github.com/alistairjoelquinn/richard-catty/blob/main/client/components/SideMenu.tsx) and the [icon](https://github.com/alistairjoelquinn/richard-catty/blob/main/client/components/HeaderIcon.tsx) are both animated with simple CSS transitions.

![Side Nav](/md-images/side-nav.png)

Each of the pages have their JSON content generated at build time using `getStatisProps` as the content changes infrequently. Content is being managed from the [Sanity.io](https://github.com/sanity-io/sanity) CMS. A web hook is being using so that whenever changes are made to the data in the CMS a rebuild is triggered.

On each page the user can hover over items. 

![Testimonials Page](/md-images/testimonials.png)

When they hover a card appears giving the user a preview. Clicking on `Read More` takes the user to the link.

![Testimonials Page Hover](/md-images/testimonials-card.png)

The majority of the styling has been done using Styled Components, though the hovering card which appears on each page, and the home page icons are using [Grommet UI](https://github.com/grommet)

![Portfolio Page Hover](/md-images/portfolio-card.png)
