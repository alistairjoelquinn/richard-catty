## Richard Catty - Eco-conscious Writer

This is the website for writer [Richard Catty](https://www.richardcatty.com/). 

Client side the application has been built with Nextjs and TypeScript. When the user first lands on the home page they are welcomed with a paragraph being typed out using [React Typist](https://github.com/jstejada/react-typist).

![Home Page Typing Text](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507769/catty-md/home-page_gay20x.png)

The hamburger menu opens the side navigation, which appears from the right. The [side nav](https://github.com/alistairjoelquinn/richard-catty/blob/main/client/components/SideMenu.tsx) and the [hamburger menu](https://github.com/alistairjoelquinn/richard-catty/blob/main/client/components/HeaderIcon.tsx) are both animated with simple CSS transitions.

![Side Nav](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507767/catty-md/side-nav_tjgh1g.png)

The social media icons on the home page take the user to their respective profiles, though the email icon opens a modal containing the contact email address. This is inserted into the DOM outwith the React application using a [portal](https://github.com/alistairjoelquinn/richard-catty/blob/main/client/components/Portal.tsx).

![Modal Email](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507767/catty-md/portal_uitxiq.png)

Each of the pages have their JSON content generated at build time using `getStaticProps` as the content changes infrequently. A web hook is being used to trigger a rebuild whenever changes are made in the [CMS](https://github.com/alistairjoelquinn/richard-catty/tree/main/server). 

The CMS has been built with [Sanity.io](https://github.com/sanity-io/sanity) and has a GraphQL API. Client side data fetching is being done with [Apollo Client](https://github.com/apollographql/apollo-client).

On each page the user can hover over items. 

![Testimonials Page](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507767/catty-md/testimonials_wfnnnl.png)

When they hover, a card appears giving the user a preview. Clicking on `Read More` takes the user to the link.

![Testimonials Page Hover](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507768/catty-md/testimonials-card_d0f7rp.png)

Most of the links are web links navigating the user to a particular organisation or online article, though occasionally they are PDF [articles](https://www.richardcatty.com/the_future_we_choose.pdf) which will load in the browser.

![Portfolio Page Hover](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507766/catty-md/portfolio-card_fxho06.png)

The majority of the styling has been done using [Styled Components](https://github.com/styled-components), though the hovering card which appears on each page and the home page icons are using [Grommet UI](https://github.com/grommet).

![Project Page Hover](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644507765/catty-md/projects-card_stwccr.png)