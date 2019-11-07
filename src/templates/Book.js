import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layouts/Layout';

import { P, H2 } from '../components/reusableStyles/typography/Typography';
import {
  Section,
  Container1200,
} from '../components/reusableStyles/sections/Sections';

const BookDiv = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  padding: 2rem;
`;

const StyleImage = styled(Img)`
  width: 20rem;
  height: 20rem;
`;

export const query = graphql`
  query getFullBook($slug: String!) {
    book: book(slug: { eq: $slug }) {
      id
      slug
      title
      summary
      localImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      author {
        name
      }
    }
  }
`;

const Book = ({ data }) => {
  return (
    <Layout>
      <Section>
        <Container1200>
          <BookDiv>
            <H2>{data.book.title}</H2>
            <P> By {data.book.author ? data.book.author.name : 'Anonymous'} </P>
            <h4> BOok Summary</h4>
            <StyleImage
              fluid={data.book.localImage.childImageSharp.fluid}
              alt={data.book.title}
            />
            <P> {data.book.summary} </P>
          </BookDiv>
        </Container1200>
      </Section>
      <pre> {JSON.stringify(data, null, 2)} </pre>
    </Layout>
  );
};

export default Book;
