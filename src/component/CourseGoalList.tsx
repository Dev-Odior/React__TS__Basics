import CourseGoal from "./CourseGoals";
import { CourseGoal as Goal } from "../App";

interface Goals {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: Goals) => {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              {goal.desc}
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
};
export default CourseGoalList;
