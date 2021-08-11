export default function pluginDisplayFunc(display) {
  let plugins = navigator.plugins;
  let pluginArray = Object.keys(plugins);
  let pluginNames = pluginArray.map((item) => {
    return ` Plugin ${item}: ${plugins[item].name}`;
  });

  document.getElementById("hidePlugins").addEventListener("click", () => {
    document.getElementById(display).innerHTML = "";
  });
  document.getElementById("showPlugins").addEventListener("click", () => {
    document.getElementById(display).innerHTML = pluginNames;
  });
}
