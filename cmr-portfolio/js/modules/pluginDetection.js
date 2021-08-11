export default function pluginDetection() {
  const pluginLength = navigator.plugins.length; //storing length
  const plugins = navigator.plugins;
  const container = [];
  //pushing the plugin to an array
  for (let i = 0; i < pluginLength; i++) {
    container.push(" " + plugins[i].name);
  }
  //writing the contents of the container to html

  $("#browserPluginDetection").click(function () {
    $("#browserPluginDetectionDisplay").html(container);
    $("#browserPluginDetectionDisplay").css("background", "rgb(245, 192, 0)");
  });
}
