import { useEffect, useRef, useState } from 'react';

const ACTIVATION_OFFSET = 120;
const ACTIVATION_TOLERANCE = 1;
const BOTTOM_TOLERANCE = 2;

const useActiveSection = (sectionIds, enabled = true) => {
    const [activeId, setActiveId] = useState(null);
    const activeRef = useRef(null);

    useEffect(() => {
        if (!enabled) {
            return undefined;
        }

        const root = document.getElementById('app-scroll-container');
        if (!root) {
            return undefined;
        }

        let frame = null;

        const update = () => {
            frame = null;
            const line = root.getBoundingClientRect().top + ACTIVATION_OFFSET;
            const available = sectionIds
                .map((id) => document.getElementById(id))
                .filter(Boolean);
            let next = null;

            available.forEach((element) => {
                if (element.getBoundingClientRect().top <= line + ACTIVATION_TOLERANCE) {
                    next = element.id;
                }
            });

            const atBottom = root.scrollHeight > root.clientHeight
                && root.scrollTop + root.clientHeight >= root.scrollHeight - BOTTOM_TOLERANCE;
            if (atBottom && available.length > 0) {
                next = available[available.length - 1].id;
            }

            if (next !== activeRef.current) {
                activeRef.current = next;
                setActiveId(next);
            }
        };

        const schedule = () => {
            if (frame === null) {
                frame = requestAnimationFrame(update);
            }
        };

        root.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);

        let observer = null;
        if (typeof ResizeObserver !== 'undefined') {
            observer = new ResizeObserver(schedule);
            observer.observe(root);
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.observe(element);
                }
            });
        }

        schedule();

        return () => {
            root.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            if (observer) {
                observer.disconnect();
            }
            if (frame !== null) {
                cancelAnimationFrame(frame);
            }
        };
    }, [enabled, sectionIds]);

    return enabled ? activeId : null;
};

export default useActiveSection;
