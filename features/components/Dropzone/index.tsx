import React, { ReactNode, useRef } from 'react';
import { debounce } from 'lodash';
import { useDrop } from 'react-dnd'

interface DropZoneProps {
  children: any;
  type: string;
  dropzoneItem: any;
  isOverClassName?: string;
  className?: string;
  handleIsOver?: (dropzoneItem: any, sourceItem: any) => void;
  disabled?: boolean;
}

const Dropzone = (props: DropZoneProps) => {
    const { children, type, dropzoneItem, isOverClassName, disabled, 
      handleIsOver = () => {}, className
    } = props;
    const [{ canDrop, isOver, draggedItem }, drop] = useDrop(() => ({
      // The type (or types) to accept - strings or symbols
      accept: type,
      // Props to collect
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        draggedItem: monitor.getItem(),
      })
    }))

    const debouncedHandleIsOver = debounce(handleIsOver, 10);
    React.useEffect(() => {
      if (isOver) {
        debouncedHandleIsOver(dropzoneItem, draggedItem);
      }
    }, [isOver]);

    return (
      <div 
        ref={!disabled ? drop : null} 
        className={`
          ${className} 
          ${(isOver) ? isOverClassName : ''}`}
      >
          {children}
      </div>
    )
}

export default Dropzone;