import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      likeMovie: (_, { id, isLiked }, { cache }) => {
        //console.log(catch.writeData) 함수에서 가져온 것
        cache.writeData({
          // id : 타입 : 값
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked
          }
        });
      }
    }
  }
});

export default client;
