import React from 'react';
import RootStore from '../stores/RootStore';

const RootStoreContext = React.createContext<RootStore | null>(null);

const RootStoreProvider: React.FC<{rootStore: RootStore}> = (props) => {
  return (
    <RootStoreContext.Provider value={props.rootStore}>
      {props.children}
    </RootStoreContext.Provider>
  );
};

const useRootStore = () => {
  const store = React.useContext(RootStoreContext);
  if (!store) {
    throw new Error('Forgot to wrap the app with rootstore provider');
  }
  return store;
};

export {useRootStore, RootStoreContext, RootStoreProvider};
