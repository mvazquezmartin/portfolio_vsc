const extensions = [
  {
    extension: "CodeSnap",
    img: "https://adpyke.gallerycdn.vsassets.io/extensions/adpyke/codesnap/1.3.4/1625238962906/Microsoft.VisualStudio.Services.Icons.Default",
    content: "📷 Take beautiful screenshots of your code",
    html_url:
      "https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap",
  },
  {
    extension: "Dracula Official",
    img: "https://dracula-theme.gallerycdn.vsassets.io/extensions/dracula-theme/theme-dracula/2.24.3/1689457192391/Microsoft.VisualStudio.Services.Icons.Default",
    content:
      "Official Dracula Theme. A dark theme for many editors, shells, and more.",
    html_url:
      "https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula",
  },
  {
    extension: "Error Lens",
    img: "https://usernamehw.gallerycdn.vsassets.io/extensions/usernamehw/errorlens/3.14.0/1695666857816/Microsoft.VisualStudio.Services.Icons.Default",
    content:
      "Improve highlighting of errors, warnings and other language diagnostics.",
    html_url:
      "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
  },
  {
    extension: "Live Sass Compiler",
    img: "https://glenn2223.gallerycdn.vsassets.io/extensions/glenn2223/live-sass/6.1.1/1692316210985/Microsoft.VisualStudio.Services.Icons.Default",
    content: "Compile Sass or Scss to CSS at realtime.",
    html_url:
      "https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass",
  },
  {
    extension: "Live Server",
    img: "https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/liveserver/5.7.9/1661914858952/Microsoft.VisualStudio.Services.Icons.Default",
    content:
      "Launch a development local Server with live reload feature for static & dynamic pages",
    html_url:
      "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
  },
  {
    extension: "Material Icon Theme",
    img: "https://pkief.gallerycdn.vsassets.io/extensions/pkief/material-icon-theme/4.30.1/1693250614876/Microsoft.VisualStudio.Services.Icons.Default",
    content: "Material Design Icons for Visual Studio Code",
    html_url:
      "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
  },
  {
    extension: "Prettier - Code formatter",
    img: "https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/10.1.0/1690819498575/Microsoft.VisualStudio.Services.Icons.Default",
    content: "Code formatter using prettier",
    html_url:
      "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
  },
  {
    extension: "Thunder Client",
    img: "https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/2.12.4/1695815687981/Microsoft.VisualStudio.Services.Icons.Default",
    content: "Lightweight Rest API Client for VS Code",
    html_url:
      "https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client",
  },
  {
    extension: "Git Graph",
    img: "https://mhutchie.gallerycdn.vsassets.io/extensions/mhutchie/git-graph/1.30.0/1617594001998/Microsoft.VisualStudio.Services.Icons.Default",
    content: "View a Git Graph of your repository, and perform Git actions from the graph.",
    html_url: "https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph"
  },
  {
    extension: "Power Mode",
    img: "https://hoovercj.gallerycdn.vsassets.io/extensions/hoovercj/vscode-power-mode/3.0.2/1647278286182/Microsoft.VisualStudio.Services.Icons.Default",
    content: "💥 Your code is powerful, unleash it!",
    html_url: "https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-power-mode"
  }
];

const getRandomExtension = () => {
  const indice = Math.floor(Math.random() * extensions.length);
  const extension = extensions[indice];
  return extension;
};

const renderExtension = () => {
  const extension = getRandomExtension();

  const containerExtension = document.createElement("div");
  containerExtension.classList.add("containerExtension");

  const html_url = document.createElement("a");
  html_url.href = extension.html_url;
  html_url.target = "_blank";

  const titleRecommended = document.createElement("h2");
  titleRecommended.textContent = "Recommended Extension";

  const containerImgContent = document.createElement("div");
  containerImgContent.classList.add("containerExtensionImgContent");

  const containerImg = document.createElement("div");
  containerImg.classList.add("containerExtensionImg");
  const imgExtesnion = document.createElement("img");
  imgExtesnion.src = extension.img;
  imgExtesnion.alt = extension.extension;

  const containerContent = document.createElement("div");
  containerContent.classList.add("containerExtensionContent");
  const name = document.createElement("p");
  name.classList.add("extensionName");
  name.textContent = extension.extension;
  const content = document.createElement("p");
  content.classList.add("extensionDescription");
  content.textContent = extension.content;

  containerExtension.appendChild(titleRecommended);
  containerExtension.appendChild(html_url);
  html_url.appendChild(containerImgContent);
  containerImgContent.appendChild(containerImg);
  containerImg.appendChild(imgExtesnion);
  containerImgContent.appendChild(containerContent);
  containerContent.appendChild(name);
  containerContent.appendChild(content);

  return containerExtension;
};

export { renderExtension };
