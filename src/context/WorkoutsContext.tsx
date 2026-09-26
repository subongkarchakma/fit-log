"use client";

import React, { createContext, ReactNode, useState } from 'react';
export const WorkoutsContext = createContext({});

const WorkoutsProvider = ({ children }: { children: ReactNode}) => {
  const [addPlan, setAddPlan] = useState([]);
  const [savedPlan, setSavedPlan] = useState([]);

  const sharedState = {
    addPlan,
    setAddPlan,
    savedPlan,
    setSavedPlan,
  };

  return (
    <WorkoutsContext.Provider value={sharedState}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
