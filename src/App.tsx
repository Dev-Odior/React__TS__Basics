import Header from "./component/Header";
import NewGoal from "./component/NewGoal";
import goalImg from "./assets/goals.jpg";

import "./App.css";
import { useState } from "react";
import CourseGoalList from "./component/CourseGoalList";

export interface CourseGoal {
  title: string;
  desc: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      desc: summary,
    };

    setGoals((prev) => {
      return [...prev, newGoal];
    });
  };

  const handleDeleteGoal = (id: number): void => {
    setGoals((prev) => {
      return prev.filter((goal) => {
        return goal.id !== id;
      });
    });
  };

  return (
    <main>
      <Header image={{ src: goalImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
