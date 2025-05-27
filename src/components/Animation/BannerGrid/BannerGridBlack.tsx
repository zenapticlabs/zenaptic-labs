import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import "./BannerGrid.css"; 
const BannerGridBlack = () => {

    const bannerGridRef = useRef(null);
    const container = useRef(null);
    useGSAP(() => {
        gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);
        console.log("gsap", gsap);
        if (!bannerGridRef.current) return;
        const q = gsap.utils.selector(bannerGridRef);

        const path1 = q("#path-1")[0] as unknown as SVGPathElement;
        const path2 = q("#path-2")[0] as unknown as SVGPathElement;
        const rect1 = q("#rect-1")[0];
        const rect2 = q("#rect-2")[0];
        const rect3 = q("#rect-3")[0];

        gsap.set([rect1, rect2], {
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

        const tl2 = gsap.timeline({
            repeat: -1,
            repeatDelay: 0.5,
            yoyo: true,
            defaults: {
                duration: 1,
                ease: "power2.inOut"
            }
        })

        gsap.set([path1, path2], { drawSVG: "100% 100%" });


        tl.from(rect1, {
            motionPath: {
                path: path1,
                align: path1,
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            duration: 3,
            ease: "power1.inOut"
        })
            .to(path1, {
                drawSVG: "0% 100%",
                duration: 3,
                ease: "power1.inOut"

            }, '<')
            .from(rect2, {
                motionPath: {
                    path: path1,
                    align: path1,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                    start: -1,
                    end: 0
                },
                duration: 3,
                ease: "power1.inOut"
            })

        tl2
            .to(path2, {
                drawSVG: "0% 100%",
                duration: 3,
                ease: "power1.inOut"
            })

            .from(rect3, {
                motionPath: {
                    path: path2,
                    align: path2,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                    start: -1,
                    end: 0
                },
                duration: 3,
                ease: "power1.inOut"
            })
            .to(path2, {
                drawSVG: "0% 0%",
                duration: 3,
                ease: "power1.inOut"
            })

    }, { scope: container }); // <-- scope is for selector text (optional)

    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full banner-grid" ref={bannerGridRef}>
            <svg  viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <g clip-path="url(#clip0_181_9808)">
                    <g opacity="0.1">
                        <rect x="0.5" y="-84.5" width="133.104" height="133.104" stroke="url(#paint0_linear_181_9808)" />
                        <rect x="133.605" y="-84.5" width="133.104" height="133.104" stroke="url(#paint1_linear_181_9808)" />
                        <rect x="266.709" y="-84.5" width="133.104" height="133.104" stroke="url(#paint2_linear_181_9808)" />
                        <rect x="399.812" y="-84.5" width="133.104" height="133.104" stroke="url(#paint3_linear_181_9808)" />
                        <rect x="532.918" y="-84.5" width="133.104" height="133.104" stroke="url(#paint4_linear_181_9808)" />
                        <rect x="666.023" y="-84.5" width="133.104" height="133.104" stroke="url(#paint5_linear_181_9808)" />
                        <rect x="799.127" y="-84.5" width="133.104" height="133.104" stroke="url(#paint6_linear_181_9808)" />
                        <rect x="932.23" y="-84.5" width="133.104" height="133.104" stroke="url(#paint7_linear_181_9808)" />
                        <rect x="1065.34" y="-84.5" width="133.104" height="133.104" stroke="url(#paint8_linear_181_9808)" />
                        <rect x="1198.44" y="-84.5" width="133.104" height="133.104" stroke="url(#paint9_linear_181_9808)" />
                        <rect x="1331.54" y="-84.5" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="1331.54" y="-84.5" width="133.104" height="133.104" stroke="url(#paint10_linear_181_9808)" />
                        <rect x="0.5" y="48.6045" width="133.104" height="133.104" stroke="url(#paint11_linear_181_9808)" />
                        <rect x="133.605" y="48.6045" width="133.104" height="133.104" stroke="url(#paint12_linear_181_9808)" />
                        <rect x="266.709" y="48.6045" width="133.104" height="133.104" stroke="url(#paint13_linear_181_9808)" />
                        <rect x="399.812" y="48.6045" width="133.104" height="133.104" stroke="url(#paint14_linear_181_9808)" />
                        <rect x="532.918" y="48.6045" width="133.104" height="133.104" stroke="url(#paint15_linear_181_9808)" />
                        <rect x="666.023" y="48.6045" width="133.104" height="133.104" stroke="url(#paint16_linear_181_9808)" />
                        <rect x="799.127" y="48.6045" width="133.104" height="133.104" stroke="url(#paint17_linear_181_9808)" />
                        <rect x="932.23" y="48.6045" width="133.104" height="133.104" stroke="url(#paint18_linear_181_9808)" />
                        <rect x="1065.34" y="48.6045" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="1065.34" y="48.6045" width="133.104" height="133.104" stroke="url(#paint19_linear_181_9808)" />
                        <rect x="1198.44" y="48.6045" width="133.104" height="133.104" stroke="url(#paint20_linear_181_9808)" />
                        <rect x="1331.54" y="48.6045" width="133.104" height="133.104" stroke="url(#paint21_linear_181_9808)" />
                        <rect x="0.5" y="181.709" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="0.5" y="181.709" width="133.104" height="133.104" stroke="url(#paint22_linear_181_9808)" />
                        <rect x="133.605" y="181.709" width="133.104" height="133.104" stroke="url(#paint23_linear_181_9808)" />
                        <rect x="266.709" y="181.709" width="133.104" height="133.104" stroke="url(#paint24_linear_181_9808)" />
                        <rect x="399.812" y="181.709" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="399.812" y="181.709" width="133.104" height="133.104" stroke="url(#paint25_linear_181_9808)" />
                        <rect x="532.918" y="181.709" width="133.104" height="133.104" stroke="url(#paint26_linear_181_9808)" />
                        <rect x="666.023" y="181.709" width="133.104" height="133.104" stroke="url(#paint27_linear_181_9808)" />
                        <rect x="799.127" y="181.709" width="133.104" height="133.104" stroke="url(#paint28_linear_181_9808)" />
                        <rect x="932.23" y="181.709" width="133.104" height="133.104" stroke="url(#paint29_linear_181_9808)" />
                        <rect x="1065.34" y="181.709" width="133.104" height="133.104" stroke="url(#paint30_linear_181_9808)" />
                        <rect x="1198.44" y="181.709" width="133.104" height="133.104" stroke="url(#paint31_linear_181_9808)" />
                        <rect x="1331.54" y="181.709" width="133.104" height="133.104" stroke="url(#paint32_linear_181_9808)" />
                        <rect x="0.5" y="314.813" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="0.5" y="314.813" width="133.104" height="133.104" stroke="url(#paint33_linear_181_9808)" />
                        <rect x="133.605" y="314.813" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="133.605" y="314.813" width="133.104" height="133.104" stroke="url(#paint34_linear_181_9808)" />
                        <rect x="266.709" y="314.813" width="133.104" height="133.104" stroke="url(#paint35_linear_181_9808)" />
                        <rect x="399.812" y="314.813" width="133.104" height="133.104" stroke="url(#paint36_linear_181_9808)" />
                        <rect x="532.918" y="314.813" width="133.104" height="133.104" stroke="url(#paint37_linear_181_9808)" />
                        <rect x="666.023" y="314.813" width="133.104" height="133.104" stroke="url(#paint38_linear_181_9808)" />
                        <rect x="799.127" y="314.813" width="133.104" height="133.104" stroke="url(#paint39_linear_181_9808)" />
                        <rect x="932.23" y="314.813" width="133.104" height="133.104" stroke="url(#paint40_linear_181_9808)" />
                        <rect x="1065.34" y="314.813" width="133.104" height="133.104" stroke="url(#paint41_linear_181_9808)" />
                        <rect x="1198.44" y="314.813" width="133.104" height="133.104" stroke="url(#paint42_linear_181_9808)" />
                        <rect x="1331.54" y="314.813" width="133.104" height="133.104" stroke="url(#paint43_linear_181_9808)" />
                        <rect x="0.5" y="447.918" width="133.104" height="133.104" stroke="url(#paint44_linear_181_9808)" />
                        <rect x="133.605" y="447.918" width="133.104" height="133.104" stroke="url(#paint45_linear_181_9808)" />
                        <rect x="266.709" y="447.918" width="133.104" height="133.104" stroke="url(#paint46_linear_181_9808)" />
                        <rect x="399.812" y="447.918" width="133.104" height="133.104" stroke="url(#paint47_linear_181_9808)" />
                        <rect x="532.918" y="447.918" width="133.104" height="133.104" stroke="url(#paint48_linear_181_9808)" />
                        <rect x="666.023" y="447.918" width="133.104" height="133.104" stroke="url(#paint49_linear_181_9808)" />
                        <rect x="799.127" y="447.918" width="133.104" height="133.104" stroke="url(#paint50_linear_181_9808)" />
                        <rect x="932.23" y="447.918" width="133.104" height="133.104" stroke="url(#paint51_linear_181_9808)" />
                        <rect x="1065.34" y="447.918" width="133.104" height="133.104" stroke="url(#paint52_linear_181_9808)" />
                        <rect x="1198.44" y="447.918" width="133.104" height="133.104" stroke="url(#paint53_linear_181_9808)" />
                        <rect x="1331.54" y="447.918" width="133.104" height="133.104" stroke="url(#paint54_linear_181_9808)" />
                        <rect x="0.5" y="581.022" width="133.104" height="133.104" stroke="url(#paint55_linear_181_9808)" />
                        <rect x="133.605" y="581.022" width="133.104" height="133.104" stroke="url(#paint56_linear_181_9808)" />
                        <rect x="266.709" y="581.022" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="266.709" y="581.022" width="133.104" height="133.104" stroke="url(#paint57_linear_181_9808)" />
                        <rect x="399.812" y="581.022" width="133.104" height="133.104" stroke="url(#paint58_linear_181_9808)" />
                        <rect x="532.918" y="581.022" width="133.104" height="133.104" stroke="url(#paint59_linear_181_9808)" />
                        <rect x="666.023" y="581.022" width="133.104" height="133.104" stroke="url(#paint60_linear_181_9808)" />
                        <rect x="799.127" y="581.022" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="799.127" y="581.022" width="133.104" height="133.104" stroke="url(#paint61_linear_181_9808)" />
                        <rect x="932.23" y="581.022" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="932.23" y="581.022" width="133.104" height="133.104" stroke="url(#paint62_linear_181_9808)" />
                        <rect x="1065.34" y="581.022" width="133.104" height="133.104" stroke="url(#paint63_linear_181_9808)" />
                        <rect x="1198.44" y="581.022" width="133.104" height="133.104" stroke="url(#paint64_linear_181_9808)" />
                        <rect x="1331.54" y="581.022" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="1331.54" y="581.022" width="133.104" height="133.104" stroke="url(#paint65_linear_181_9808)" />
                        <rect x="0.5" y="714.127" width="133.104" height="133.104" stroke="url(#paint66_linear_181_9808)" />
                        <rect x="133.605" y="714.127" width="133.104" height="133.104" stroke="url(#paint67_linear_181_9808)" />
                        <rect x="266.709" y="714.127" width="133.104" height="133.104" stroke="url(#paint68_linear_181_9808)" />
                        <rect x="399.812" y="714.127" width="133.104" height="133.104" stroke="url(#paint69_linear_181_9808)" />
                        <rect x="532.918" y="714.127" width="133.104" height="133.104" stroke="url(#paint70_linear_181_9808)" />
                        <rect x="666.023" y="714.127" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="666.023" y="714.127" width="133.104" height="133.104" stroke="url(#paint71_linear_181_9808)" />
                        <rect x="799.127" y="714.127" width="133.104" height="133.104" stroke="url(#paint72_linear_181_9808)" />
                        <rect x="932.23" y="714.127" width="133.104" height="133.104" stroke="url(#paint73_linear_181_9808)" />
                        <rect x="1065.34" y="714.127" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="1065.34" y="714.127" width="133.104" height="133.104" stroke="url(#paint74_linear_181_9808)" />
                        <rect x="1198.44" y="714.127" width="133.104" height="133.104" fill="#7C7C7C" fill-opacity="0.4" />
                        <rect x="1198.44" y="714.127" width="133.104" height="133.104" stroke="url(#paint75_linear_181_9808)" />
                        <rect x="1331.54" y="714.127" width="133.104" height="133.104" stroke="url(#paint76_linear_181_9808)" />
                    </g>
                    {/* <rect x="1440" y="-84" width="144" height="1440" transform="rotate(90 1440 -84)" fill="url(#paint77_linear_181_9808)" /> */}
                    <g clip-path="url(#clip1_181_9808)">
                        <path d="M1331.29 400.296V447.464H1198.6V314.784H1245.77V400.296H1331.29Z" fill="#121212" />
                        <path d="M1331.29 314.784H1278.7V367.373H1331.29V314.784Z" fill="#121212" />
                        <path d="M1151.43 580.156H1198.6V447.465H1065.91V494.645H1151.43V580.156Z" fill="#121212" />
                        <path d="M1118.5 527.579H1065.91V580.168H1118.5V527.579Z" fill="#121212" />
                        <path opacity="0.5" d="M665.154 447.78H400.126V714.898H-162.354" stroke="url(#paint78_linear_181_9808)" stroke-width="2" id="path-2" />
                        <path d="M947.188 49.1907H1064.85V181.984H1478.36" stroke="url(#paint79_linear_181_9808)" stroke-width="2" id="path-1" />
                    </g>
                    <g filter="url(#filter0_d_181_9808)" id="rect-2">
                        <rect x="1186.94" y="168.209" width="24" height="24" rx="4" fill="var(--banner-grid-fill)"  shape-rendering="crispEdges" />
                        <rect x="1184.94" y="166.209" width="28" height="28" rx="6" stroke="var(--banner-grid-stroke)" stroke-opacity="0.4" stroke-width="4" shape-rendering="crispEdges" />
                    </g>
                    <g filter="url(#filter1_d_181_9808)" id="rect-1">
                        <rect x="920.73" y="36.1045" width="24" height="24" rx="4" fill="var(--banner-grid-fill)" shape-rendering="crispEdges" />
                        <rect x="918.73" y="34.1045" width="28" height="28" rx="6" stroke="var(--banner-grid-fill)" stroke-opacity="0.4" stroke-width="4" shape-rendering="crispEdges" />
                    </g>
                    <g filter="url(#filter2_d_181_9808)" id="rect-3">
                        <rect x="655.5" y="434.418" width="24" height="24" rx="4" fill="var(--banner-grid-fill)" shape-rendering="crispEdges" />
                        <rect x="653.5" y="432.418" width="28" height="28" rx="6" stroke="var(--banner-grid-stroke)" stroke-opacity="0.4" stroke-width="4" shape-rendering="crispEdges" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_181_9808" x="1154.94" y="136.209" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_181_9808" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_181_9808" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_181_9808" result="shape" />
                    </filter>
                    <filter id="filter1_d_181_9808" x="888.73" y="4.10449" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_181_9808" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_181_9808" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_181_9808" result="shape" />
                    </filter>
                    <filter id="filter2_d_181_9808" x="623.5" y="402.418" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_181_9808" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_181_9808" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_181_9808" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_181_9808" x1="67.0522" y1="-85" x2="67.0522" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_181_9808" x1="200.158" y1="-85" x2="200.158" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_181_9808" x1="333.261" y1="-85" x2="333.261" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_181_9808" x1="466.365" y1="-85" x2="466.365" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_181_9808" x1="599.47" y1="-85" x2="599.47" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_181_9808" x1="732.576" y1="-85" x2="732.576" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_181_9808" x1="865.679" y1="-85" x2="865.679" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_181_9808" x1="998.783" y1="-85" x2="998.783" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_181_9808" x1="1131.89" y1="-85" x2="1131.89" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint9_linear_181_9808" x1="1264.99" y1="-85" x2="1264.99" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint10_linear_181_9808" x1="1398.1" y1="-85" x2="1398.1" y2="49.1045" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint11_linear_181_9808" x1="67.0522" y1="48.1045" x2="67.0522" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint12_linear_181_9808" x1="200.158" y1="48.1045" x2="200.158" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint13_linear_181_9808" x1="333.261" y1="48.1045" x2="333.261" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint14_linear_181_9808" x1="466.365" y1="48.1045" x2="466.365" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint15_linear_181_9808" x1="599.47" y1="48.1045" x2="599.47" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint16_linear_181_9808" x1="732.576" y1="48.1045" x2="732.576" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint17_linear_181_9808" x1="865.679" y1="48.1045" x2="865.679" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint18_linear_181_9808" x1="998.783" y1="48.1045" x2="998.783" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint19_linear_181_9808" x1="1131.89" y1="48.1045" x2="1131.89" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint20_linear_181_9808" x1="1264.99" y1="48.1045" x2="1264.99" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint21_linear_181_9808" x1="1398.1" y1="48.1045" x2="1398.1" y2="182.209" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint22_linear_181_9808" x1="67.0522" y1="181.209" x2="67.0522" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint23_linear_181_9808" x1="200.158" y1="181.209" x2="200.158" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint24_linear_181_9808" x1="333.261" y1="181.209" x2="333.261" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint25_linear_181_9808" x1="466.365" y1="181.209" x2="466.365" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint26_linear_181_9808" x1="599.47" y1="181.209" x2="599.47" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint27_linear_181_9808" x1="732.576" y1="181.209" x2="732.576" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint28_linear_181_9808" x1="865.679" y1="181.209" x2="865.679" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint29_linear_181_9808" x1="998.783" y1="181.209" x2="998.783" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint30_linear_181_9808" x1="1131.89" y1="181.209" x2="1131.89" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint31_linear_181_9808" x1="1264.99" y1="181.209" x2="1264.99" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint32_linear_181_9808" x1="1398.1" y1="181.209" x2="1398.1" y2="315.313" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint33_linear_181_9808" x1="67.0522" y1="314.313" x2="67.0522" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint34_linear_181_9808" x1="200.158" y1="314.313" x2="200.158" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint35_linear_181_9808" x1="333.261" y1="314.313" x2="333.261" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint36_linear_181_9808" x1="466.365" y1="314.313" x2="466.365" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint37_linear_181_9808" x1="599.47" y1="314.313" x2="599.47" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint38_linear_181_9808" x1="732.576" y1="314.313" x2="732.576" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint39_linear_181_9808" x1="865.679" y1="314.313" x2="865.679" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint40_linear_181_9808" x1="998.783" y1="314.313" x2="998.783" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint41_linear_181_9808" x1="1131.89" y1="314.313" x2="1131.89" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint42_linear_181_9808" x1="1264.99" y1="314.313" x2="1264.99" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint43_linear_181_9808" x1="1398.1" y1="314.313" x2="1398.1" y2="448.418" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint44_linear_181_9808" x1="67.0522" y1="447.418" x2="67.0522" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint45_linear_181_9808" x1="200.158" y1="447.418" x2="200.158" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint46_linear_181_9808" x1="333.261" y1="447.418" x2="333.261" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint47_linear_181_9808" x1="466.365" y1="447.418" x2="466.365" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint48_linear_181_9808" x1="599.47" y1="447.418" x2="599.47" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint49_linear_181_9808" x1="732.576" y1="447.418" x2="732.576" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint50_linear_181_9808" x1="865.679" y1="447.418" x2="865.679" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint51_linear_181_9808" x1="998.783" y1="447.418" x2="998.783" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint52_linear_181_9808" x1="1131.89" y1="447.418" x2="1131.89" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint53_linear_181_9808" x1="1264.99" y1="447.418" x2="1264.99" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint54_linear_181_9808" x1="1398.1" y1="447.418" x2="1398.1" y2="581.522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint55_linear_181_9808" x1="67.0522" y1="580.522" x2="67.0522" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint56_linear_181_9808" x1="200.158" y1="580.522" x2="200.158" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint57_linear_181_9808" x1="333.261" y1="580.522" x2="333.261" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint58_linear_181_9808" x1="466.365" y1="580.522" x2="466.365" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint59_linear_181_9808" x1="599.47" y1="580.522" x2="599.47" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint60_linear_181_9808" x1="732.576" y1="580.522" x2="732.576" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint61_linear_181_9808" x1="865.679" y1="580.522" x2="865.679" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint62_linear_181_9808" x1="998.783" y1="580.522" x2="998.783" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint63_linear_181_9808" x1="1131.89" y1="580.522" x2="1131.89" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint64_linear_181_9808" x1="1264.99" y1="580.522" x2="1264.99" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint65_linear_181_9808" x1="1398.1" y1="580.522" x2="1398.1" y2="714.627" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint66_linear_181_9808" x1="67.0522" y1="713.627" x2="67.0522" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint67_linear_181_9808" x1="200.158" y1="713.627" x2="200.158" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint68_linear_181_9808" x1="333.261" y1="713.627" x2="333.261" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint69_linear_181_9808" x1="466.365" y1="713.627" x2="466.365" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint70_linear_181_9808" x1="599.47" y1="713.627" x2="599.47" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint71_linear_181_9808" x1="732.576" y1="713.627" x2="732.576" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint72_linear_181_9808" x1="865.679" y1="713.627" x2="865.679" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint73_linear_181_9808" x1="998.783" y1="713.627" x2="998.783" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint74_linear_181_9808" x1="1131.89" y1="713.627" x2="1131.89" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint75_linear_181_9808" x1="1264.99" y1="713.627" x2="1264.99" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint76_linear_181_9808" x1="1398.1" y1="713.627" x2="1398.1" y2="847.731" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#7C7C7C" stop-opacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint77_linear_181_9808" x1="1438.2" y1="636" x2="1584" y2="636" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="paint78_linear_181_9808" x1="-162.354" y1="581.338" x2="665.154" y2="581.338" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#999999" />
                    </linearGradient>
                    <linearGradient id="paint79_linear_181_9808" x1="947.188" y1="115.587" x2="1478.36" y2="115.587" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7C7C7C" />
                        <stop offset="1" stop-color="#999999" />
                    </linearGradient>
                    <clipPath id="clip0_181_9808">
                        <rect width="1440" height="800" fill="#7C7C7C" />
                    </clipPath>
                    <clipPath id="clip1_181_9808">
                        <rect width="1440" height="800" fill="#7C7C7C" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default BannerGridBlack;