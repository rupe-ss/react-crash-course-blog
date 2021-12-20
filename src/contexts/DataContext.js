import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

//Here I understand how it is working, DataProvider has a props children just like Layout.js has one.
// DataContext.Provider will provide the value to all the children that is wrapped with
// <DataProvider></DataProvider>
export const DataProvider = ({ children }) => {
    return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataContext;
