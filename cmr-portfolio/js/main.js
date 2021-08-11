import pluginDetection from "./modules/pluginDetection.js";
import navigation from "./modules/navigation.js";
import cookieCreation from "./modules/cookieCreation.js";

$(function () {
  pluginDetection();
  navigation();
  cookieCreation();
});
