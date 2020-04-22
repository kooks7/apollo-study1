import React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  //1. url에서 query 받아와서
  let { id } = useParams();
  id = parseInt(id);
  // 2. graphQL에 query,변수 보내고 데이터 받기
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });
  // 3. lodaing이면 로딩
  if (loading) {
    return 'loading';
  }
  // data있으면 데이터 가져오기
  if (data && data.movie) {
    return data.movie.title;
  }
};
