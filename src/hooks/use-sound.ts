import React from "react";

export const useAudio = (url: any) => {
	// create isntance of audio
	const audio = new Audio(url);
	// create state for audio
	const [playing, setPlaying] = React.useState(false);

	// function to toggle play
	const toggle = () => setPlaying(!playing);

	// on mount and unmount, update playing state
	React.useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [audio, playing]);

	// return playing state and toggle function
	return { toggle };
};
