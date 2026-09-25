import WorksDetailsCard from '@/components/shared/WorksDetailsCard';
import { IWorkout } from '@/types/workType';
import React from 'react';

interface IWorkoutDetailsPageProps {
    params: Promise<{
        workId: string;
    }>;
}
const getWorkouts = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await response.json();
  return data;
};

const WorkoutDetailsPage = async ({params}: IWorkoutDetailsPageProps) => {
const {workId} = await params;
 const workoutsData = await getWorkouts();
 const workout = workoutsData.find((workout: IWorkout) => String(workout.id) === workId) as IWorkout;
console.log(workout, "workout");

    return (
        <div>
            <WorksDetailsCard workout={workout} />
        </div>
    );
}
export default WorkoutDetailsPage;