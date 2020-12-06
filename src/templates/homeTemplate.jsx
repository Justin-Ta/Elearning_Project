import React, { Fragment, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';

const HomeLayout = (props) => {
  let location = useLocation();

    useEffect( () => {
        window.scrollTo(0, 0);
    }, [ location ] );

  return (
      <Fragment>
        <Header />
        {props.children}
        <Footer />
      </Fragment>
  )
}
export const HomeTemplate = ({ Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <HomeLayout>
            <Component {...propsRoute} />
          </HomeLayout>
        );
      }}
    />
  );
};
