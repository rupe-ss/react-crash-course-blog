import { createContext, useState, useEffect } from 'react';

//Custom Hook import
import useWindowSize from 'hooks/useWindowSize';

const DataContext = createContext({});

//Here I understand how it is working, DataProvider has a props children just like Layout.js has one.
// DataContext.Provider will provide the value to all the children that is wrapped with
// <DataProvider></DataProvider>
export const DataProvider = ({ children }) => {
    const { width } = useWindowSize();
    return (
        <DataContext.Provider value={{ width }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
