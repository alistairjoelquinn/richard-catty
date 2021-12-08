## Richard Catty - Eco-conscious Writer

This is the brochure website for writer [Richard Catty](https://www.richardcatty.com/). 

Client side the application has been built with Nextjs and TypeScript. When the user first lands on the home page they are welcomed with a paragraph being typed out in front on them using [React Typist](https://github.com/jstejada/react-typist).

![Home Page Typing Text](/md-images/home-page.png)

The hamburger menu opens the side navigation, which appears from the right. The [menu](https://github.com/alistairjoelquinn/richard-catty/blob/main/client/components/SideMenu.tsx) and the [icon](https://github.com/alistairjoelquinn/richard-catty/blob/main/client/components/HeaderIcon.tsx) are both animated with simple CSS transitions.

![Side Nav](/md-images/side-nav.png)

The Social Media icons on the home page take the user to their respective profiles, though the email icon opens a modal containing the contact email address. This is inserted into the DOM outwith the React application using a [portal](https://github.com/alistairjoelquinn/richard-catty/blob/main/client/components/Portal.tsx).

![Modal Email](/md-images/portal.png)

Each of the pages have their JSON content generated at build time using `getStatisProps` as the content changes infrequently. A web hook is being using triggering a rebuild whenever changes are made to the data in the CMS. 

The CMS has been built with [Sanity.io](https://github.com/sanity-io/sanity) and has a GraphQL API. Client side [data fetching](https://github.com/alistairjoelquinn/travel-almanac-style-guide/blob/main/client/src/components/context/actions.ts) is being done with [Apollo Client](https://github.com/apollographql/apollo-client).

On each page the user can hover over items. 

![Testimonials Page](/md-images/testimonials.png)

When they hover a card appears giving the user a preview. Clicking on `Read More` takes the user to the link.

![Testimonials Page Hover](/md-images/testimonials-card.png)

The majority of the styling has been done using Styled Components, though the hovering card which appears on each page, and the home page icons are using [Grommet UI](https://github.com/grommet)

![Project Page Hover](/md-images/projects-card.png)

Most of the links are web links to a particular organisation or article, though occasionally they are PDF [articles](https://www.richardcatty.com/the_future_we_choose.pdf) which will load in the browser.

![Portfolio Page Hover](/md-images/portfolio-card.png)

