module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/fonts");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
