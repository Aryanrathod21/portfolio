'use client'
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "NEXT.JS", percentage: 100 },
  { name: "TAILWINDCSS", percentage: 100 },
  { name: "REACT.JS", percentage: 100 },
  { name: "HTML/CSS", percentage: 90 },
  { name: "ANDROID", percentage: 80 },
  { name: "TYPESCRIPT", percentage: 90 },
  { name: "WordPress", percentage: 80 },
  { name: "C++", percentage: 70 },
  { name: "JAVA", percentage: 90 },  
  { name: "NODE JS", percentage: 80 },
  { name: "DSA", percentage: 70 },
];

const TechPercent = () => {
  return (
    <div className="relative h-fit bg-cover bg-center bg-no-repeat ]">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative p-4">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (inView) {
      setPercentage(skill.percentage);
    }
  }, [inView, skill.percentage]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-lg font-semibold text-black">{skill.name}</span>
        <span className="text-lg font-semibold text-black">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-400 h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TechPercent;
