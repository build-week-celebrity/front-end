const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();
const token =
  "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(CORS());
let highScores = [
  {
    username: "Test User",
    score: "10",
    id: 1
  },
  {
    username: "Test User",
    score: "120",
    id: 2
  },
  {
    username: "Test User",
    score: "230",
    id: 3
  },
  {
    username: "Test User",
    score: "340",
    id: 4
  },
  {
    username: "Test User",
    score: "450",
    id: 5
  },
  {
    username: "Test User",
    score: "560",
    id: 6
  },
  {
    username: "Test User",
    score: "770",
    id: 7
  },
  {
    username: "Test User",
    score: "880",
    id: 8
  },
  {
    username: "Test User",
    score: "990",
    id: 9
  },
  {
    username: "Test User",
    score: "10",
    id: 10
  }
];
let celebrities = [
  {
    id: 1,

    name: "Chuck Berry",

    isAlive: 0,

    yearDied: 2017,

    ageDied: 77,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Chuck_Berry_1957.jpg"
  },

  {
    id: 2,

    name: "Paul McCartney",

    isAlive: 1,

    yearDied: null,

    ageDied: null,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Paul_McCartney_in_October_2018.jpg"
  },

  {
    id: 3,

    name: "Adam West",

    isAlive: 0,

    yearDied: 2017,

    ageDied: 88,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Adam_West_by_Gage_Skidmore_3.jpg"
  },

  {
    id: 4,

    name: "David Hasselhoff",

    isAlive: 1,

    yearDied: null,

    ageDied: null,

    imageURL: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hoff_3.jpg"
  },

  {
    id: 5,

    name: "Dick Van Dyke",

    isAlive: 1,

    yearDied: null,

    ageDied: null,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Mary_Poppins3.jpg"
  },

  {
    id: 6,

    name: "Roger Moore",

    isAlive: 0,

    yearDied: 2017,

    ageDied: 89,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sir_Roger_Moore_3.jpg"
  },

  {
    id: 7,

    name: "Charlton Heston",

    isAlive: 0,

    yearDied: 2008,

    ageDied: 84,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Charlton_Heston_in_Ben_Hur_trailer.jpg"
  },

  {
    id: 8,

    name: "Leonard Nimoy",

    isAlive: 0,

    yearDied: 2015,

    ageDied: 83,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Leonard_Nimoy_1975.jpg"
  },

  {
    id: 9,

    name: "William Shatner",

    isAlive: 1,

    yearDied: null,

    ageDied: null,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/William_Shatner_-_1958.jpg"
  },

  {
    id: 10,

    name: "Mary Tyler Moore",

    isAlive: 0,

    yearDied: 2017,

    ageDied: 80,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/Mary_Tyler_Moore_-_1978.jpg"
  },

  {
    id: 11,

    name: "Lucille Ball",

    isAlive: 0,

    yearDied: 1989,

    ageDied: 77,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/LDBALL1950s.jpg"
  },

  {
    id: 12,

    name: "Cindy Williams",

    isAlive: 1,

    yearDied: null,

    ageDied: null,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cindy_Williams.JPG"
  },

  {
    id: 13,

    name: "Penny Marshall",

    isAlive: 0,

    yearDied: 2018,

    ageDied: 75,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Penny_Marshall_1976.jpg"
  },

  {
    id: 14,

    name: "Goldie Hawn",

    isAlive: 1,

    yearDied: null,

    ageDied: null,

    imageURL:
      "https://en.wikipedia.org/wiki/Goldie_Hawn#/media/File:Goldie_Hawn_-_1978.jpg"
  },

  {
    id: 15,

    name: "Ted Danson",

    isAlive: 1,

    yearDied: null,

    ageDied: null,

    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Ted_Danson_2008_number_2.jpg"
  }
];

let user = [{ id: "", username: "", email: "", password: "" }];
let nextId = 22;

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/auth", (req, res) => {
  const { username, password } = req.body;
  if (username === "FIKS@ChasingTheFiks.Net" && password === "NotMyPassword") {
    req.loggedIn = true;
    setTimeout(() => {
      res.status(200).json({
        payload: token
      });
    }, 1000);
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.get("/api/celebrities", (req, res) => {
  res.send(celebrities);
});
app.get("/api/HighScores", authenticator, (req, res) => {
  res.send(highScores);
});
app.get("/api/users", authenticator, (req, res) => {
  res.send(user);
});
app.post("/api/users", (req, res) => {
  if (req.body.username !== undefined && req.body.email !== undefined) {
    const newuser = req.body;
    newuser.id = nextId;
    user.push(newuser);
    console.log(res);
  }
  nextId = nextId + 1;
  res.status(201).json(user);
});

app.put("/api/users/:id", authenticator, (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the user id");
  if (req.body.id === undefined || !req.username || !req.email) {
    res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
  }
  user = user.map(user => {
    if (`${user.id}` === req.id) {
      return req.body;
    }
    return user;
  });
  res.status(200).send(req.body);
});

app.delete("/api/users/:id", authenticator, (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the user id");
  user = user.filter(user => `${user.id}` !== req.params.id);
  res.status(202).send(req.params.id);
});

app.get("/", function(req, res) {
  res.send("App is working 👍");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
