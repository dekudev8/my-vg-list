// eslint-disable-next-line
const axios = require("axios");

exports.handler = async () => {
  try {
    return axios
      .post("https://api.igdb.com/v4/games", "fields name; limit 3;", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer g0xivg17jn08q9pvn6yl8lgflayb9m",
          "Client-ID": "2wjdel2at2j9l5vmpe4h7ikc4ur4rk",
        },
      })
      .then((res) => {
        return {
          statusCode: 200,
          body: res.data,
        };
      });
  } catch (e) {
    return {
      statusCode: 200,
      body: e,
    };
  }
};
