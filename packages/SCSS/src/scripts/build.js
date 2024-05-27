const fs = require("fs");
const path = require("path");
const sass = require("sass");

/**
 * compile any scss file to css
 * @param {string}
 * @param {string}
 */

const compile = (src, output) => {
  const result = sass.compile(path.resolve(src), {
    style: "expanded",
    verbose: true,
  });

  fs.writeFileSync(path.resolve(output), result.css);
};

//Compile the global css
compile("src/global.scss", "lib/global.css");

/**
 * get all component from atom, molecules and organism
 * @returns object[] return array of object containing src and output
 */

const getComponents = () => {
  let allComponents = [];

  const types = ["atom", "molecuels", "organism"];

  types.forEach((type) => {
    const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
      src: `src/${type}/${file}`,
      output: `lib/${file.slice(0, -5)}.css`,
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

getComponents().forEach((component) =>
  compile(component.src, component.output)
);
