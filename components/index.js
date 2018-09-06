import paths from "./paths"
import definitions from "./definitions"

export default {
    swagger: "2.0",
    info:{
        description: "API+ Endpoints for NBA",
        version: "1.0.0",
        title: "Sportradar's API+ NBA Endpoints",
        termsOfService: "",
        contact: {email: "l.chiu@sportradar.com"},
        license: {
            name: "Apache 2.0",
            url: "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    host: "localhost:2000/api",
    basePath: "/v1",
    tags:[
        {
            name:"team",
            description:"API+ official stats for NBA teams",
            externalDocs:{
                description:"Find out more",
                url:"https://sportradar.us/"
            }
        },
        {
            name:"player",
            description:"API+ official stats for NBA players",
            externalDocs:{
                description:"Find out more",
                url:"https://sportradar.us/"
            }
        },
        {
            name:"game",
            description:"API+ official stats for NBA players",
            externalDocs:{
                description:"Find out more",
                url:"https://sportradar.us/"
            }
        }
    ],
    schemes: ["http", "https"],
    paths,
    definitions,
    externalDocs:{
        description:"Find out More",
        url:"https://sportradar.us/"
    }
}