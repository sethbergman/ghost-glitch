const autoprefixer = require("autoprefixer-stylus");
const stylus = require("stylus");
const stylusRender = require("stylus-renderer");
const chokidar = require("chokidar");

const stylesPath = "themes/culture/styles";

const updateStyles = () =>
  stylusRender([stylesPath + "/styles.styl"], { use: autoprefixer() }, function(
    error
  ) {
    // if (error) throw error
    console.log("🎨 css compiled");
  });

let watcher = chokidar.watch(stylesPath, {
  ignored: ["*.css"],
  persistent: true
});

watcher.on("all", path => {
  console.log(`File ${path} has been changed`);
  updateStyles();
});

console.log(" 🔮 watcher started");
