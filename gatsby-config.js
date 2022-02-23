module.exports = {
  siteMetadata: {
    description: "Personal page of Kaushik Iyer",
    locale: "en",
    title: "Kaushik Iyer"
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "bright-red",
        showThemeLogo: false,
        title: "Kaushik Iyer",
        contentPath: "content/"
      },
    },
  ],
}
