import React, { useEffect, useState } from 'react';

export interface TrackResizeProps {
	ref: React.RefObject<HTMLElement>;
}

export function useTrackResize(props: TrackResizeProps) {
	const { ref } = props;
	const [width, setWidth] = useState('300');
	const [height, setHeight] = useState('300');
	
	/* =========================== Tracking width & height =========================== */
  	// https://stackoverflow.com/questions/58222004/how-to-get-parent-width-height-in-react-using-hooks
	const handleResize = (width: number, height: number) => {
		setWidth(width.toString());
		setHeight(height.toString());
	};

	useEffect(() => {
		const resizeObserver = new ResizeObserver((event) => {
		  // Depending on the layout, you may need to swap inlineSize with blockSize
		  // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
		  handleResize(event[0].contentBoxSize[0].inlineSize, event[0].contentBoxSize[0].blockSize);
		});
	
		if (ref && ref.current) {
		  resizeObserver.observe(ref.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	  }, [ref]);

	return { width, height };
}

export default useTrackResize;