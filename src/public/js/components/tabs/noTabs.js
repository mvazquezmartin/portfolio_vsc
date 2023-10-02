import { highlight } from "../../utils/highlight.js";

const txt = `const live = (alive) => {
  while (alive) {
    eat(4);
    sleep(8);
    code(12);
  }
};`;
const path = "// Don't change, it's working very well";
const renderNoTabs = () => {
  highlight(path, txt, "javascript");
  hljs.highlightAll();
};

export { renderNoTabs };
