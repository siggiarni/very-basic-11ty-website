module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css");
  eleventyConfig.addFilter("randomItem", (arr) => {
    arr.sort(() => {
      return 0.5 - Math.random();
    });
    return arr.slice(0, 1);
  });
  return {
    dir: {
      // setting the input directory to src - as in, the directory 11ty
      // will watch for changes and use to build for production.
      // 11ty will literally only serve up what you give it. So, we first
      // have to create an index file in our input directory
      input: "src",
      // production-ready files for use by localhost
      // and a hosting server will be published.
      output: "public",
    },
  };
};
