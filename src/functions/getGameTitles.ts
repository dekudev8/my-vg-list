import { useState } from "react";
// import igdb from "igdb-api-node";

// this stuff has to move to a lambda, can't from frontend
/* const client = igdb(
  // colmby twitch dev client id
  "2wjdel2at2j9l5vmpe4h7ikc4ur4rk",
  // generated auth token
  "xg52p42ra9ru45cnbubr0alwnegtdx",
);*/

export const getGameTitles = (): string => {
  const [data] = useState(undefined);
  const [error] = useState(undefined);

  /*!(data || error) &&
    client
      .fields("name")
      .limit(50)
      .search("mario")
      .request("/games")
      .then((result) => setData(result.data))
      .catch((e) => setError(e));*/

  error && console.log(error);
  data && console.log(data);
  return data ? "Success!" : error ? "error" : "Loading...";
};
