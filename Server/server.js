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
    name: "Brittany Murphy",
    dead: 1,
    image:
      "https://img2.looper.com/img/gallery/actors-you-may-not-know-are-dead/brittany-murphy-1520437010.jpg",
    id: 1
  },
  {
    name: "Jonathan Brandis",
    dead: 1,
    image:
      "https://img3.looper.com/img/gallery/actors-you-may-not-know-are-dead/jonathan-brandis-1520437010.jpg",
    id: 2
  },
  {
    name: "Brad Renfro",
    dead: 1,
    image:
      "https://img4.looper.com/img/gallery/actors-you-may-not-know-are-dead/brad-renfro-1520437010.jpg",
    id: 3
  },
  {
    name: "Lee Thompson Young",
    dead: 1,
    image:
      "https://img1.looper.com/img/gallery/actors-you-may-not-know-are-dead/lee-thompson-young-1520437010.jpg",
    id: 4
  },
  {
    namer: "Heather O'Rourke",
    dead: 1,
    image:
      "https://img2.looper.com/img/gallery/actors-you-may-not-know-are-dead/heather-orourke-1520437010.jpg",
    id: 5
  },
  {
    name: "Dana Plato",
    dead: 1,
    image:
      "https://img3.looper.com/img/gallery/actors-you-may-not-know-are-dead/dana-plato-1520437010.jpg",
    id: 6
  },
  {
    name: "Harold Ramis",
    dead: 1,
    image:
      "https://img4.looper.com/img/gallery/actors-you-may-not-know-are-dead/harold-ramis-1520437010.jpg",
    id: 7
  },
  {
    name: "Skye McCole Bartusiak",
    dead: 1,
    image:
      "https://img1.looper.com/img/gallery/actors-you-may-not-know-are-dead/skye-mccole-bartusiak-1520437010.jpg",
    id: 8
  },
  {
    name: "Dominique Dunne",
    dead: 1,
    image:
      "https://img2.looper.com/img/gallery/actors-you-may-not-know-are-dead/dominique-dunne-1520437010.jpg",
    id: 9
  },
  {
    name: "Lisa Robin Kelly",
    dead: 1,
    image:
      "https://img3.looper.com/img/gallery/actors-you-may-not-know-are-dead/lisa-robin-kelly-1520437010.jpg",
    id: 10
  },
  {
    name: "Thuy Trang",
    dead: 1,
    image:
      "https://img4.looper.com/img/gallery/actors-you-may-not-know-are-dead/thuy-trang-1520437010.jpg",
    id: 11
  },
  {
    name: "James Avery",
    dead: 1,
    image:
      "https://img2.looper.com/img/gallery/actors-you-may-not-know-are-dead/james-avery-1520437010.jpg",
    id: 12
  },
  {
    name: "Chris Penn",
    dead: 1,
    image:
      "https://img4.looper.com/img/gallery/actors-you-may-not-know-are-dead/chris-penn-1520437010.jpg",
    id: 13
  },
  {
    name: "Gary Coleman",
    dead: 1,
    image:
      "https://img3.looper.com/img/gallery/actors-you-may-not-know-are-dead/gary-coleman-1520437010.jpg",
    id: 14
  },
  {
    name: "Richard Attenborough",
    dead: 1,
    image:
      "https://img2.looper.com/img/gallery/actors-you-may-not-know-are-dead/richard-attenborough-1520437010.jpg",
    id: 15
  },
  {
    name: "Bernie Mac",
    dead: 1,
    image:
      "https://img1.looper.com/img/gallery/actors-you-may-not-know-are-dead/bernie-mac-1520437010.jpg",
    id: 16
  },
  {
    name: "Earl Hindman",
    dead: 1,
    image:
      "https://img4.looper.com/img/gallery/actors-you-may-not-know-are-dead/earl-hindman-1520437010.jpg",
    id: 17
  },
  {
    name: "Richard Bonehill",
    dead: 1,
    image: "",
    id: 18
  },
  {
    name: "Dana Hill",
    dead: 1,
    image: "",
    id: 19
  },
  {
    name: "Taylor Negron",
    dead: 1,
    image: "",
    id: 20
  },
  {
    name: "Michael Clarke Duncan",
    dead: 1,
    image: "",
    id: 21
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
