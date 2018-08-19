const myIssues = () => {
  fetch('http://park-issues.herokuapp.com/', {
  method: 'GET',
  params: JSON.stringify({
    'user-id': 'leetcoder123',
  }),
  });
}
myIssues();