import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';
import { IWorkout } from '@/types/workType';

const getWorkouts = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await response.json();
  return data;
};

const WorkoutsLibrary = async () => {
  const workoutsData = await getWorkouts();
  // console.log(workoutsData, "workoutsData");
  return (
    <section className="container mx-auto py-10">
      <h2 className="font-bold text-4xl py-4">The Library</h2>
      <p className="text-lg text-gray-300 mb-8">
        Twelve lifts covering every major muscle group
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workoutsData.map((workout: IWorkout) => {
          return <WorkoutCard key={workout.id} workout={workout} />;
        })}
      </div>
    </section>
  );
};

export default WorkoutsLibrary;
