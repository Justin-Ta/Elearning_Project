import React, {Fragment} from 'react'
import {Route} from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
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
