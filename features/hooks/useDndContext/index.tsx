import { DndProvider, useDragLayer } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragState } from '@stonksfi/types';
import React, { createContext, useContext, useState } from 'react';

interface DndContext {
    dragCoord: { x: number; y: number };
    setDragCoord: (coord: { x: number; y: number }) => void;
}

const CustomDndContext = createContext<DndContext>({
    dragCoord: { x: 0, y: 0 },
    setDragCoord: () => {},
});

export const DndContextProvider = ({ children }: any) => {
    const [dragCoord, setDragCoord] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    
    const handleDrag = (e: any) => {
        setDragCoord({
          x: e.clientX,
          y: e.clientY 
        });
    }
    
    // Listen to drag event
    React.useEffect(() => {
      document.addEventListener('drag', handleDrag);

      return () => {
        document.removeEventListener('drag', handleDrag);
      }
    }, [])
    
    return (
        <CustomDndContext.Provider value={{ dragCoord, setDragCoord }}>
            <DndProvider backend={HTML5Backend}>{children}</DndProvider>
        </CustomDndContext.Provider>
    );
};

export const useDndMouseContext = () => useContext(CustomDndContext);
export const useDndContext = (type: string): DragState => {
    const { isDragging, itemType, item } = useDragLayer((monitor) => ({
        isDragging: monitor.isDragging(),
        itemType: monitor.getItemType(),
        item: monitor.getItem(),
    }));

    return { isDragging: type === itemType && isDragging, item };
}