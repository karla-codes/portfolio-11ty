module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("./src/js")
  eleventyConfig.addWatchTarget("./src/sass/")
  eleventyConfig.addPassthroughCopy("./src/css")
  eleventyConfig.addPassthroughCopy("./src/fonts")

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  }
}
