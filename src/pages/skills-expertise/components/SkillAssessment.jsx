import React from 'react';

const SkillAssessment = ({ assessments }) => {
  return (
    <div className="terminal-window p-6">
      <h3 className="text-xl font-bold text-terminal-accent mb-4">
        Skill Assessments
      </h3>
      <div className="space-y-4">
        {assessments.map((assessment, index) => (
          <div key={index} className="border-l-2 border-terminal-text/30 pl-4">
            <h4 className="font-bold text-terminal-text mb-1">
              {assessment.skill}
            </h4>
            <p className="text-terminal-text/60 text-sm">
              {assessment.platform} - Score: {assessment.score}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillAssessment;
