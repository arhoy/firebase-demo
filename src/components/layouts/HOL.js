// HOL => Higher Order Layout => children is the layout to uuse

import React from 'react';
import { FirebaseContext, useAuth } from '../firebase';

const HOL = ({ children }) => {
  const { user, firebase, loading } = useAuth();
  return (
    <FirebaseContext.Provider value={{ user, firebase, loading }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default HOL;
