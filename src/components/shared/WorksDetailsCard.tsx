import { IWorkout } from '@/types/workType';
import Image from 'next/image';
import React from 'react';
import AddPlanButton from '../WorkoutDetails/addPlanButton';
import SavedPlanButton from '../WorkoutDetails/SavedPlanButton';

const WorksDetailsCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-2 bg-base-100 shadow-sm gap-4">
        <div>
          <Image
            className="rounded-2xl border-amber-500"
            src={workout.image}
            alt={workout.name}
            width={500}
            height={400}
          />
        </div>
        <div className="">
          <h2 className="card-title text-4xl">{workout.name}</h2>
          <p className="py-4">{workout.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {workout.muscleGroups.map((muscle: string, index: number) => (
              <span
                key={index}
                className="px-4 py-1 rounded-full bg-[#C2F800] text-[#000000] text-sm font-semibold"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr>
                  <th className=" p-2 text-left">EQUIPMENT</th>
                  <td className=" p-2 text-right">{workout.equipment}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">DIFFICULTY</th>
                  <td className=" p-2 text-right">{workout.difficulty}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">SETS</th>
                  <td className=" p-2 text-right">{workout.sets}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">REPS</th>
                  <td className=" p-2 text-right">{workout.reps}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">DURATION</th>
                  <td className=" p-2 text-right">{workout.duration}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">CALORIES</th>
                  <td className=" p-2 text-right">{workout.caloriesBurned}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">RATING</th>
                  <td className=" p-2 text-right">{workout.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="py-5">
            <h4 className="py-2 font-bold text-2xl">INSTRUCTIONS</h4>
            <ol className="list-decimal ml-6 space-y-2">
              <li>
                Lie on the bench with eyes under the bar and feet planted.
              </li>
              <li>Unrack with locked elbows and lower the bar to mid-chest.</li>
              <li>
                Press up in a slight arc until elbows lock without bouncing.
              </li>
              <li>
                Keep shoulder blades pinched and a natural arch in the back.
              </li>
            </ol>
          </div>

          <div className="flex gap-4">
            <AddPlanButton workout={workout} />
            <SavedPlanButton workout={workout} />
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksDetailsCard;
