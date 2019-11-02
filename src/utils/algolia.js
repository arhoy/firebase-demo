const productQuery = `

{
    allContentfulFashionTwoPants {
      nodes {
        productName
        shortDescription
        tags
      }
    }
    allContentfulFashionTwoBags {
      nodes {
        productName
        shortDescription
        tags
      }
    }
      allContentfulFashionTwoShoes {
      nodes {
        productName
        shortDescription
        tags
      }
    }
  }
  
`;

const queries = [
  {
    query: productQuery,
    transformer: ({ data }) =>
      data.allContentfulFashionTwoPants.nodes.map(node),
  },
];

module.exports = queries;
