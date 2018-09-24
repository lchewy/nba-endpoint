import paths from "./paths";
import definitions from "./definitions";

const today =  new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

export default {
  swagger: "2.0",
  info: {
    description: `API+ Endpoints for NBA - last update ${mm}/${dd}/${yyyy}`,
    version: "1.0.0",
    title: "Sportradar's API+ NBA Endpoints",
    termsOfService: "",
    contact: { email: "l.chiu@sportradar.com" },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  host: "api-plus.dev.denali-sr.com",
  basePath:"/api/NBA/v1/en_US", //"/api/v1/en_US/NBA",
  tags: [
    {
      name: "team",
      description: "API+ official stats for NBA teams",
      externalDocs: {
        description: "Find out more",
        url: "https://sportradar.us/"
      }
    },
    {
      name: "player",
      description: "API+ official stats for NBA players",
      externalDocs: {
        description: "Find out more",
        url: "https://sportradar.us/"
      }
    },
    {
      name: "game",
      description: "API+ official stats for NBA players",
      externalDocs: {
        description: "Find out more",
        url: "https://sportradar.us/"
      }
    }
  ],
  schemes: ["https", "http"],
  paths,
  definitions,
  externalDocs: {
    description: "Find out More",
    url: "https://sportradar.us/"
  }
};
