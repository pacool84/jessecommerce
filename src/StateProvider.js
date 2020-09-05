import React, { createContext, useContext, useReducer } from "react";

/* Se crea la capa de datos */
export const StateContext = createContext();

/* Construir el Provider */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider valuer={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
