<script>
import Header from '../components/Header.vue';
import BlogPosts from '../components/BlogPosts.vue';

export default{
    props: ['id'],
    data(){
        return{
            blog: null
        }
    },
     mounted(){
        fetch('https://techcrunch.com/wp-json/wp/v2/posts/' + this.id)
        .then(response => response.json())
        .then(data => this.blog = data)
        .catch(error => console.log(error.message))
    },
}
</script>

<template>
    <div v-if="blog" class="blog-details">
        <h1 v-html="blog.title.rendered" ></h1>
        <p v-html="blog.content.rendered"></p>
        
    </div>
    <div v-else class="loading">
        <p>Loading Blog Details...</p>
    </div>
    <BlogPosts />
</template>

<style scoped>
.blog-details{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}
h1{
    font-size: 32px;
    margin-bottom: 23px;
}
.blog-details p{
    margin-bottom: 20px;
    color:#6E6E6E;
    word-spacing: 2px;
    font-size: 18px;
}
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
}
</style>
