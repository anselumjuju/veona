import gsap from 'gsap';

export const useScrollTo = () => {
	return (target: string, options = { duration: 1, ease: 'clipOutEase' }) => {
		gsap.to(window, {
			duration: options.duration,
			scrollTo: { y: target },
			ease: options.ease,
		});
	};
};
