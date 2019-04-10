<template>
  <Layout class="blog">
    <div class="page-body">
      <div class="section page-header">
        <div class="container">
          <h1 class="is-size-2 is-marginless">Articles</h1>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="articles-list columns is-multiline">

            <div class="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
              <router-link class="np-article" :to="node.path">
                <div class="img-wrapper">
                  <g-image :src="node.image" class="featured-image"/>
                </div>
                <div class="inner">
                  <h2 class="is-size-5" v-html="node.title"/>
                  <div class="desc" v-html="node.description"/>
                </div>
                <div class="date" v-html="node.date"/>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
          image
        }
      }
    }
  }
</page-query>

