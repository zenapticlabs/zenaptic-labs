import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";


export const MiddleBanner = () => {
    const middleBannerRef = useRef(null);
    useGSAP(() => {
        gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);
        if (!middleBannerRef.current) return;
        const q = gsap.utils.selector(middleBannerRef);
        console.log("asu", gsap);

        const path1 = q("#path-middlebanner-1")[0] as unknown as SVGPathElement;
        const rect1 = q("#rect-middlebanner-1")[0] as unknown as SVGRectElement;


        gsap.set([rect1], {
            transformOrigin: 'center center'
        })


        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.5,
            yoyo: true,
            defaults: {
                duration: 1,
                ease: "power2.inOut",
            },
        });

        tl.from(rect1, {
            motionPath: {
                path: path1,
                align: path1,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: 0.3,
                end: 1,
            },
            duration: 10,
            ease: "power1.inOut"
        })




    }, { scope: middleBannerRef });

    return (
        <div className="absolute left-15 top-0 w-full h-full pointer-events-none" ref={middleBannerRef}>
            <svg viewBox="-1 100 1440 747" fill="none" xmlns="http://www.w3.org/2000/svg">
            
                <path id="path-middlebanner-1" strokeWidth={1.5} d="M0 720.5V486.804H100.523 490.385 96.1052 486.804 100.523 486.804H515.931C520.349 486.804 523.931 483.222 523.931 478.804V280.294C523.931 275.875 527.513 272.294 531.931 272.294H1499.69C1504.11 272.294 1507.69 275.875 1507.69 280.294V737.684C1507.69 742.102 1504.11 745.684 1499.69 745.684L1363.88 745.684C1359.99 745.684 1356.84 742.532 1356.84 738.643V738.643V389.367C1356.84 384.949 1353.25 381.367 1348.84 381.367H1106.66C1102.24 381.367 1098.66 377.785 1098.66 373.367V167.025C1098.66 162.607 1102.24 159.025 1106.66 159.025H1530.76H1615.05C1619.47 159.025 1623.05 162.607 1623.05 167.025V668.514C1623.05 672.932 1619.47 676.514 1615.05 676.514H962.625C958.207 676.514 954.625 672.932 954.625 668.514V575.92" stroke="#DCDCDC" />

                <g filter="url(#filter0_d_176_3238)" id="rect-middlebanner-1">
                    <rect x="942.506" y="562.353" width="24" height="24" rx="4" fill="url(#paint1_linear_176_3238)" shapeRendering="crispEdges" />
                    <rect x="940.506" y="560.353" width="28" height="28" rx="6" stroke="white" strokeOpacity="0.4" strokeWidth="4" shapeRendering="crispEdges" />
                </g>
                <defs>
                    <filter id="filter0_d_176_3238" x="898.506" y="518.353" width="112" height="112" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_176_3238" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="16" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.701083 0 0 0 0 0.4725 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_176_3238" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_176_3238" result="shape" />
                    </filter>
                    <radialGradient id="paint0_radial_176_3238" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(954.505 483.898) rotate(90) scale(315.062 538.179)">
                        <stop stopColor="var(--banner-grid-fill)" />
                        <stop offset="1" stopColor="var(--banner-grid-fill)" />
                    </radialGradient>
                    <linearGradient id="paint1_linear_176_3238" x1="966.506" y1="574.353" x2="942.506" y2="574.353" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--banner-grid-fill)" />
                        <stop offset="1" stopColor="var(--banner-grid-stroke)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

    )
}