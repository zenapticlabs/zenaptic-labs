import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from 'gsap/all';
import { MotionPathPlugin } from 'gsap/all';

export const useBannerAnimation = (bannerGridRef) => {
	useGSAP(
		() => {
			gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);
			if (!bannerGridRef.current) return;
			const q = gsap.utils.selector(bannerGridRef);

			const path1 = q('#path-1');
			const path2 = q('#path-2');

			const tl = gsap.timeline({
				repeat: -1,
				repeatDelay: 0.5,
				yoyo: true,
				defaults: {
					duration: 1,
					ease: 'power2.inOut',
				},
			});

			tl.to(path1, {
				drawSVG: '0%',
				duration: 1,
				ease: 'power2.inOut',
				onComplete: () => {
					gsap.to(path1, {
						drawSVG: '100%',
						duration: 1,
						ease: 'power2.inOut',
					});
				},
			});

			tl.to(path2, {
				drawSVG: '0%',
				duration: 1,
				ease: 'power2.inOut',
				onComplete: () => {
					gsap.to(path2, {
						drawSVG: '100%',
						duration: 1,
						ease: 'power2.inOut',
					});
				},
			});

			const path3 = q('#path-3')

		},
		{ scope: container }
	);
};
