import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from './components/calendar/calendar.jsx';

import './style.less';
  
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <Calendar/>
);