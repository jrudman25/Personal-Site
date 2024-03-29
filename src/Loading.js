/**
 * Loading.js
 * Handles the animation that plays when you first visit the site.
 * @version 2023.09.11
 */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loading = ({ onLoadingComplete }) => {

    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        const animationShown = sessionStorage.getItem('animationShown');

        if (!animationShown) {
            setTimeout(() => {
                setLoadingComplete(true);
            }, 2750);

            setTimeout(() => {
                sessionStorage.setItem('animationShown', 'true');
                onLoadingComplete();
            }, 4250);
        } else {
            onLoadingComplete();
        }
    }, [onLoadingComplete]);

    return (
        <>
            {!loadingComplete && (
                <motion.div
                    style={{
                        width: '100vw',
                        height: '100vh',
                        background: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 9999,
                        opacity: loadingComplete ? 0 : 1,
                    }}
                    animate={{ opacity: loadingComplete ? 0 : 1 }}
                    transition={{ duration: 2.5 }}
                >

                    <motion.svg
                        width="294"
                        height="321"
                        viewBox="0 0 294 321"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path
                            d="M80.2 179.6C79.7479 175.079 72.6935 171.021 70.3333 167.333C63.6314 156.862 59.4885
                            144.1 53.4445 133.111C46.2575 120.044 43.4884 105.304 41 90.8C38.0792 73.7757 35.8683 58.1061
                            38.6445 40.7556C39.8232 33.3884 42.7334 2.71789 57.9778 14.2667C69.9587 23.3431 80.3137 41.2531
                            85.6222 55.0222C91.2648 69.6575 95.7454 85.2519 98.6 100.667C102.392 121.143 100.628 143.785
                            97.6222 164.222C93.7999 190.214 90.59 217.548 79.4889 241.6C71.6555 258.572 64.26 276.937
                            53.2667 292.133C47.3808 300.27 39.873 309.412 29.0445 310.267C19.8416 310.993 14.6257 300.208
                            12.5556 292.933C8.79108 279.704 15.2977 262.788 20.2889 250.622C31.6744 222.87 60.228 212.408
                            78.8222 190.667C92.6256 174.527 103.795 155.421 113.711 136.756C120.375 124.211 126.625 111.847
                            131.844 98.6222C137.28 84.8485 144.461 71.7494 149.267 57.7333C151.244 51.9657 152.249 46.0062
                            153.8 40.1334C154.114 38.9462 155.651 31.3975 154.911 37.0667C150.583 70.2501 150.94 103.667
                            147.844 136.933C144.474 173.145 137.172 208.778 133.356 244.933C132.232 255.581 131.068 266.273
                            130.689 276.978C130.58 280.067 130.556 283.175 130.6 286.267C130.611 287.008 130.363 288.736
                            131.044 288.444C134.41 287.002 136.452 263.654 136.822 261.467C141.043 236.562 143.463 211.342
                            146.422 186.267C151.367 144.363 157.755 103.9 171 63.6445C176.714 46.2771 187.423 20.3054
                            205.756 12.6667C229.083 2.94704 240.625 30.2518 244.289 48.2222C250.501 78.6869 239.057 108.548
                            220.911 132.622C209.94 147.178 195.024 156.383 180.911 167.422C176.144 171.151 162.723 179.953
                            166.511 187.378C169.451 193.14 174.635 197.667 179.578 201.644C194.485 213.638 209.79 224.967
                            223.844 238C234.248 247.648 243.93 258.042 254.378 267.644C261.654 274.332 269.676 279.772
                            277.267 286C279.625 287.935 280.94 290.76 283.4 292.4"
                            stroke="white"
                            strokeWidth="21"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                        />
                    </motion.svg>
                </motion.div>
            )}
        </>
    );
};

export default Loading;
