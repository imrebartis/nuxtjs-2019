<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
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
          ]
        })
      }, 1000)
    })
      .then(data => {
        return data
      })
      .catch(e => {
        context.error(new Error())
      })
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
