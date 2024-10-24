import React from 'react'
import { useEffect } from 'react'

const useTitle = ({ title }) => {
    useEffect(() => {
      document.title = `${title}`;
    }, [title]);  // Add 'title' as a dependency
    return null;
  };
  

export default useTitle