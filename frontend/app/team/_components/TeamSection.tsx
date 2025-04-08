import React from 'react';
import TEAM_DATA from './TeamData';
import Image from 'next/image';

const TeamSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3  lg:gap-2  md:px:24 px-4 justify-center items-center my-20">
      {TEAM_DATA.map((team, i) => (
        <div key={i}>
          <Image
            src={team.picture}
            alt="profile picture"
            width={300}
            height={200}
            className="justify-center items-center mx-auto rounded-2xl w-[330px] h-[330px] object-center object-cover"
          />
          <div className="flex flex-col gap-2 justify-center items-center my-2">
            <span className="text-xl">{team.name}</span>
            <span className="text-lg">{team.designation}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
