
export const consoleContent = {
    prompt: "guest@arundev",
    title: "ARUN DEV",
    subtitle: "Interactive Terminal Portfolio",

    welcome: [
        "Welcome to my corner of the terminal.",
        "Curiosity is the only requirement.",
        "",
        "Type 'help' to see available commands.",
        "Type 'gui' to return to the visual portfolio.",
    ],

    commands: {
        help: {
            description: "List available commands",
            output: [
                "AVAILABLE COMMANDS",
                "",
                "help       Show this command list",
                "name       Who am I?",
                "projects   Explore my projects",
                "academics  My education",
                "about      A little about me",
                "contact    How to reach me",
                "gui        Return to the portfolio",
                "clear      Clear the terminal",
            ],
        },

        name: {
            description: "Who am I?",
            output: [
                "IDENTITY",
                "",
                "Name: Arun",
                "Role: Computer Science Engineer",
                "Interests: Software, AI, and game development",
                "",
                "Currently building things and learning along the way.",
            ],
        },

        projects: {
            description: "Explore my projects",
            output: [
                "PROJECT DIRECTORY",
                "",
                "01  AI Enhanced Traffic Management Network",
                "    Computer vision and intelligent traffic signals",
                "",
                "02  Crazy Fjords",
                "    A 2D boat game built with Godot",
                "",
                "03  More projects available in the visual portfolio.",
                "    Type 'gui' to explore them.",
            ],
        },

        academics: {
            description: "My education",
            output: [
                "ACADEMIC RECORD",
                "",
                "Field: Computer Science and Engineering",
                "Explore the Academics section in my visual portfolio",
                "for education details and certifications.",
            ],
        },

        about: {
            description: "A little about me",
            output: [
                "ABOUT ARUN",
                "",
                "An engineer who enjoys building, experimenting,",
                "solving problems, and exploring new technologies.",
                "",
                "Interested in software engineering, AI, and games.",
            ],
        },

        contact: {
            description: "How to reach me",
            output: [
                "CONTACT",
                "",
                "Use the Contact section on my main portfolio",
                "to send me a message.",
                "",
                "Type 'gui' to get there.",
            ],
        },
    },

    unknownCommand: (command) => [
        `Command not found: ${command}`,
        "Type 'help' to see the available commands.",
    ],
};
