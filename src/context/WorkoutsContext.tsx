"use client";

import { IWorkout } from '@/types/workType';
import React, { createContext, ReactNode, SetStateAction, useState } from 'react';

interface IWorkoutContext {
  addPlan: IWorkout[];
  setAddPlan: React.Dispatch<SetStateAction<IWorkout[]>>;
  savedPlan: IWorkout[];
  setSavedPlan: React.Dispatch<SetStateAction<IWorkout[]>>;
}

export const WorkoutsContext = createContext<IWorkoutContext>( {} as IWorkoutContext
)

const WorkoutsProvider = ({ children }: { children: ReactNode}) => {
  const [addPlan, setAddPlan] = useState<IWorkout[]>([]);
  const [savedPlan, setSavedPlan] = useState<IWorkout[]>([]);

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
