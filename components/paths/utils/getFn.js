const int32 = { type: "integer", format: "int32" };
const str = { type: "string" };

const teamSchema = (key, body) => ({
  type: "object",
  properties: {
    success: { type: "boolean" },
    response: {
      type: "object",
      properties: {
        id: int32,
        sr_id: str,
        type: str,
        sport: str,
        data: {
          type: "object",
          properties: {
            id: str,
            sr_id: str,
            reference: str,
            name: str,
            market: str,
            alias: str,
            conference: {
              type: "object",
              properties: {
                id: str,
                name: str,
                alias: str
              }
            },
            division: {
              type: "object",
              properties: {
                id: str,
                name: str,
                alias: str
              }
            },
            venue: {
              type: "object",
              properties: {
                id: str,
                name: str,
                capacity: int32,
                address: str,
                city: str,
                state: str,
                zip: str,
                country: str,
                sr_id: str
              }
            },
            stats: {
              type: "object",
              properties: {
                [key]: body
              }
            }
          }
        },
        created_at: str,
        updated_at: str,
        deleted_at: { type: "string", nullable: true }
      }
    }
  }
});

const playerSchema = (key, body) => ({
  type: "object",
  properties: {
    success: { type: "boolean" },
    response: {
      type: "object",
      properties: {
        id: int32,
        sr_id: str,
        type: str,
        sport: str,
        data: {
          type: "object",
          properties: {
            id: str,
            sr_id: str,
            reference: str,
            last_name: str,
            first_name: str,
            birth_date: str,
            weight: int32,
            height: int32,
            position: str,
            birth_place: str,
            college: str,
            team: {
              type: "object",
              properties: {
                id: str,
                name: str,
                market: str,
                alias: str,
                sr_id: str,
                reference: str
              }
            },
            draft: {
              type: "object",
              properties: {
                team_id: str,
                year: int32,
                round: str,
                pick: str
              }
            },
            stats: {
              type: "object",
              properties: {
                [key]: body
              }
            }
          }
        },
        created_at: str,
        updated_at: str,
        deleted_at: { type: "string", nullable: true }
      }
    }
  }
});

const pregameSchema = (key, body) => ({
  type: "object",
  properties: {
    success: { type: "boolean" },
    response: {
      type: "object",
      properties: {
        game: {
          type: "object",
          properties: {
            id: int32,
            sr_id: str,
            sport: str,
            type: str
          }
        },
        card: {
          type: "object",
          properties: {
            id: int32,
            sr_id: str,
            away_sr_id: str,
            home_sr_id: str,
            sport: str,
            season: int32,
            segment: str,
            date: str,
            meta: {
              type: "object",
              properties: {
                id: str,
                date: str,
                sr_id: str,
                reference: str,
                home_points: int32,
                away_points: int32,
                home: {
                  type: "object",
                  properties: {
                    id: str,
                    sr_id: str,
                    reference: str
                  }
                },
                away: {
                  type: "object",
                  properties: {
                    id: str,
                    sr_id: str,
                    reference: str
                  }
                },
                sport: str,
                season: int32,
                segment: str,
                status: str
              }
            },
            created_at: str,
            updated_at: str,
            deleted_at: { ...str, nullable: true }
          }
        },
        cardData: {
          type: "array"
        }
      }
    }
  }
});

const getSchema = (tag, key, body) => {
  if (tag === "team") {
    return teamSchema(key, body);
  } else if (tag === "player") {
    return playerSchema(key, body);
  }
};

export const getFunc = (summary, id, key, body, tag, methodDescription) => {
  return {
    get: {
      tags: [tag],
      summary: `${tag} card - ${summary}`,
      description: methodDescription,
      operationId: `${id}`,
      // produces: ["application/json"],
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
        // "200": {
        //   description: "successful operation",
        //   schema: getSchema(tag, key, body)
        // },
        "200": {
          content: {
            "application/json": {
              description: "successful operation",
              schema: getSchema(tag, key, body)
            }
          }
        },
        "400": {
          content: {
            description: "Invalid ID supplied"
          }
        },
        "404": {
          content: {
            description: "Player not found"
          }
        }
      }
    }
  };
};

export const getFunc2 = (
  summary,
  id,
  key,
  body,
  tag,
  tag2,
  methodDescription
) => {
  return {
    get: {
      tags: [tag],
      summary: `${tag} card - ${summary}`,
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
        },
        {
          name: `${tag2}Id`,
          in: "path",
          description: `${tag2} Id from SR model`,
          type: "string",
          required: true
        }
      ],
      responses: {
        "200": {
          description: "successful operation",
          schema: getSchema(tag, key, body)
        },
        "400": { description: "Invalid ID supplied" },
        "404": { description: "Player not found" }
      }
    }
  };
};
