import buildClient from '../api/buildClient';

const LandingPage = ({ currentUser }) => {
  console.log('currentUser', currentUser);
  return <h1>Landing page!</h1>;
};

LandingPage.getInitialProps = async ({
  req, // req with cookie from browser
}) => {
  const client = buildClient({ req });
  const { data } = await client.get('/api/users/currentuser');
  return data;
};
export default LandingPage;
