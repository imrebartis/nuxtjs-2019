import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'first post',
                previewText: 'first post yo',
                thumbnail:
                  'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
              },
              {
                id: '2',
                title: 'second post',
                previewText: 'This is the second post!',
                thumbnail:
                  'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
              }
            ])
            resolve()
          }, 1000)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
