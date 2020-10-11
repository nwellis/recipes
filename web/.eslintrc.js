module.exports = {
  extends: [
    "standard",
    "standard-react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
  ],
  rules: {
    "react/prop-types": 0
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.4"
    }
  }
};
