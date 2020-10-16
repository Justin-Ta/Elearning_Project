import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const HomeLayout =(props)=>{
    return <Fragment>
        <Header/>
        {props.children}
        <Footer/>
    </Fragment>
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
