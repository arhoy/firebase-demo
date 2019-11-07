import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/Layout';
import {
  ContainerCenterFlex,
  Section,
} from '../../components/reusableStyles/sections/Sections';
import { H2 } from '../../components/reusableStyles/typography/Typography';
import { ButtonStyle2 } from '../../components/reusableStyles/buttons/Button';
import NoStyleLink from '../../components/Links/NoStyleLink';
import HOL from '../../components/layouts/HOL';
import Navbar from '../../components/firebase-components/Navbar';

export const query = graphql`
  {
    allBook {
      nodes {
        title
        summary
        slug
        author {
          name
        }
      }
    }
  }
`;

const Div = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  width: 30rem;
  height: 30rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  & ${H2} {
    text-align: center;
  }
`;

const home = ({ data }) => {
  return (
    <HOL>
      <Layout>
        <Navbar />
        <Section>
          <H2> HOME </H2>
          <ContainerCenterFlex>
            {data.allBook.nodes.map(book => (
              <Div key={book.title}>
                <H2> {book.title}</H2>
                <ButtonStyle2>
                  <NoStyleLink to={`/books/${book.slug}`}>
                    Learn More
                  </NoStyleLink>
                </ButtonStyle2>
              </Div>
            ))}
          </ContainerCenterFlex>
        </Section>
      </Layout>
    </HOL>
  );
};

export default home;
