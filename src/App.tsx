import { useState } from "react";
import "./App.css";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Droppable from "./droppable";
import Draggable from "./draggable";

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  function handleDragEnd(event: DragEndEvent) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
    </DndContext>
  );
}

export default App;
