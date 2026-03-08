// Reusable SVG Icons for the Creator App
// Extracted from inline SVGs to improve maintainability and reduce JSX complexity

interface IconProps {
    size?: number;
    className?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}

export function HeartIcon({ size = 20, fill = "none", stroke = "white", strokeWidth = 2 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    );
}

export function StarIcon({ size = 14 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
    );
}

export function LocationIcon({ size = 12 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

export function HomeIcon({ size = 22, active = false }: IconProps & { active?: boolean }) {
    const color = active ? "#A855F7" : "#666";
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={active ? "#A855F7" : "none"} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="M9 22V12h6v10" stroke={color} fill="none" />
        </svg>
    );
}

export function SearchIcon({ size = 22, active = false }: IconProps & { active?: boolean }) {
    const color = active ? "#A855F7" : "#666";
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
        </svg>
    );
}

export function StudioIcon({ size = 22, active = false }: IconProps & { active?: boolean }) {
    const color = active ? "#A855F7" : "#666";
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={active ? "#A855F7" : "none"} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="9" rx="1" />
            <rect x="14" y="3" width="7" height="5" rx="1" />
            <rect x="14" y="12" width="7" height="9" rx="1" />
            <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
    );
}

export function ProfileIcon({ size = 22, active = false }: IconProps & { active?: boolean }) {
    const color = active ? "#A855F7" : "#666";
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={active ? "#A855F7" : "none"} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}

export function LogoIcon({ size = 18 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 8L12 14L20 8L12 2Z" fill="white" opacity="0.9" />
            <path d="M4 14L12 20L20 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2V14" stroke="white" strokeWidth="1.5" opacity="0.5" />
        </svg>
    );
}

export function CreditIcon({ size = 12 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
            <path d="M12 6V18M8 10H16M8 14H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export function FilterIcon({ size = 20 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
            <circle cx="6" cy="12" r="2" fill="white" />
            <circle cx="18" cy="6" r="2" fill="white" />
            <circle cx="14" cy="18" r="2" fill="white" />
        </svg>
    );
}
