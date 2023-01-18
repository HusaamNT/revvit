const viewPosts = () =>
fetch('api/posts/',{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
});
console.log(viewPosts)
console.log(viewPosts.Bio)
console.log(viewPosts.createdAt)
const accountId = viewPosts.account_id

const 