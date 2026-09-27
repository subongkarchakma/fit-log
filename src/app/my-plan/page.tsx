'use client';
import PlanCard from '@/components/my-plan/PlanCard';
import SaveCard from '@/components/my-plan/SaveCard';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IWorkout } from '@/types/workType';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlan = () => {
  const { addPlan, savedPlan } = useContext(WorkoutsContext);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">('duration');
  console.log(sortBy, 'sort by');

  const sortPlan = (workouts: IWorkout[]) => {
    const sortedWorkouts = [...workouts];
    if (sortBy === 'duration') {
      sortedWorkouts.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === 'calories') {
      sortedWorkouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    } else if (sortBy === 'rating') {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }
    return sortedWorkouts;
  }

  const sortedAddPlan = sortPlan(addPlan);
  const sortedSavedPlan = sortPlan(savedPlan);
  console.log(sortedAddPlan);
  console.log(sortedSavedPlan);

  const totalExercises = addPlan.length;

  const totalMinutes = addPlan.reduce(
    (total: number, workout: IWorkout) => total + workout.duration,
    0,
  );

  const totalCalories = addPlan.reduce(
    (total: number, workout: IWorkout) => total + workout.caloriesBurned,
    0,
  );
  return (
    <div className="container mx-auto">
       {/* My Plan section */}
      <h2 className="font-bold text-4xl py-5 ">My Plan</h2>
      <p>Cap of five lifts for today. Finish them, then load more!</p>

      <div className="bg-[#111317] border border-[#222630] rounded-2xl p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div>
            <p className="text-[#8A92A0]">Exercises</p>
            <h3 className="text-3xl font-bold text-white mt-2">
              {totalExercises}
            </h3>
          </div>

          <div>
            <p className="text-[#8A92A0]">Minutes</p>
            <h3 className="text-3xl font-bold text-white mt-2">
              {totalMinutes}
            </h3>
          </div>

          <div>
            <p className="text-[#8A92A0]">Calories</p>
            <h3 className="text-3xl font-bold text-white mt-2">
              {totalCalories}
            </h3>
          </div>
        </div>
      </div>
     

      <div className="relative">
        {/* Dropdown - right side */}
        <div className="absolute right-0 top-0 z-10">
          <select
            defaultValue="Sort By" className="select select-success"
            onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}
          >
            <option disabled>Sort By</option>
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>

        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's Plan"
            defaultChecked
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            {sortedAddPlan.length === 0 ? (
              <div className="container mx-auto text-center">
                <h3 className="font-bold text-4xl">NOTHING HERE YET..</h3>

                <p className="text-gray-500">
                  Browse the library and add a lift to get today moving!
                </p>

                <Link href="/workouts">
                  <button className="btn py-2 px-5 text-black rounded-2xl bg-[#C2F10D] mt-4">
                    Go to Workouts
                  </button>
                </Link>
              </div>
            ) : (
              sortedAddPlan.map((workout: IWorkout) => (
                <PlanCard key={workout.id} workout={workout} />
              ))
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Saved"
          />

          <div className="tab-content bg-base-100 border-base-300 p-6">
            {sortedSavedPlan.length === 0 ? (
              <div className="container mx-auto text-center">
                <h3 className="font-bold text-4xl">NOTHING HERE YET..</h3>

                <p className="text-gray-500">
                  Browse the library and add a lift to get today moving!
                </p>

                <Link href="/workouts">
                  <button className="btn py-2 px-5 text-black rounded-2xl bg-[#C2F10D] mt-4">
                    Go to Workouts
                  </button>
                </Link>
              </div>
            ) : (
              sortedSavedPlan.map((workout: IWorkout) => (
                <SaveCard key={workout.id} workout={workout} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
