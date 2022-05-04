module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
