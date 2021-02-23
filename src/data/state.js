let rerenderTree;

const state = {
  profileComponent: {
    posts: [
      {
        id: 1,
        message: "It`s my first post",
        likesCount: 12,
        src:
          "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg",
      },
      {
        id: 2,
        message: "My name is Cathrine",
        likesCount: 30,
        src:
          "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg",
      },
      {
        id: 3,
        message: "I want to tell you something",
        likesCount: 5,
        src:
          "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg",
      },
      {
        id: 4,
        message: "It`s my first post",
        likesCount: 45,
        src:
          "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg",
      },
      {
        id: 5,
        message: "Hey man",
        likesCount: 98,
        src:
          "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg",
      },
    ],
    inputFieldText: ""
  },
  dialogsComponent: {
    dialogs: [
      {
        id: 1,
        name: "Bob",
        src:
          "https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png",
      },
      {
        id: 2,
        name: "Jane",
        src:
          "https://i.pinimg.com/originals/15/ba/3f/15ba3f23910f25a4b45785fe380eab2e.jpg",
      },
      {
        id: 3,
        name: "Clark",
        src:
          "https://www.liga.net/images/general/2019/02/14/20190214174624-8569.png",
      },
      {
        id: 4,
        name: "Jennifer",
        src:
          "https://www.liga.net/images/general/2019/02/14/20190214174621-3508.png",
      },
      {
        id: 5,
        name: "Valentina",
        src:
          "https://i.pinimg.com/originals/a1/bd/3e/a1bd3e7ce6a54c31e97359538ab95c2b.jpg",
      },
      {
        id: 6,
        name: "Mark",
        src:
          "https://vjoy.cc/wp-content/uploads/2020/10/foto-krasivyh-parnej-na-avu-v-vk-16-let012.jpg",
      },
      {
        id: 7,
        name: "Kate",
        src: "https://klike.net/uploads/posts/2019-06/1561009159_3.jpg",
      },
      {
        id: 8,
        name: "Jeff",
        src:
          "http://s.citysites.ua/upload/images/news/intext/56e/9189f953a6/cba24062511ebf7aba932245eeac0d91.jpg",
      },
      {
        id: 9,
        name: "Ronda",
        src:
          "https://st.depositphotos.com/1005833/2249/i/600/depositphotos_22499805-stock-photo-portrait-of-young-beautiful-girl.jpg",
      },
      {
        id: 10,
        name: "Amanda",
        src:
          "https://mixnews.lv/wp-content/uploads/2020/03/19/2020-03-19-mixnews-30-beskonechno-krasivyh-devushek-9.jpg",
      },
    ],
    messages: [
      { id: 1, message: "Hello man", isOwner: true },
      { id: 2, message: "How are you?", isOwner: true },
      { id: 3, message: "I want to ask you something", isOwner: false },
      { id: 4, message: "Where are you disappeared?", isOwner: false },
      { id: 5, message: "Hey man", isOwner: true },
      { id: 6, message: "Hey man, are you kidding me?", isOwner: true },
    ],
  },
};

function addPost() {
    let newPost = {
    id: state.profileComponent.posts.length + 1,
    message: state.profileComponent.inputFieldText,
    likesCount: 0,
    src: "https://i.pinimg.com/236x/69/5e/04/695e042228525c5125200f6ff91a2bbe.jpg",
  };
  state.profileComponent.posts.push(newPost);
  state.profileComponent.inputFieldText = "";
  rerenderTree();
}

function changeNewPostText(text) {
  state.profileComponent.inputFieldText = text;
  rerenderTree();
}

function subscribe(observer) {
  rerenderTree = observer;
}

export {state as default, addPost, changeNewPostText, subscribe};
