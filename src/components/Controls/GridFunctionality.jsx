import {DndContext, closestCenter, MouseSensor, TouchSensor, DragOverlay, useSensor, useSensors} from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { Grid } from "../Sections/GridSection";
import { SortFunctionality } from "./SortFunctionality";
import { Image } from "../Resources/Image";

export default function GridFunctionality({items, setItems, activeId, setActiveId, selected, handleCheck, isCheck, handleFileChange}) {
  
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setItems((currentItems) => {
        const oldIndex = currentItems.indexOf(active.id);
        const newIndex = currentItems.indexOf(over.id);

        return arrayMove(currentItems, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid handleFileChange={handleFileChange}>
          {items.map((url, index) => (
            <SortFunctionality
              key={url}
              url={url}
              index={index}
              selected={selected}
              handleCheck={handleCheck}
              isCheck={isCheck}
              position={index}
            />
          ))}
        </Grid>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeId ? <Image url={activeId} index={items.indexOf(activeId)} /> : null}
      </DragOverlay>
    </DndContext>
  );
}
