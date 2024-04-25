import React from 'react';
import { useParams } from 'react-router-dom';
import Alicia from './People/Alicia'; // Import components for each person
// Import other person components as needed

const PersonPage = () => {
  const { namePerson } = useParams();

  // Define a mapping of person names to their respective components
  const personComponents = {
    'alicia': <Alicia />,
    // Add other person components here
  };

  return (
    <div className="person-page">
      {/* Render the component based on the namePerson parameter */}
      {personComponents[namePerson.toLowerCase()] || <div>No page found for {namePerson}</div>}
    </div>
  );
}

export default PersonPage;
