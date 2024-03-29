module.exports = {
    rooms: [
        {
            id: 1,
            name: "Crossroad",
            description: "You are standing at a crossroad. To the north, east, south and west you see empty space, waiting to be filled.",
            exits: {n: 2, e: 3, w: 4, s: 5}
        },
        {
            id: 2,
            name: "Northern point",
            description: "You are standing at the north point of a crossroad. To the south, you see an empty intersection.",
            exits: {s: 1}
        },
        {
            id: 3,
            name: "Eastern point",
            description: "You are standing at the east point of a crossroad. To the west, you see an empty intersection.",
            exits: {w: 1}
        },
        {
            id: 4,
            name: "Western point",
            description: "You are standing at the west point of a crossroad. To the east, you see an empty intersection.",
            exits: {e: 1}
        },
        {
            id: 5,
            name: "Southern point",
            description: "You are standing at the south point of a crossroad. To the north, you see an empty intersection.",
            exits: {n: 1}
        }
    ],
    items: [
        {
            name: "rock",
            description: "Just a simple rock",
            room: 1
        },
        {
            name: "sandwich",
            description: "A tasty looking sandwich",
            room: 2,
            isFood: true,
            health: 8
        }
    ],
    enemies: [
        {
            name: "wizard",
            description: "evil sourcerer",
            room: 1,
            health: 5,
            attack: 1,
            drops: [
                {
                    name: "dagger",
                    description: "A rusted dagger from long ago",
                    damage: "2",
                    isWeapon: true
                }
            ]
        },
        {
            name: "troll",
            description: "Oaf",
            room: 4,
            health: 20,
            attack: 5,
            drops: [
                {
                    name: "dusty key",
                    description: "A dusty key, where could it lead to?",
                }
            ]
        },
        {
            name: "wizard",
            description: "evil sourcerer",
            room: 3,
            health: 5,
            attack: 1,
            drops: [
                {
                    name: "steel sword",
                    description: "A steel sword",
                    damage: "8",
                    isWeapon: true
                },
                {
                    name: "bread loaf",
                    description: "Fresh from the bakery",
                    isFood: true,
                    health: 4
                }
            ]
        }
    ]
}
