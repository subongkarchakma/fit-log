'use client';
import WorkoutCard from '@/components/shared/WorkoutCard';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IWorkout } from '@/types/workType';
import React, { useContext } from 'react';

const MyPlan = () => {
  const { addPlan, savedPlan } = useContext(WorkoutsContext);
  console.log(addPlan, savedPlan);
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-4xl text-center bg-yellow-300 py-10 ">
        {' '}
        My Plan
      </h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {addPlan.length === 0 ? (
            <p className="text-center text-gray-500">
              No workouts added to today&apos;s plan.
            </p>
          ) : (
            addPlan.map((workout: IWorkout) => {
              return <WorkoutCard key={workout.id} workout={workout} />;
            })
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {savedPlan.length === 0 ? (
            <div className="container mx-auto text-center">
              <h3 className="font-bold text-4xl">NOTHING HERE YET..</h3>
              <p className=" text-gray-500">
                Browse the library and add add a lift to get today moving!
              </p>
              <button className="btn py-2 px-5 text-black rounded-2xl bg-[#C2F10D] mt-4">
                Go to Workouts
              </button>
            </div>
          ) : (
            savedPlan.map((workout: IWorkout) => {
              return <WorkoutCard key={workout.id} workout={workout} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
