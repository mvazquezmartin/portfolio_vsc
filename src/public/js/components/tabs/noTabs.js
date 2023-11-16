import { highlight } from "../../utils/highlight.js";

const txt = `// "No one knows everything,
// we all know something,
// and together we know a whole lot."

const live = (alive) => {
  while (alive) {
    eat(4);
    sleep(8);
    code(12);
  }
};`;
const path = "// Do not change, it's working very well";
const renderNoTabs = () => {
  highlight(path, txt, "javascript");
  hljs.highlightAll();
};

export { renderNoTabs };
