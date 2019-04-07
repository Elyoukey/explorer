import React from 'react';
import Home from './Home';
import Auth from '../../components/Auth'
import history from "../../core/history";

export default {
  path: '/home',
  action: async() => {
    return <Home />;
  },
};
