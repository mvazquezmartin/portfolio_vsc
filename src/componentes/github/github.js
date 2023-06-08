// const fetchGithub = () => {
//   fetch(`https://api.github.com/users/mvazquezmartin/events`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };


const fetchGithub = () => {
  let page = 1;
  let events = [];
  
  const fetchPage = () => {
    fetch(`https://api.github.com/users/mvazquezmartin/events?page=${page}&per_page=100`)
    .then((response) => {
      const linkHeader = response.headers.get('Link');
      const hasNextPage = linkHeader && linkHeader.includes('rel="next"');
      return response.json()
      .then((data) => {
        events = events.concat(data);
        if (hasNextPage) {
          page++;
          fetchPage();
        } else {
          console.log(events);
          console.log('Total de eventos:', events.length);
        }
      });
    })
    .catch((error) => console.log(error));
  };
  
  fetchPage();
};

export { fetchGithub };