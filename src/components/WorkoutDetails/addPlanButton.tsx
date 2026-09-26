"use client";
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IWorkout } from '@/types/workType';
import React, { useContext } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';


const AddPlanButton = ({ workout }: { workout: IWorkout }) => {

    const { addPlan, setAddPlan} = useContext(WorkoutsContext);

    const isAdded = addPlan.some(
    (item: IWorkout) => item.id === workout.id
  );

    const handleAddToPlan = () => {
       if(isAdded){
        setAddPlan((prev) =>
        prev.filter((item) => item.id !== workout.id)
      );
       } else {

          setAddPlan((prev) => [...prev, workout]);
     toast.success(`"${workout.name}" added to today's workout plan`);
       }


    }
    return (
        <div>
            <button onClick={handleAddToPlan} className="bg-[#C2F800] text-black px-4 py-2 rounded-xl flex gap-2">
            {isAdded ? ('Added') : ( <> <span className='pt-1'><FaRegCalendarAlt />
            </span>Add to Today&apos;s workout plan </>)} </button>
        </div>
    );
};

export default AddPlanButton;