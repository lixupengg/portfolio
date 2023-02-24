import React, { ReactNode } from 'react';
import { useDndContext } from '@stonksfi/hooks';
import { useDrag } from 'react-dnd'
import { DraggableDivProps, DraggableDivState } from './types';

const DraggableDiv = (props: DraggableDivProps) => {
  const { children, type, item, placeholderStyle, disabled } = props;
  const existingDragContext = useDndContext(type);
  const { isDragging: existingIsDragging, item: existingDraggedItem } = existingDragContext;

  const [{ isDragging = false }, drag] = useDrag(() => ({
    type,
    item: {...item},
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  const isItemBeingDragged = (
    existingIsDragging && existingDraggedItem?.id === item?.id
  ) || isDragging;

  const draggableDivState: DraggableDivState = {
    isItemBeingDragged,
  };

  return (
    <>
      {React.cloneElement(children, {
        ref: !disabled ? drag : null, 
        className: isItemBeingDragged ? placeholderStyle : '',
        draggableDivState
      })}
    </>
  )
}

export default DraggableDiv;