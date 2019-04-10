<template>
  <Layout>
    <div class="page-body">
      <div class="section page-header has-text-centered">
        <div class="container">
          <span>{{ $page.blogPost.date }}</span>
          <h1 class="is-size-2 is-marginless">{{ $page.blogPost.title }}</h1>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">  
              <div class="article">
                <div class="content" v-html="$page.blogPost.content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
    }
  }
</page-query>
