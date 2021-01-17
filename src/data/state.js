const state = {
  profileComponent: {
    posts: [
      { id: 1, message: "It`s my first post", likesCount: 12, src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg"},
      { id: 2, message: "My name is Cathrine", likesCount: 30, src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg"},
      { id: 3, message: "I want to tell you something", likesCount: 5, src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg"},
      { id: 4, message: "It`s my first post", likesCount: 45, src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg"},
      { id: 5, message: "Hey man", likesCount: 98, src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg"},
    ],
  },
  dialogsComponent: {
    dialogs:[
      {
        id: 1, name: "Bob", src: "https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png",
      },
      {
        id: 2, name: "Jane", src: "https://i.pinimg.com/originals/15/ba/3f/15ba3f23910f25a4b45785fe380eab2e.jpg",
      },
      {
        id: 3, name: "Clark", src: "https://www.liga.net/images/general/2019/02/14/20190214174624-8569.png",
      },
      {
        id: 4, name: "Jennifer", src: "https://www.liga.net/images/general/2019/02/14/20190214174621-3508.png",
      },
      {
        id: 5, name: "Valentina", src: "https://i.pinimg.com/originals/a1/bd/3e/a1bd3e7ce6a54c31e97359538ab95c2b.jpg",
      },
    ],
    messages:[
      {id: 1, message: "Hello man", isOwner: true },
      {id: 2, message: "How are you?", isOwner: true },
      {id: 3, message: "I want to ask you something", isOwner: false },
      {id: 4, message: "Where are you disappeared?", isOwner: false },
      {id: 5, message: "Hey man", isOwner: true },
      {id: 6, message: "Hey man, are you kidding me?", isOwner: true },
    ]
  }
};

export default state;