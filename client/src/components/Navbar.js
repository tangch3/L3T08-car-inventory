import { Link } from 'react-router-dom';

import React from 'react'

export const Navbar = () => {
  return (
    <div className = "navbar">
        <Link to="/">All Cars</Link>
        <Link to="/older-than-5">Older than 5 Years</Link>
        <Link to="/add-cars">Add Cars</Link>
    </div>
  )
}