import React from "react";

export const useAudio = (url: string) => {
	const audio = new Audio(url);
	const [playing, setPlaying] = React.useState(false);

	const toggle = () => setPlaying(!playing);

	React.useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [audio, playing]);

	// return playing state and toggle function
	return { toggle };
};
