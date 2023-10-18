import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: "https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG",
    user: USERS[0].user,
    likes: 7870,
    caption: "Good Things Take Time",
    profile_picture: USERS[0].image,
    Comments: [
      {
        user: "Bhushan Patil",
        comment: "Wow Beautiful!!",
      },
      {
        user: "Snehal",
        comment: "Wow Amaxing!!",
      },
    ],
  },
  {
    imageUrl: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
    user: USERS[1].user,
    likes: 7820,
    caption: "Good Things",
    profile_picture: USERS[1].image,
    Comments: [
      {
        user: "Anita",
        comment: "Beautiful!",
      },
      {
        user: "Snehal",
        comment: "chudail",
      },
    ],
  },
  {
    imageUrl: "https://lastfm.freetls.fastly.net/i/u/ar0/f1df7c3eb64df572d647ba70e5dfa795.jpg",
    user: USERS[2].user,
    likes: 7820,
    caption: "Good Things",
    profile_picture: USERS[2].image,
    Comments: [
      {
        user: "Anita",
        comment: "Beautiful!",
      },
      {
        user: "Snehal",
        comment: "chudail",
      },
    ],
  },
  {
    imageUrl: "https://images.hindustantimes.com/img/2022/08/07/550x309/cat_1659882617172_1659882628989_1659882628989.jpg",
    user: USERS[2].user,
    likes: 7820,
    caption: "Good Things",
    profile_picture: USERS[2].image,
    Comments: [
      {
        user: "Anita",
        comment: "Beautiful!",
      },
      {
        user: "Snehal",
        comment: "chudail",
      },
    ],
  },
];