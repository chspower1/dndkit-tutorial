import { useEffect, useState } from "react";
import "./App.css";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Droppable from "./droppable";
import Draggable from "./draggable";

function App() {
  function handleDragEnd(event: DragEndEvent) {
    console.log(event);
    const { activatorEvent } = event;
    // if (event.over && event.over.id === "droppable") {

    // }
  }
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  }, []);
  return (
    <>
      <div
        draggable
        onDrag={(e) => {
          // console.log(e);
          if (e.screenX === 0 || e.screenY === 0) return;
          setTranslate({ x: e.clientX, y: e.clientY });
        }}
        onDragEnd={() => setTranslate((prev) => prev)}
        style={{
          transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
          background: "red",
          position: "absolute",
        }}
      >
        123
      </div>
      {/* <DndContext onDragEnd={handleDragEnd}>
        <Draggable id={"1"}>1</Draggable>
        <Droppable id="2">2</Droppable>
        <Droppable id="3">3</Droppable>
      </DndContext> */}
    </>
  );
}

export default App;
