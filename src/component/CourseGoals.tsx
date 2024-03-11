import { FC, ReactNode } from "react";

interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

// Method 1
// const CourseGoal = ({ title, children }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>Delete </button>
//     </article>
//   );
// };
// export default CourseGoal;

//Method 2
const CourseGoal: FC<CourseGoalProps> = ({ id, title, children, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete </button>
    </article>
  );
};
export default CourseGoal;
