import CourseGoal from "./CourseGoals";
import { CourseGoal as Goal } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

interface Goals {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: Goals) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet, start adding some.
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collection a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal
                id={goal.id}
                title={goal.title}
                onDelete={onDeleteGoal}
              >
                {goal.desc}
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default CourseGoalList;
