import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import FindPage from '../pages/FindPage';
import SavedProperties from '../pages/SavedProperties';
import Profile from '../pages/Profile';
import MyProperties from '../pages/MyProperties';
import PropertyPage from '../pages/PropertyPage';

const Authenticate = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/find_a_home' element={<FindPage />} />
        <Route path='/saved_properties' element={<SavedProperties />} />
        <Route path='/my_properties' element={<MyProperties />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/property/:id' element={<PropertyPage />} />
        <Route path='/new_property' element={'new property form'} />
        <Route path='/edit/property/:id' element={'Edit property'} />
      </Routes>
    </div>
  );
};

export default Authenticate;
