import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const {
        threshold = 0.1,
        triggerOnce = true,
        rootMargin = '0px'
    } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, triggerOnce, rootMargin]);

    return [ref, isVisible];
}

// Component wrapper for scroll animations
export function AnimateOnScroll({
    children,
    animation = 'fadeInUp',
    delay = 0,
    duration = 600,
    className = '',
    ...props
}) {
    const [ref, isVisible] = useScrollAnimation();

    const animations = {
        fadeInUp: {
            hidden: { opacity: 0, transform: 'translateY(30px)' },
            visible: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        fadeInLeft: {
            hidden: { opacity: 0, transform: 'translateX(-30px)' },
            visible: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
            hidden: { opacity: 0, transform: 'translateX(30px)' },
            visible: { opacity: 1, transform: 'translateX(0)' },
        },
        scaleIn: {
            hidden: { opacity: 0, transform: 'scale(0.9)' },
            visible: { opacity: 1, transform: 'scale(1)' },
        },
        zoomIn: {
            hidden: { opacity: 0, transform: 'scale(0.8)' },
            visible: { opacity: 1, transform: 'scale(1)' },
        },
    };

    const animStyle = animations[animation] || animations.fadeInUp;
    const currentStyle = isVisible ? animStyle.visible : animStyle.hidden;

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...currentStyle,
                transition: `all ${duration}ms ease-out ${delay}ms`,
            }}
            {...props}
        >
            {children}
        </div>
    );
}

export default useScrollAnimation;
