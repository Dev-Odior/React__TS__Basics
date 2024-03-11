import { FormEvent, useRef } from "react";

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    e.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input ref={goal} type="text" id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input ref={summary} type="text" id="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};
export default NewGoal;
