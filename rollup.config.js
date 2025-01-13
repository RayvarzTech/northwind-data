const config = {
  input: ["index.js"],
  output: [
    {
      file: "dist/northwind-data.js",
      format: "umd",
      name: "Northwind",
    },
  ],
};

export default config;
