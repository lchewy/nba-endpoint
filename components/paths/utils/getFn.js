const getFn = (summary, id, key, body, tag, methodDescription) => {
  return {
    get: {
      tags: [tag],
      summary: `${tag} card's ${summary}`,
      description: methodDescription,
      operationId: `${id}`,
      produces: ["application/json"],
      parameters: [
        {
          name: `${tag}Id`,
          in: "path",
          description: `${tag}'s Id from SR model`,
          type: "string",
          required: true
        }
      ],
      responses: {
        "200": {
          description: "successful operation",
          schema: {
            type: "object",
            properties: {
              success: { type: "boolean" },
              response: {
                type: "object",
                properties: {
                  card: {
                    type: "object",
                    properties: {
                      [key]: body
                    }
                  }
                }
              }
            }
          }
        },
        "400": { description: "Invalid ID supplied" },
        "404": { description: "Player not found" }
      }
    }
  };
};

export default getFn;
