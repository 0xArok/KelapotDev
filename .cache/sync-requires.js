const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-jsx": hot(preferDefault(require("C:\\Users\\Personal\\kelapotWeb\\KelapotDev\\src\\pages\\index.jsx")))
}

