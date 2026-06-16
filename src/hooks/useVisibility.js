import { useEffect, useRef, useState } from 'react';

export function useVisibility(threshold = 0.1) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold }
        );
        const el = ref.current;
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, visible];
}
