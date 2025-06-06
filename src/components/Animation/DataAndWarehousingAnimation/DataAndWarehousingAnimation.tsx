import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";

export const DataAndWarehousingAnimation = () => {
    const bannerGridRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);
        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.inOut",
                paused: true,
            },
        });

        const q = gsap.utils.selector(bannerGridRef);
        const path1 = q("#data-and-warehouse-line")[0] as unknown as SVGPathElement;
        const rect1 = q("#data-and-warehouse-rect-1")[0]
        const rect2 = q("#data-and-warehouse-rect-2")[0]
        const rect3 = q("#data-and-warehouse-rect-3")[0]
        const square1 = q("#square-bg-1")[0]
        const square2 = q("#square-bg-2")[0]
        const square3 = q("#square-bg-3")[0]

        const bgGradientCircle = q("#bg-circle-gradient")[0] as unknown as SVGCircleElement;

        gsap.set([path1], { drawSVG: "100% 100%" });

        gsap.from(bgGradientCircle, {
            opacity: 0.5,
            duration: 0.3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
        })

        gsap.to(path1, {
            drawSVG: "0% 100%",
            duration: 3,
            ease: "power1.inOut",
            onComplete: () => {
                tl.play();
            }

        })

        gsap.from(rect1, {
            motionPath: {
                path: path1,
                align: path1,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: -1,
                end: 0
            },
            duration: 3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
        })
        gsap.from(rect2, {
            motionPath: {
                path: path1,
                align: path1,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: -1,
                end: 0
            },
            duration: 3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: 0.5
        })
        gsap.from(rect3, {
            motionPath: {
                path: path1,
                align: path1,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: -1,
                end: 0
            },
            duration: 3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1
        })


        const squares = [square1, square2, square3];
        const speeds = [1, 0.3, 3]; // Each square moves with a different intensity
        const directions = [1, -1, 1]; // Each square moves in a different direction

        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 2;
            const y = (e.clientY / innerHeight - 0.5) * 2;

            squares.forEach((square, i) => {
                gsap.to(square, {
                    x: x * 30 * speeds[i] * directions[i],
                    y: y * 30 * speeds[i] * directions[i],
                    ease: "power2.out",
                    duration: 0.4,
                });
            });
        };

        const handleMouseLeave = () => {
            squares.forEach((square) => {
                gsap.to(square, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
            });
        };

        if (bannerGridRef.current) {
            bannerGridRef.current.addEventListener("mousemove", handleMouseMove);
            bannerGridRef.current.addEventListener("mouseleave", handleMouseLeave);
        }

        // Clean up on unmount
        return () => {
            if (bannerGridRef.current) {
                bannerGridRef.current.removeEventListener("mousemove", handleMouseMove);
                bannerGridRef.current.removeEventListener("mouseleave", handleMouseLeave);
            }
        };


    }, {
        scope: bannerGridRef,
    })
    return (
        <div className="relative flex items-center justify-center" ref={bannerGridRef}>
            <svg width="938" height="664" viewBox="0 0 938 664" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="data-and-warehouse-line" d="M185.143 540.898L566 540.898C570.418 540.898 574 544.48 574 548.898L574 594.621C574 599.039 577.581 602.621 582 602.621L752.712 602.621C757.13 602.621 760.712 599.039 760.712 594.621L760.712 420.822C760.712 416.404 764.294 412.822 768.712 412.822L883.874 412.822C888.292 412.822 891.874 409.24 891.874 404.822L891.874 288.279C891.874 283.86 888.292 280.279 883.874 280.279L581.999 280.279C577.581 280.279 573.999 276.697 573.999 272.279L573.999 104.49C573.999 100.072 570.418 96.4902 565.999 96.4902L276.185 96.4902" stroke="#DCDCDC" />
                <g opacity="0.8" filter="url(#filter0_f_176_3364)" id="bg-circle-gradient">
                    <circle cx="322.622" cy="321.994" r="121.813" transform="rotate(-90 322.622 321.994)" fill="url(#paint0_radial_176_3364)" />
                </g>
                <path d="M252.863 316.148V321.747H237.113V305.998H242.712V316.148H252.863Z" fill="#FF7D12" />
                <path d="M252.863 305.998H246.621V312.24H252.863V305.998Z" fill="#FF7D12" />
                <path d="M231.515 337.497H237.113V321.747H221.363V327.347H231.515V337.497Z" fill="#FF7D12" />
                <path d="M227.605 331.256H221.363V337.498H227.605V331.256Z" fill="#FF7D12" />
                <path d="M281.693 332.794H264.113V329.814L274.677 316.469H264.659V312.417H281.205V315.437L270.72 328.742H281.693V332.794Z" fill="#292929" />
                <path d="M302.16 322.255C302.16 322.504 302.151 322.742 302.141 322.976C302.126 323.2 302.102 323.497 302.063 323.872H286.121C286.301 324.992 286.656 325.937 287.192 326.717C287.724 327.496 288.386 328.095 289.18 328.509C289.97 328.928 290.837 329.132 291.772 329.132C292.991 329.132 293.98 328.893 294.735 328.411C295.485 327.919 296.041 327.242 296.391 326.385H301.615C301.366 327.311 300.952 328.192 300.367 329.035C299.792 329.882 299.091 330.632 298.262 331.294C297.429 331.947 296.474 332.458 295.397 332.833C294.316 333.223 293.146 333.418 291.889 333.418C290.355 333.418 288.937 333.135 287.641 332.58C286.354 332.01 285.234 331.231 284.289 330.242C283.353 329.244 282.617 328.095 282.086 326.794C281.565 325.484 281.307 324.087 281.307 322.606C281.307 321.116 281.565 319.718 282.086 318.418C282.617 317.122 283.353 315.978 284.289 314.989C285.234 313.991 286.354 313.212 287.641 312.652C288.937 312.082 290.355 311.794 291.889 311.794C293.419 311.794 294.818 312.077 296.08 312.632C297.337 313.192 298.418 313.957 299.315 314.931C300.221 315.895 300.923 317.005 301.42 318.262C301.912 319.523 302.16 320.853 302.16 322.255ZM286.335 320.171H297.249C297.181 319.406 296.898 318.71 296.391 318.087C295.894 317.454 295.251 316.947 294.462 316.567C293.668 316.178 292.805 315.983 291.87 315.983C291.051 315.983 290.272 316.134 289.531 316.431C288.8 316.733 288.152 317.191 287.582 317.814C287.022 318.428 286.608 319.212 286.335 320.171Z" fill="#292929" />
                <path d="M308.185 332.794H303.371V312.418H307.951V315.593C308.341 314.853 308.877 314.2 309.569 313.626C310.256 313.056 311.055 312.608 311.966 312.281C312.872 311.96 313.856 311.794 314.909 311.794C317.637 311.794 319.684 312.666 321.048 314.405C322.412 316.148 323.094 318.613 323.094 321.807V332.794H318.3V321.905C318.3 319.893 317.871 318.447 317.014 317.561C316.166 316.665 315.026 316.217 313.584 316.217C312.633 316.217 311.752 316.46 310.933 316.937C310.114 317.419 309.452 318.116 308.945 319.022C308.438 319.932 308.185 321.057 308.185 322.392V332.794Z" fill="#292929" />
                <path d="M334.042 333.418C332.663 333.418 331.391 333.135 330.222 332.58C329.053 332.025 328.029 331.251 327.162 330.262C326.29 329.264 325.613 328.114 325.135 326.814C324.667 325.504 324.434 324.101 324.434 322.606C324.434 321.116 324.672 319.718 325.155 318.418C325.632 317.122 326.309 315.978 327.182 314.989C328.049 313.991 329.062 313.212 330.222 312.652C331.391 312.082 332.658 311.794 334.022 311.794C335.684 311.794 337.16 312.16 338.446 312.885C339.743 313.601 340.717 314.595 341.37 315.866V312.418H345.93V332.794H341.37V329.366C340.707 330.642 339.733 331.635 338.446 332.346C337.16 333.057 335.689 333.418 334.042 333.418ZM335.192 328.976C336.02 328.976 336.8 328.816 337.53 328.489C338.256 328.168 338.895 327.72 339.44 327.145C339.986 326.561 340.405 325.889 340.707 325.119C341.019 324.34 341.175 323.502 341.175 322.606C341.175 321.725 341.019 320.902 340.707 320.132C340.395 319.353 339.967 318.671 339.421 318.087C338.885 317.502 338.256 317.049 337.53 316.723C336.8 316.402 336.02 316.236 335.192 316.236C334.086 316.236 333.077 316.504 332.171 317.035C331.274 317.57 330.553 318.311 330.008 319.255C329.462 320.205 329.189 321.32 329.189 322.606C329.189 323.931 329.462 325.07 330.008 326.015C330.563 326.965 331.299 327.7 332.21 328.217C333.116 328.723 334.11 328.976 335.192 328.976Z" fill="#292929" />
                <path d="M353.697 339.748H348.883V312.417H353.463V315.845C354.203 314.613 355.183 313.634 356.406 312.904C357.638 312.178 358.988 311.813 360.46 311.813C361.911 311.813 363.246 312.1 364.455 312.67C365.663 313.23 366.706 314.005 367.593 314.988C368.475 315.977 369.162 317.121 369.658 318.417C370.151 319.717 370.399 321.115 370.399 322.605C370.399 324.1 370.151 325.503 369.658 326.813C369.162 328.113 368.47 329.263 367.573 330.261C366.686 331.25 365.649 332.024 364.455 332.579C363.256 333.134 361.946 333.417 360.518 333.417C359.514 333.417 358.574 333.251 357.692 332.93C356.805 332.608 356.016 332.151 355.314 331.566C354.613 330.972 354.038 330.281 353.599 329.501L353.697 331.858V339.748ZM359.641 328.995C360.718 328.995 361.712 328.737 362.623 328.216C363.529 327.699 364.26 326.964 364.806 326.014C365.351 325.055 365.624 323.92 365.624 322.605C365.624 321.319 365.351 320.204 364.806 319.255C364.27 318.31 363.549 317.569 362.642 317.034C361.731 316.503 360.723 316.235 359.621 316.235C358.788 316.235 358.009 316.401 357.283 316.722C356.567 317.048 355.938 317.501 355.392 318.086C354.847 318.67 354.418 319.347 354.106 320.112C353.794 320.881 353.638 321.709 353.638 322.605C353.638 323.531 353.794 324.378 354.106 325.157C354.428 325.936 354.866 326.618 355.412 327.203C355.967 327.777 356.61 328.216 357.341 328.527C358.067 328.839 358.832 328.995 359.641 328.995Z" fill="#292929" />
                <path d="M384.436 332.794H380.285C379.671 332.794 379.043 332.745 378.395 332.638C377.756 332.521 377.147 332.317 376.563 332.015C375.988 331.703 375.476 331.265 375.023 330.69C374.565 330.106 374.204 329.361 373.931 328.45C373.659 327.529 373.522 326.395 373.522 325.041V316.547H369.293V312.417H373.522V306.456L378.317 306.417V312.417H384.436V316.547H378.317V325.255C378.317 326.219 378.453 326.96 378.726 327.476C379.008 327.982 379.379 328.333 379.837 328.528C380.29 328.713 380.772 328.801 381.279 328.801H384.436V332.794Z" fill="#292929" />
                <path d="M388.003 309.242C387.068 309.242 386.337 308.979 385.821 308.443C385.299 307.912 385.041 307.265 385.041 306.495C385.041 305.755 385.299 305.112 385.821 304.567C386.337 304.021 387.073 303.749 388.023 303.749C388.983 303.749 389.723 304.021 390.245 304.567C390.761 305.112 391.024 305.755 391.024 306.495C391.024 307.265 390.761 307.912 390.245 308.443C389.723 308.979 388.978 309.242 388.003 309.242ZM390.44 332.794H385.626V312.417H390.44V332.794Z" fill="#292929" />
                <path d="M402.462 333.418C400.942 333.418 399.538 333.135 398.252 332.58C396.966 332.01 395.845 331.231 394.9 330.242C393.964 329.244 393.229 328.095 392.698 326.794C392.176 325.484 391.918 324.087 391.918 322.606C391.918 321.126 392.176 319.738 392.698 318.437C393.229 317.142 393.964 315.992 394.9 314.989C395.845 313.991 396.966 313.212 398.252 312.652C399.538 312.082 400.942 311.794 402.462 311.794C404.216 311.794 405.78 312.14 407.159 312.827C408.547 313.504 409.702 314.434 410.628 315.613C411.563 316.781 412.226 318.116 412.616 319.606H407.704C407.261 318.476 406.564 317.639 405.619 317.093C404.684 316.538 403.636 316.255 402.481 316.255C401.741 316.255 401.024 316.402 400.337 316.684C399.646 316.971 399.022 317.385 398.466 317.931C397.921 318.476 397.482 319.148 397.161 319.937C396.834 320.717 396.673 321.608 396.673 322.606C396.673 323.609 396.834 324.505 397.161 325.294C397.482 326.074 397.921 326.746 398.466 327.301C399.022 327.846 399.646 328.265 400.337 328.548C401.039 328.835 401.75 328.976 402.481 328.976C403.636 328.976 404.684 328.694 405.619 328.119C406.564 327.535 407.261 326.609 407.704 325.333H412.596C412.245 326.906 411.602 328.304 410.667 329.522C409.731 330.744 408.562 331.699 407.159 332.385C405.765 333.072 404.201 333.418 402.462 333.418Z" fill="#292929" />
                <path d="M444.089 310.744C444.094 310.903 444.139 311.053 444.225 311.195C444.315 311.337 444.434 311.462 444.582 311.571C444.734 311.68 444.908 311.767 445.105 311.834C445.306 311.897 445.517 311.928 445.739 311.928C446.375 311.928 446.849 311.826 447.161 311.621C447.477 311.412 447.635 311.137 447.635 310.794C447.635 310.606 447.585 310.45 447.487 310.325C447.392 310.199 447.259 310.095 447.087 310.011C446.914 309.928 446.705 309.859 446.459 309.805C446.213 309.75 445.938 309.7 445.634 309.654C445.392 309.625 445.136 309.583 444.865 309.529C444.598 309.471 444.352 309.381 444.126 309.26C443.905 309.139 443.72 308.974 443.573 308.765C443.429 308.556 443.357 308.281 443.357 307.938C443.357 307.684 443.402 307.442 443.493 307.212C443.587 306.978 443.737 306.773 443.942 306.598C444.151 306.419 444.422 306.277 444.754 306.172C445.087 306.068 445.491 306.016 445.967 306.016C446.328 306.016 446.652 306.064 446.939 306.16C447.23 306.252 447.479 306.381 447.684 306.548C447.889 306.711 448.047 306.905 448.158 307.13C448.268 307.356 448.324 307.602 448.324 307.869H447.376C447.368 307.715 447.327 307.573 447.253 307.444C447.179 307.314 447.077 307.204 446.945 307.112C446.818 307.02 446.666 306.949 446.49 306.899C446.313 306.849 446.118 306.824 445.905 306.824C445.614 306.824 445.366 306.855 445.16 306.918C444.955 306.98 444.789 307.064 444.662 307.168C444.535 307.272 444.442 307.391 444.385 307.525C444.327 307.654 444.299 307.788 444.299 307.926C444.299 308.089 444.338 308.226 444.416 308.339C444.494 308.448 444.609 308.542 444.76 308.621C444.916 308.696 445.109 308.757 445.339 308.803C445.569 308.849 445.837 308.886 446.145 308.915C446.326 308.94 446.512 308.97 446.705 309.003C446.898 309.037 447.085 309.082 447.265 309.141C447.45 309.199 447.624 309.272 447.788 309.36C447.952 309.444 448.094 309.55 448.213 309.68C448.336 309.805 448.433 309.955 448.502 310.13C448.576 310.302 448.613 310.504 448.613 310.738C448.613 311.064 448.547 311.352 448.416 311.602C448.285 311.849 448.094 312.057 447.844 312.229C447.593 312.4 447.288 312.529 446.927 312.617C446.57 312.705 446.164 312.748 445.708 312.748C445.31 312.748 444.953 312.688 444.637 312.567C444.321 312.45 444.055 312.297 443.837 312.11C443.62 311.918 443.451 311.702 443.332 311.464C443.218 311.222 443.16 310.98 443.16 310.738L444.089 310.744Z" fill="#525252" />
                <path d="M442.559 309.379C442.559 309.847 442.475 310.285 442.307 310.694C442.139 311.103 441.905 311.46 441.605 311.765C441.31 312.07 440.957 312.31 440.547 312.485C440.14 312.661 439.695 312.749 439.211 312.749C438.932 312.749 438.665 312.715 438.411 312.648C438.157 312.582 437.921 312.492 437.703 312.379C437.486 312.266 437.287 312.133 437.106 311.978C436.926 311.824 436.77 311.659 436.639 311.483L436.571 312.567H435.746V303.749H436.694V307.243C436.829 307.064 436.985 306.899 437.162 306.749C437.338 306.598 437.533 306.469 437.746 306.36C437.964 306.252 438.196 306.168 438.442 306.11C438.688 306.047 438.951 306.016 439.23 306.016C439.714 306.016 440.159 306.103 440.565 306.279C440.971 306.454 441.322 306.694 441.618 306.999C441.913 307.304 442.143 307.661 442.307 308.07C442.475 308.475 442.559 308.911 442.559 309.379ZM441.611 309.379C441.611 309.02 441.546 308.688 441.414 308.383C441.287 308.074 441.111 307.809 440.885 307.588C440.664 307.362 440.403 307.187 440.104 307.062C439.804 306.932 439.482 306.868 439.137 306.868C438.793 306.868 438.471 306.932 438.171 307.062C437.871 307.187 437.609 307.362 437.383 307.588C437.158 307.809 436.979 308.074 436.848 308.383C436.721 308.688 436.657 309.02 436.657 309.379C436.657 309.742 436.721 310.078 436.848 310.387C436.979 310.692 437.155 310.957 437.377 311.183C437.603 311.408 437.865 311.584 438.165 311.709C438.468 311.834 438.791 311.897 439.131 311.897C439.476 311.897 439.798 311.834 440.097 311.709C440.397 311.579 440.659 311.404 440.885 311.183C441.111 310.957 441.287 310.692 441.414 310.387C441.546 310.078 441.611 309.742 441.611 309.379Z" fill="#525252" />
                <path d="M427.188 309.379C427.188 308.911 427.27 308.475 427.434 308.07C427.602 307.661 427.834 307.304 428.129 306.999C428.429 306.694 428.784 306.454 429.194 306.279C429.604 306.103 430.051 306.016 430.536 306.016C430.819 306.016 431.085 306.049 431.336 306.116C431.59 306.183 431.826 306.272 432.043 306.385C432.261 306.498 432.458 306.631 432.634 306.786C432.815 306.94 432.971 307.105 433.102 307.281L433.17 306.191H433.994V312.567H433.17L433.096 311.483C432.965 311.659 432.809 311.824 432.628 311.978C432.452 312.128 432.253 312.262 432.031 312.379C431.814 312.492 431.578 312.579 431.323 312.642C431.073 312.709 430.808 312.742 430.529 312.742C430.045 312.742 429.598 312.654 429.188 312.479C428.782 312.304 428.429 312.066 428.129 311.765C427.834 311.46 427.602 311.103 427.434 310.694C427.27 310.285 427.188 309.847 427.188 309.379ZM428.135 309.379C428.135 309.742 428.199 310.078 428.326 310.387C428.457 310.692 428.634 310.957 428.855 311.183C429.081 311.404 429.344 311.579 429.643 311.709C429.947 311.834 430.269 311.897 430.609 311.897C430.954 311.897 431.276 311.834 431.576 311.709C431.875 311.583 432.138 311.408 432.363 311.183C432.589 310.957 432.766 310.692 432.893 310.387C433.024 310.078 433.09 309.742 433.09 309.379C433.09 309.02 433.024 308.688 432.893 308.383C432.761 308.074 432.583 307.809 432.357 307.588C432.136 307.362 431.873 307.187 431.57 307.062C431.27 306.932 430.95 306.867 430.609 306.867C430.265 306.867 429.941 306.932 429.637 307.062C429.337 307.187 429.077 307.362 428.855 307.588C428.634 307.809 428.457 308.074 428.326 308.383C428.199 308.688 428.135 309.02 428.135 309.379Z" fill="#525252" />
                <path d="M421.613 304.049H422.58V311.696H426.722V312.567H421.613V304.049Z" fill="#525252" />
                <rect opacity="0.03" x="14.0898" y="144.787" width="74.9661" height="74.9661" rx="4" transform="rotate(-90 14.0898 144.787)" fill="#292929" />
                <rect opacity="0.05" x="51.5723" y="207.406" width="101.017" height="101.017" rx="4" transform="rotate(-90 51.5723 207.406)" fill="#292929" id="square-bg-2" />
                <rect opacity="0.03" x="458.848" y="663.996" width="219.141" height="219.141" rx="4" transform="rotate(-90 458.848 663.996)" fill="#292929" id="square-bg-3" />
                <g filter="url(#filter1_d_176_3364)" id="data-and-warehouse-rect-1">
                    <rect x="169.141" y="548.44" width="16" height="16" rx="4" transform="rotate(-90 169.141 548.44)" fill="url(#paint1_linear_176_3364)" />
                    <rect x="167.141" y="550.44" width="20" height="20" rx="6" transform="rotate(-90 167.141 550.44)" stroke="white" stroke-width="4" />
                </g>
                <g filter="url(#filter2_d_176_3364)" id="data-and-warehouse-rect-2">
                    <rect x="263.285" y="104.591" width="16" height="16" rx="4" transform="rotate(-90 263.285 104.591)" fill="url(#paint2_linear_176_3364)" />
                    <rect x="261.285" y="106.591" width="20" height="20" rx="6" transform="rotate(-90 261.285 106.591)" stroke="white" stroke-width="4" />
                </g>
                <g filter="url(#filter3_d_176_3364)" id="data-and-warehouse-rect-3">
                    <rect x="568.42" y="287.123" width="16" height="16" rx="4" transform="rotate(-90 568.42 287.123)" fill="url(#paint3_linear_176_3364)" />
                    <rect x="566.42" y="289.123" width="20" height="20" rx="6" transform="rotate(-90 566.42 289.123)" stroke="white" stroke-width="4" />
                </g>
                <rect opacity="0.1" x="831.988" y="332.081" width="105.923" height="105.923" rx="4" transform="rotate(-90 831.988 332.081)" fill="#292929" id="square-bg-1" />
                <defs>
                    <filter id="filter0_f_176_3364" x="0.808594" y="0.180664" width="643.627" height="643.627" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_176_3364" />
                    </filter>
                    <filter id="filter1_d_176_3364" x="137.141" y="500.44" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_176_3364" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_176_3364" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_176_3364" result="shape" />
                    </filter>
                    <filter id="filter2_d_176_3364" x="231.285" y="56.5908" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_176_3364" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_176_3364" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_176_3364" result="shape" />
                    </filter>
                    <filter id="filter3_d_176_3364" x="536.42" y="239.123" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="8" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_176_3364" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="10" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_176_3364" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_176_3364" result="shape" />
                    </filter>
                    <radialGradient id="paint0_radial_176_3364" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(322.622 321.994) rotate(90) scale(180.269)">
                        <stop stop-color="var(--banner-grid-fill)" />
                        <stop offset="1" stop-color="var(--banner-grid-fill)" />
                    </radialGradient>
                    <linearGradient id="paint1_linear_176_3364" x1="185.141" y1="556.44" x2="169.141" y2="556.44" gradientUnits="userSpaceOnUse">
                        <stop stop-color="var(--banner-grid-fill)" />
                        <stop offset="1" stop-color="var(--banner-grid-stroke)" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_176_3364" x1="279.285" y1="112.591" x2="263.285" y2="112.591" gradientUnits="userSpaceOnUse">
                        <stop stop-color="var(--banner-grid-fill)" />
                        <stop offset="1" stop-color="var(--banner-grid-stroke)" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_176_3364" x1="584.42" y1="295.123" x2="568.42" y2="295.123" gradientUnits="userSpaceOnUse">
                        <stop stop-color="var(--banner-grid-fill)" />
                        <stop offset="1" stop-color="var(--banner-grid-stroke)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

    );
}

