<script>
// import BlogDetails from '@/views/BlogDetails.vue';
    // import { RouterLink } from 'vue-router'
    export default {
        data () {
            return{
                blogs:[]
            }
        },
        mounted(){
            fetch('https://techcrunch.com/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(data => this.blogs = data)
            .catch(error => console.log(error.message))
        },
       
    }
</script>

<template>
    <div v-if="blogs.length" class="blog-container">
        <div v-for="blog in blogs" :key="blog.id" class="blog-card">
            <img src="./icon/techcrunch.png" alt="techcrunch" class="card-header-image">
            <div class="blog-text">
                <div class="date-time">
                    <span v-html="blog.category"></span>
                    <span v-html="blog.date"></span>
                </div>

                <h2 v-html="blog.title.rendered"></h2>
                <p v-html="blog.excerpt.rendered"></p>
                
                <div class="blog-link">
                    <span>10 min read</span>
                    <RouterLink :to="{name: 'BlogDetails', params: {id: blog.id}}">
                        <button @click="scrollToTop()">
                            Read More
                            <img src="./icon/arrow.svg" alt="arrow">
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="loading">
        Loading Blog Posts...
    </div>
</template>

<style scoped>
.blog-container{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:50px 0 62px 0;
}
.blog-card{
    width: 350px;
    padding: 10px;
    border: 1px solid #F5F5F5;
    background-color: #ffffff;
    margin-bottom: 62px;
}
.card-header-image{
    margin-bottom: 16px;
    width: 330px;
    align-self: center;
}
.blog-text{
    display: flex;
    flex-direction: column;
}
.date-time{
    margin-bottom: 8px;
}
h2{
    font-size: 18px;
    margin-bottom: 8px;
}
p{
    font-size: 14px;
    color:#6E6E6E;
    line-height:21px;
}
.blog-link{
    display: flex;
    justify-content:space-between;
    font-size: 12px;
    margin-top: 20px;
}
button{
    color: #1473E6;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 12px;
}
.loading{
    display: flex;
    justify-content: center;
    font-size: 28px;
    min-height: 100vh;
}
</style>
