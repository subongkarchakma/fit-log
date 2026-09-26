"use client";
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IWorkout } from '@/types/workType';
import React, { useContext } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { toast } from 'react-toastify/unstyled';

const AddPlanButton = ({ workout }: { workout: IWorkout }) => {
    const { addPlan, setAddPlan} = useContext(WorkoutsContext)

    
const handleAddToPlan = () => {
  // Logic to add the workout to today's plan
  console.log("Workout added to today's plan", workout);
  setAddPlan([...addPlan, workout]);
  alert(`Workout "${workout.name}" added to today's plan!`);
}
    return (
        <div>
           <button className="bg-[#C2F800] text-black px-4 py-2 rounded-xl flex gap-2" onClick={handleAddToPlan}> <span className='pt-1'><FaRegCalendarAlt /></span>Add to Today&apos;s workout plan</button>
        </div>
    );
};

export default AddPlanButton;