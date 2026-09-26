"use client";
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IWorkout } from '@/types/workType';
import React, { useContext } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';


const SavedPlanButton = ({ workout }: { workout: IWorkout }) => {
    const { savedPlan, setSavedPlan} = useContext(WorkoutsContext)

    
const handleSavedPlan = () => {
  // Logic to add the workout to today's plan
  console.log("Workout added to today's plan", workout);
  setSavedPlan([...savedPlan, workout]);
  alert(`Workout "${workout.name}" saved for later!`);
}
    return (
        <div>
           <button className="bg-[#C2F800] text-black px-4 py-2 rounded-xl flex gap-2" onClick={handleSavedPlan}> <span className='pt-1'><FaRegCalendarAlt /></span>Save for later</button>
        </div>
    );
};

export default SavedPlanButton;