import buildClient from '../api/buildClient';

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in.</h1>
  ) : (
    <h1>You are NOT signed in.</h1>
  );
};

LandingPage.getInitialProps = async ({
  req, // req with cookie from browser
}) => {
  const client = buildClient({ req });
  const { data } = await client.get('/api/users/currentuser');
  return data;
};
export default LandingPage;
