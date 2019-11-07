const path = require('path');
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allArticles: allContentfulFashionTwoArticles {
        nodes {
          slug
        }
      }
      allBags: allContentfulFashionTwoBags {
        nodes {
          productSlug
        }
      }
      allPants: allContentfulFashionTwoPants {
        nodes {
          productSlug
        }
      }
      allShoes: allContentfulFashionTwoShoes {
        nodes {
          productSlug
        }
      }
      allBook {
        nodes {
          slug
        }
      }
    }
  `);

  // create pages for Article Content Model
  data.allArticles.nodes.forEach(article => {
    createPage({
      path: `articles/${article.slug}`,
      component: path.resolve('./src/templates/Article.js'),
      context: {
        slug: article.slug,
      },
    });
  });

  // create page for each bag product and list them all in /products
  data.allBags.nodes.forEach(item => {
    createPage({
      path: `products/${item.productSlug}`,
      component: path.resolve('./src/templates/Bag.js'),
      context: {
        slug: item.productSlug,
      },
    });
  });

  // create page for each pants product and list them all in /products
  data.allPants.nodes.forEach(item => {
    createPage({
      path: `products/${item.productSlug}`,
      component: path.resolve('./src/templates/Pant.js'),
      context: {
        slug: item.productSlug,
      },
    });
  });

  // create page for each shoes product and list them all in /products
  data.allShoes.nodes.forEach(item => {
    createPage({
      path: `products/${item.productSlug}`,
      component: path.resolve('./src/templates/Shoe.js'),
      context: {
        slug: item.productSlug,
      },
    });
  });

  // create page for each book in FireStore and list them all inside the /books
  data.allBook.nodes.forEach(book => {
    createPage({
      path: `books/${book.slug}`,
      component: path.resolve('./src/templates/Book.js'),
      context: {
        slug: book.slug,
      },
    });
  });

  // blog template w/ pagination
  // const posts = data.posts.nodes;
  // const postsPerPage = 3;
  // const numPages = Math.ceil(posts.length / postsPerPage);

  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
  //     component: path.resolve('./src/templates/BlogListTemplate.js'),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   });
  // });
};
