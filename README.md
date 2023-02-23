# Vazco Forminer Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm ci
```

### Local Development

```
$ npm start
```

#### How to add new page

1. Add new `.mdx` file in the `docs` directory.
   - Fill it with content.
   - Remember to add description using frontmatter.
   - Check Docusaurus documentation for additional components and MDX formatting / styling to make your content interesting.
1. Add your filename in the `sidebars.js` file in a desired section.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The `master` branch is deployed automatically to Github Pages using Github Actions.
