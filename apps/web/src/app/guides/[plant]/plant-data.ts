export type TroubleshootItem = {
    problem: string;
    reason: string;
    solution: string;
};

export type CareCard = {
    icon: string;
    title: string;
    tips: string[];
    warning?: string;
};

export type PlantGuide = {
    slug: string;
    name: string;
    subtitle: string;
    image: string;
    badges: { label: string; color: string }[];
    quote: string;
    careCards: CareCard[];
    troubleshooting: TroubleshootItem[];
};

export const allPlants: PlantGuide[] = [
    {
        slug: "money-plant",
        name: "Money Plant Care Guide",
        subtitle: "Simple instructions to help your plant stay healthy.",
        image: "/plant-money.png",
        badges: [
            { label: "Indoor Plant", color: "bg-green-100 text-green-700" },
            { label: "Low Maintenance", color: "bg-orange-100 text-orange-700" },
        ],
        quote:
            '"Money plant is an easy indoor plant that grows well in bright rooms without direct sunlight. Its heart-shaped leaves bring life and positive energy to any space."',
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Keep in a bright room for optimal growth.",
                    "Near a window but not under direct sunlight.",
                    "Works well in bedrooms, living rooms, and offices.",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water once every 7–10 days.",
                    "Let the soil dry slightly before watering again.",
                    "Do not water every day.",
                ],
                warning: "Common Mistake: Overwatering is the most common problem.",
            },
        ],
        troubleshooting: [
            {
                problem: "Yellow Leaves",
                reason: "Too much water.",
                solution: "Stop watering and allow soil to dry completely.",
            },
            {
                problem: "Slow Growth",
                reason: "Not enough light.",
                solution: "Move plant closer to a window or brighter spot.",
            },
            {
                problem: "Drooping Leaves",
                reason: "Watering imbalance.",
                solution: "Check soil moisture with a finger before watering.",
            },
        ],
    },
    {
        slug: "snake-plant",
        name: "Snake Plant Care Guide",
        subtitle: "One of the hardiest houseplants you can own.",
        image: "/plant-snake.png",
        badges: [
            { label: "Hard to Kill", color: "bg-red-100 text-red-700" },
            { label: "Air Purifying", color: "bg-blue-100 text-blue-700" },
        ],
        quote:
            '"The snake plant thrives on neglect. It tolerates low light and infrequent watering, making it perfect for busy plant parents."',
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Tolerates low light but prefers indirect bright light.",
                    "Avoid direct harsh afternoon sun.",
                    "Great for hallways, offices, and corners.",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water every 2–6 weeks depending on season.",
                    "Always let soil dry completely between waterings.",
                    "Water less in winter.",
                ],
                warning: "Common Mistake: Root rot from overwatering is fatal.",
            },
        ],
        troubleshooting: [
            {
                problem: "Mushy Base",
                reason: "Root rot from overwatering.",
                solution: "Remove affected roots and repot in fresh dry soil.",
            },
            {
                problem: "Wrinkled Leaves",
                reason: "Underwatering.",
                solution: "Give a thorough watering and let drain fully.",
            },
            {
                problem: "Brown Tips",
                reason: "Low humidity or fluoride in tap water.",
                solution: "Use filtered water or let tap water sit overnight.",
            },
        ],
    },
    {
        slug: "peace-lily",
        name: "Peace Lily Care Guide",
        subtitle: "Elegant white blooms and excellent air purifying.",
        image: "/plant-peace-lily.png",
        badges: [
            { label: "Air Purifying", color: "bg-blue-100 text-blue-700" },
            { label: "Low Light OK", color: "bg-purple-100 text-purple-700" },
        ],
        quote:
            '"The peace lily is one of the few flowering plants that can bloom in low light conditions. It even droops dramatically to tell you when it needs water."',
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Thrives in low to medium indirect light.",
                    "Keep away from cold drafts and air conditioning.",
                    "Perfect for bathrooms with humidity.",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water when the top inch of soil feels dry.",
                    "Typically once every 5–7 days in summer.",
                    "Loves humidity — mist leaves occasionally.",
                ],
                warning: "Common Mistake: Brown tips usually mean over-fertilising.",
            },
        ],
        troubleshooting: [
            {
                problem: "Drooping Plant",
                reason: "Thirsty — it signals water need clearly.",
                solution: "Water thoroughly and it will perk up within hours.",
            },
            {
                problem: "No Flowers",
                reason: "Too little light.",
                solution: "Move to a brighter spot (still indirect light).",
            },
            {
                problem: "Yellow Leaves",
                reason: "Overwatering or too much direct sun.",
                solution: "Reduce watering frequency and find a shadier spot.",
            },
        ],
    },
    {
        slug: "areca-palm",
        name: "Areca Palm Care Guide",
        subtitle: "Bring tropical vibes and fresh air indoors.",
        image: "/plant-areca-palm.png",
        badges: [
            { label: "Tropical Vibes", color: "bg-yellow-100 text-yellow-700" },
            { label: "Humidity Lover", color: "bg-teal-100 text-teal-700" },
        ],
        quote:
            '"The areca palm is a natural humidifier. Its feathery fronds release moisture into the air, making your home feel like a tropical retreat."',
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Bright, indirect light is ideal.",
                    "Can handle some direct morning sun.",
                    "Avoid dark corners — needs good light to thrive.",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water when the top 1–2 inches of soil are dry.",
                    "Approximately every 5–7 days in growing season.",
                    "Mist fronds regularly for extra humidity.",
                ],
                warning: "Common Mistake: Fluoride in tap water causes brown tips.",
            },
        ],
        troubleshooting: [
            {
                problem: "Brown Leaf Tips",
                reason: "Low humidity or tap water chemicals.",
                solution: "Use filtered water and mist regularly.",
            },
            {
                problem: "Yellow Fronds",
                reason: "Overwatering or poor drainage.",
                solution: "Ensure pot has drainage holes and reduce watering.",
            },
            {
                problem: "Slow Growth",
                reason: "Insufficient light.",
                solution: "Move to a brighter location near a window.",
            },
        ],
    },
];

export const plantsBySlug = Object.fromEntries(
    allPlants.map((p) => [p.slug, p])
);
