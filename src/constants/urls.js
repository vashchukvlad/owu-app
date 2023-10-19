const baseURL = 'https://jsonplaceholder.typicode.com';

const posts = '/posts';

const urls = {
  posts: {
    base: posts,
    byId: (id) => `${posts}/${id}`,
  },
  launches: {
    base: 'https://api.spacexdata.com/v3/launches/',
  },
};

export { baseURL, urls };
