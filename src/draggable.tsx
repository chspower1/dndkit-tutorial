import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
interface DraggableProps {
  children: React.ReactNode;
  id: string;
}
const Draggable = ({ children, id }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  // console.log(transform);
  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef}>
      <button style={style} {...listeners} {...attributes}>
        {children}
      </button>
    </div>
  );
};
export default Draggable;
