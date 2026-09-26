'use client';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IWorkout } from '@/types/workType';
import React, { useContext } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SavedPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { savedPlan, setSavedPlan } = useContext(WorkoutsContext);

  const isAdded = savedPlan.some((item: IWorkout) => item.id === workout.id);

  const handleSavedPlan = () => {
    if (isAdded) {
      setSavedPlan((prev) => prev.filter((item) => item.id !== workout.id));
    } else {
      setSavedPlan((prev) => [...prev, workout]);
      toast.success(`"${workout.name}" added to your saved plan`);
    }
  };
  return (
    <div>
      <button
        className="bg-[#C2F800] text-black px-4 py-2 rounded-xl flex gap-2"
        onClick={handleSavedPlan}
      >
        {isAdded ? (
          'Added'
        ) : (
          <>
            <span className="pt-1">
              <FaRegCalendarAlt />
            </span>
            Add to saved plan
          </>
        )}
      </button>
    </div>
  );
};

export default SavedPlanButton;
