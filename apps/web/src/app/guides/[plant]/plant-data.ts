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

export type QuickSummary = {
    light: string;
    water: string;
    difficulty: string;
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
    description: string;
    quickSummary: QuickSummary;
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
        quote: '"Money plant is an easy indoor plant that grows well in bright rooms without direct sunlight. Its heart-shaped leaves bring life and positive energy to any space."',
        description: "Money plant is an easy indoor plant that grows well in bright rooms without direct sunlight. Its heart-shaped leaves bring life and positive energy to any space.",
        quickSummary: {
            light: "Bright indirect",
            water: "Every 7–10 days",
            difficulty: "Easy",
        },
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
        quote: '"The snake plant thrives on neglect. It tolerates low light and infrequent watering, making it perfect for busy plant parents."',
        description: "The snake plant is known for its tall, upright leaves with yellow or white edges. It thrives on neglect and is an excellent air purifier.",
        quickSummary: {
            light: "Low to bright indirect",
            water: "Every 2–6 weeks",
            difficulty: "Very Easy",
        },
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
        quote: '"The peace lily is one of the few flowering plants that can bloom in low light conditions. It even droops dramatically to tell you when it needs water."',
        description: "Peace Lily is a hardy indoor plant known for its elegant white flowers and glossy leaves. It adapts well to indoor environments and is a good choice for bedrooms and offices.",
        quickSummary: {
            light: "Low to medium indirect",
            water: "Once every 5–7 days",
            difficulty: "Easy",
        },
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Prefers low to medium indirect light",
                    "Avoid direct sunlight as it can scorch the leaves",
                    "Works well in bedrooms, offices, and shaded living rooms",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water when the top inch of soil feels dry",
                    "Usually once every 5–7 days indoors",
                    "Soil should stay lightly moist but never soggy",
                ],
                warning: "Common Mistake: Overwatering causes yellow leaves and root rot.",
            },
        ],
        troubleshooting: [
            {
                problem: "Drooping Leaves",
                reason: "Plant is thirsty",
                solution: "Water thoroughly — it usually recovers within a few hours",
            },
            {
                problem: "No Flowers",
                reason: "Insufficient light",
                solution: "Move the plant to brighter indirect light",
            },
            {
                problem: "Yellow Leaves",
                reason: "Overwatering",
                solution: "Reduce watering and improve drainage",
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
        quote: '"The areca palm is a natural humidifier. Its feathery fronds release moisture into the air, making your home feel like a tropical retreat."',
        description: "The areca palm features feathery, arching fronds that brightens up any room. It is also an excellent natural air humidifier.",
        quickSummary: {
            light: "Bright indirect",
            water: "Every 5–7 days",
            difficulty: "Medium",
        },
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
    {
        slug: "anthurium",
        name: "Anthurium Care Guide",
        subtitle: "Bright red flowers and glossy leaves.",
        image: "/plant-anthurium.png",
        badges: [
            { label: "Flowering", color: "bg-red-100 text-red-700" },
            { label: "Tropical", color: "bg-green-100 text-green-700" },
        ],
        quote: '"Anthurium brings a pop of color to any indoor space with its bright, long-lasting flowers and deep green foliage."',
        description: "Anthurium is a decorative indoor plant known for its bright red flowers and glossy leaves. It thrives in warm indoor environments with moderate humidity.",
        quickSummary: {
            light: "Bright indirect",
            water: "Every 5–7 days",
            difficulty: "Medium",
        },
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Bright indirect light is ideal",
                    "Avoid direct sunlight",
                    "Suitable for living rooms and well-lit corners",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water every 5–7 days",
                    "Allow the top soil to dry slightly between watering",
                    "Avoid constantly wet soil",
                ],
                warning: "Common Mistake: Direct sun can fade flowers and burn leaves.",
            },
        ],
        troubleshooting: [
            {
                problem: "Leaves Turning Yellow",
                reason: "Excess watering",
                solution: "Let soil dry slightly before watering again",
            },
            {
                problem: "No Flowers",
                reason: "Low light",
                solution: "Move to a brighter indoor spot",
            },
            {
                problem: "Brown Leaf Edges",
                reason: "Dry air",
                solution: "Light misting or keeping near other plants helps",
            },
        ],
    },
    {
        slug: "monstera",
        name: "Monstera Care Guide",
        subtitle: "Large split leaves and tropical appearance.",
        image: "/plant-monstera.png",
        badges: [
            { label: "Tropical Vibes", color: "bg-green-100 text-green-700" },
            { label: "Statement Plant", color: "bg-amber-100 text-amber-700" },
        ],
        quote: '"The Monstera is an iconic statement plant that instantly transforms any room into a tropical jungle."',
        description: "Monstera is a popular indoor plant known for its large split leaves and tropical appearance. It grows well indoors with the right balance of light and watering.",
        quickSummary: {
            light: "Bright indirect",
            water: "Every 7–10 days",
            difficulty: "Easy",
        },
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Bright indirect light",
                    "Avoid harsh direct sun, especially afternoon sun",
                    "Ideal for living rooms and corners with natural light",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water once every 7–10 days",
                    "Allow soil to dry slightly between watering",
                ],
                warning: "Common Mistake: Direct sunlight can burn the leaves.",
            },
        ],
        troubleshooting: [
            {
                problem: "Leaves Not Splitting",
                reason: "Plant is still young or not getting enough light",
                solution: "Move to brighter indirect light",
            },
            {
                problem: "Yellow Leaves",
                reason: "Overwatering",
                solution: "Reduce watering frequency",
            },
            {
                problem: "Brown Edges",
                reason: "Dry air or underwatering",
                solution: "Increase watering slightly or mist occasionally",
            },
        ],
    },
    {
        slug: "orchid",
        name: "Orchid Care Guide",
        subtitle: "Elegant, long-lasting blooms.",
        image: "/plant-orchid.png",
        badges: [
            { label: "Flowering", color: "bg-pink-100 text-pink-700" },
            { label: "Elegant", color: "bg-purple-100 text-purple-700" },
        ],
        quote: '"Orchids reward careful plant owners with stunning arrays of blooms that can last for months at a time."',
        description: "Orchids are elegant flowering plants that thrive indoors with bright light and careful watering. They are known for long-lasting blooms.",
        quickSummary: {
            light: "Bright indirect",
            water: "Once every 5–7 days",
            difficulty: "Medium",
        },
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Bright indirect sunlight",
                    "Avoid direct afternoon sun",
                    "East-facing windows are ideal",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water once every 5–7 days",
                    "Allow roots to dry slightly between watering",
                ],
                warning: "Common Mistake: Overwatering can quickly damage orchid roots.",
            },
        ],
        troubleshooting: [
            {
                problem: "Flowers Falling Early",
                reason: "Sudden temperature change",
                solution: "Keep plant away from hot drafts or direct sun",
            },
            {
                problem: "No Blooms",
                reason: "Insufficient light",
                solution: "Move to a brighter spot",
            },
            {
                problem: "Wrinkled Leaves",
                reason: "Dehydration",
                solution: "Increase watering slightly",
            },
        ],
    },
    {
        slug: "calathea",
        name: "Calathea Care Guide",
        subtitle: "Striking patterns and unique moving leaves.",
        image: "/plant-calathea.png",
        badges: [
            { label: "Pet Friendly", color: "bg-green-100 text-green-700" },
            { label: "Humidity Lover", color: "bg-teal-100 text-teal-700" },
        ],
        quote: '"Known as the prayer plant, Calathea gracefully folds its leaves upward at night and reveals stunning patterns by day."',
        description: "Calathea is admired for its decorative patterned leaves. It prefers stable indoor environments and slightly higher humidity.",
        quickSummary: {
            light: "Medium to low indirect",
            water: "When top soil dries",
            difficulty: "Hard",
        },
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Medium to low indirect light",
                    "Avoid direct sunlight",
                    "Good for shaded indoor spaces",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water when the top soil begins to dry",
                    "Keep soil lightly moist",
                ],
                warning: "Common Mistake: Direct sun causes leaf fading and curling.",
            },
        ],
        troubleshooting: [
            {
                problem: "Leaf Edges Turning Brown",
                reason: "Dry air or inconsistent watering",
                solution: "Keep soil slightly moist and mist occasionally",
            },
            {
                problem: "Leaves Curling",
                reason: "Low humidity",
                solution: "Increase humidity around the plant",
            },
            {
                problem: "Faded Leaves",
                reason: "Too much sunlight",
                solution: "Move to a shaded location",
            },
        ],
    },
    {
        slug: "poinsettia",
        name: "Poinsettia Care Guide",
        subtitle: "Festive and bright winter foliage.",
        image: "/plant-poinsettia.png",
        badges: [
            { label: "Festive", color: "bg-red-100 text-red-700" },
            { label: "Seasonal", color: "bg-orange-100 text-orange-700" },
        ],
        quote: '"The Poinsettia brings immediate festive cheer with its vibrant, colorful bracts during the holiday season."',
        description: "Poinsettia is a festive plant known for its bright red leaves that appear during winter months. It can also be grown indoors with proper care.",
        quickSummary: {
            light: "Bright indirect",
            water: "When soil feels dry",
            difficulty: "Medium",
        },
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Bright indirect light",
                    "Avoid strong midday sunlight",
                    "Keep away from hot drafts",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water when soil feels dry",
                    "Avoid waterlogging",
                ],
                warning: "Common Mistake: Excess watering leads to leaf drop.",
            },
        ],
        troubleshooting: [
            {
                problem: "Leaves Falling",
                reason: "Stress from temperature changes",
                solution: "Keep plant in a stable indoor location",
            },
            {
                problem: "Yellow Leaves",
                reason: "Overwatering",
                solution: "Reduce watering",
            },
            {
                problem: "Wilting",
                reason: "Dry soil",
                solution: "Water thoroughly",
            },
        ],
    },
    {
        slug: "philodendron",
        name: "Philodendron Care Guide",
        subtitle: "Lush green foliage and easy care.",
        image: "/plant-philodendron.png",
        badges: [
            { label: "Easy Care", color: "bg-green-100 text-green-700" },
            { label: "Trailing", color: "bg-lime-100 text-lime-700" },
        ],
        quote: '"Philodendrons are universally loved for their forgiving nature and fast-growing beautiful vines."',
        description: "Philodendron is an easy-care tropical plant known for its lush green foliage. It grows well indoors and adapts to different light conditions.",
        quickSummary: {
            light: "Bright indirect",
            water: "Every 7–10 days",
            difficulty: "Easy",
        },
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Bright indirect light preferred",
                    "Can tolerate medium light",
                    "Avoid strong direct sunlight",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water every 7–10 days",
                    "Allow top soil to dry slightly",
                ],
                warning: "Common Mistake: Too much water causes yellow leaves.",
            },
        ],
        troubleshooting: [
            {
                problem: "Yellow Leaves",
                reason: "Overwatering",
                solution: "Allow soil to dry before watering again",
            },
            {
                problem: "Leggy Growth",
                reason: "Insufficient light",
                solution: "Move plant to brighter spot",
            },
            {
                problem: "Drooping Leaves",
                reason: "Dry soil",
                solution: "Water thoroughly",
            },
        ],
    },
    {
        slug: "rubber-plant",
        name: "Rubber Plant Care Guide",
        subtitle: "Impressive height and deeply colored glossy leaves.",
        image: "/plant-rubber-plant.png",
        badges: [
            { label: "Indoor Tree", color: "bg-stone-100 text-stone-700" },
            { label: "Statement Plant", color: "bg-amber-100 text-amber-700" },
        ],
        quote: '"The Rubber Plant is a bold architectural plant that adds a dramatic flair and structural beauty to any room."',
        description: "Rubber Plant is a popular indoor tree with large glossy leaves. It grows well indoors and adds height and structure to living spaces.",
        quickSummary: {
            light: "Bright indirect",
            water: "Every 7–10 days",
            difficulty: "Medium",
        },
        careCards: [
            {
                icon: "☀️",
                title: "Where to Keep",
                tips: [
                    "Bright indirect light",
                    "Avoid harsh direct sunlight",
                    "Ideal near windows with filtered light",
                ],
            },
            {
                icon: "💧",
                title: "Watering Schedule",
                tips: [
                    "Water once every 7–10 days",
                    "Let the top soil dry between watering",
                ],
                warning: "Common Mistake: Constant wet soil leads to root problems.",
            },
        ],
        troubleshooting: [
            {
                problem: "Leaves Dropping",
                reason: "Sudden change in environment",
                solution: "Keep plant in a stable spot",
            },
            {
                problem: "Brown Edges",
                reason: "Dry air",
                solution: "Increase humidity slightly",
            },
            {
                problem: "Yellow Leaves",
                reason: "Overwatering",
                solution: "Reduce watering",
            },
        ],
    },
];

export const plantsBySlug = Object.fromEntries(
    allPlants.map((p) => [p.slug, p])
);
