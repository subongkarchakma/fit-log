import { WorkoutsContext } from '@/context/WorkoutsContext';
import { IWorkout } from '@/types/workType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa6';
import { IoIosTimer } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { VscFlame } from 'react-icons/vsc';
import { toast } from 'react-toastify';

const PlanCard = ({ workout }: { workout: IWorkout }) => {
  const { addPlan, setAddPlan } = useContext(WorkoutsContext);
  return (
    <div className="bg-[#15181F] border border-[#252A34] rounded-2xl p-4 mb-4 flex items-center gap-4">
      {/* Left - Image */}
      <div className="relative w-28 h-20 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={workout.image}
          alt={workout.name}
          width={120}
          height={120}
        />
      </div>

      {/* Middle - Info */}
      <div className="flex-1">
        <h2 className="text-white font-bold text-lg">{workout.name}</h2>

        <p className="text-[#8A92A0] text-sm mt-1">{workout.equipment}</p>

        <div className="flex items-center gap-4 mt-2 text-sm">
          <div className="flex gap-1">
            <p>
              <IoIosTimer />
            </p>
            <span className="text-[#9CA3AF]">{workout.duration} min</span>
          </div>

          <div className="flex gap-1">
            <p>
              <VscFlame />
            </p>
            <span className="text-[#9CA3AF]">
              {workout.caloriesBurned} kcal
            </span>
          </div>

          <div className="flex gap-1">
            <p className="p-1">
              <FaStar />
            </p>
            <p className="text-[#9CA3AF]"> {workout.rating}</p>
          </div>
        </div>
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center gap-3">
        <Link href={`/workouts/${workout.id}`}>
          <button className="border border-[#343A46] text-white px-4 py-2 rounded-xl text-sm">
            View Details
          </button>
        </Link>

        <button className="bg-[#C2F800] text-black px-4 py-2 rounded-xl text-sm font-semibold">
          ✓ Mark as Done
        </button>

        <button
          onClick={() => {
             toast.warning("Workout removed from your plan!");
            setAddPlan(addPlan.filter((item) => item.id !== workout.id));
          }}
          className="text-[#737B88] text-xl"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
