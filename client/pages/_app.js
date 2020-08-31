import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/buildClient';
import { Fragment } from 'react';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <Fragment>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </Fragment>
  );
};

AppComponent.getInitialProps = async ({ Component, ctx }) => {
  const { req } = ctx || {};
  const client = buildClient({ req });
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ req });
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
