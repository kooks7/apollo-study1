import React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
  }
`;
const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
`;

const Title = styled.div``;
const Subtitle = styled.div``;
const Description = styled.div``;

export default () => {
  //1. url에서 query 받아와서
  let { id } = useParams();
  id = parseInt(id);
  // 2. graphQL에 query,변수 보내고 데이터 받기
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });
  // 3. lodaing이면 로딩
  return (
    <Container>
      <Column>
        <Title>Name</Title>
        <Subtitle>English * 4.5</Subtitle>
        <Description>lorem ipsum alalala</Description>
      </Column>
    </Container>
  );
};
