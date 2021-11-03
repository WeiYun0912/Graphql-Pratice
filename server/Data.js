const UserList = [
  {
    id: 1,
    name: "wei",
    username: "weiwei",
    age: 20,
    nationality: "TAIWAN",
    friends: [
      {
        id: 2,
        name: "yun",
        username: "yunyun",
        age: 21,
        nationality: "TAIWAN",
      },
    ],
  },
  {
    id: 2,
    name: "yun",
    username: "yunyun",
    age: 21,
    nationality: "TAIWAN",
  },
  {
    id: 3,
    name: "wei",
    username: "weiwei",
    age: 26,
    nationality: "AMERICAN",
  },
  {
    id: 4,
    name: "yun",
    username: "yunyun",
    age: 27,
    nationality: "AMERICAN",
  },
];

const MovieList = [
  {
    id: 1,
    name: "WeiWei Adventure",
    year: "2021",
    isInTheaters: true,
  },
  {
    id: 2,
    name: "YunYun Adventure",
    year: "2020",
    isInTheaters: false,
  },
];

module.exports = { UserList, MovieList };
