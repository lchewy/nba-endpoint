import swagger from "./components";

// const swagJSON = JSON.parse(str)
// console.log("JSON ", swagJSON)


window.onload = function() {
  // Build a system
  const ui = SwaggerUIBundle({
    // url: "https://petstore.swagger.io/v2/swagger.json",
    spec: swagger,
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout"
  });

  window.ui = ui;
};
