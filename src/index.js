import React from "react";
import Clock from "./usingStates";
import ReactDOM from 'react-dom/client';
import Toggle from './eventHandle';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Clock />)
root.render(<Toggle />)