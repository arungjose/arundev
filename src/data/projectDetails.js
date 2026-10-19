
const projectDetails = {
    'crazy-fjord': {
        title: 'Crazy Fjord',
        category: 'GAME DEVELOPMENT',
        description: [
            'Crazy Fjord is an endless boating game where you navigate a winding fjord, dodging cliffs and boulders to beat your high score.',
            'Built in Godot with a flat, minimalist 2D vector art style, the game features custom sound effects, music, crash animations, and a saved high score system.',
            'Crazy Fjord is nearing completion and is planned for release on the Google Play Store. Stay tuned!'
        ],
        technologies: ['Godot', 'GDScript', 'Affinity'],
        image: `${import.meta.env.BASE_URL}/images/crazy-fjord.png`,
        repository: '',
        screenshots: [],
    },

    'axolotl': {
        title: 'Axolotl',
        category: 'AI / Reinforcement Learning',
        description: [
            'Axolotl is an AI-powered cognitive training platform featuring 30+ interactive minigames across five domains: executive function, working memory, attention, processing speed, and abstract reasoning.',
            'Built with Flutter and Dart, the app integrates Google Gemini 2.5 Flash to deliver personalized AI coaching based on user performance and cognitive strengths. It features adaptive training recommendations, performance analytics, learning velocity tracking, and an RPG-style progression system that rewards improvement.',
            'Beyond traditional brain training, Axolotl incorporates an AR-inspired activity break system using camera and motion sensors to encourage physical movement. The app also features a premium glassmorphism interface, dynamic light and dark themes, dyslexia-friendly typography, and secure local profile storage.',
            'Axolotl brings together generative AI, gamification, motion sensing, and accessible UI design to create an engaging, personalized cognitive training experience.'
        ],
        technologies: ['Flutter', 'Reinforcement Learning', 'Dart', 'Google Gemini 2.5 Flash'],

        image: `${import.meta.env.BASE_URL}/images/axolotl.jpeg`,
        repository: 'https://github.com/Adarsh-S-kmr/Axolotl',
        screenshots: [],
    },

    'ai-traffic-management': {
        title: 'AI Traffic Management',
        category: 'AI / COMPUTER VISION',
        description: [
            'AI Enhanced Traffic Management Network is an intelligent traffic management system that uses computer vision and AI to improve traffic flow, reduce congestion, and enable smarter signal control at road junctions. It uses YOLOv11 and OpenCV to detect and classify vehicles in real time, including cars, motorcycles, buses, trucks, bicycles, and emergency vehicles such as ambulances.',
            'Built with Python, Flask, and SQL, the system combines real-time vehicle detection with fuzzy logic to dynamically adjust traffic signal timings based on traffic density. It also models junctions as interconnected nodes that exchange traffic data over HTTPS, enabling coordinated decision-making across neighboring intersections.',
            'The project brings together deep learning, computer vision, fuzzy logic, and backend development to explore a more adaptive and efficient approach to urban traffic management, with a focus on prioritizing emergency vehicles and improving road efficiency.'
        ],
        technologies: ['Python', 'YOLO', 'OpenCV'],
        image: `${import.meta.env.BASE_URL}/images/trafficmanagement.png`,
        repository: 'https://github.com/arungjose/trafficnetwork',
        link: 'https://ieeexplore.ieee.org/document/11349057',
        screenshots: [],
    },

    'cyphora': {
        title: 'Cyphora',
        category: 'CYBERSECURITY',
        description: [
            'Cyphora is a censorship-circumvention project designed to make information more accessible by helping users retrieve static web pages blocked by regional or network restrictions. It uses a Telegram bot to process submitted URLs and generate mirror links for accessing otherwise restricted content.',
            'Built with Python, the project automates the retrieval and mirroring workflow, with IPFS-based distribution helping make mirrored content accessible. It explores alternative approaches to information access, combining bot automation, web content retrieval, and decentralized hosting.',
            'Cyphora was built to explore how decentralized technologies can help reduce barriers to online information. The project focuses on static websites and provides a simple, chat-based interface for requesting and accessing mirrored pages.'
        ],
        technologies: ['Python', 'IPFS', 'Tor proxy', 'Telegram Bot'],
        image: `${import.meta.env.BASE_URL}/images/cyphora.png`,
        repository: 'https://github.com/arungjose/Cyphora',
        screenshots: [],
    },

    'cygnus': {
        title: 'Cygnus',
        category: 'AI / ML',
        description: [
            'CYGNUS is a machine learning project developed for the NASA Space Apps Challenge to identify potential exoplanets using data from NASA’s Kepler Object of Interest (KOI) dataset. It uses a Random Forest classifier trained on nearly 10,000 celestial objects and 17 stellar and orbital parameters to distinguish potential exoplanets from false positives, achieving 93% model accuracy.',
            'Built with Python and machine learning tools, the project includes data preprocessing, model training, evaluation, and a pre-trained classifier. Inspired by the transit photometry method, it explores how astronomical data can be used to automate exoplanet candidate classification.',
            'CYGNUS also features a web-based demo where users can enter celestial object parameters and receive predictions. The project combines astronomy, data science, and predictive modelling to make exoplanet classification more accessible and interactive.'
        ],
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'TensorFlow'],
        image: `${import.meta.env.BASE_URL}/images/cygnus.png`,
        repository: 'https://github.com/arungjose/exoplanet_koi',
        screenshots: [],
    },

    'signum': {
        title: 'Signum',
        category: 'AI / COMPUTER VISION',
        description: [
            'A real-time hand gesture recognition system that uses computer vision to identify hand signs through a webcam and translate them into readable text. Built with Python, OpenCV, and MediaPipe, the system tracks 21 hand landmarks to analyze finger positions and classify gestures such as open palm, fist, peace, and I-love-you.',
            'The project uses geometric rules and landmark coordinates to recognize gestures without requiring a separately trained machine learning model. It also supports two-hand gesture recognition, including a custom thank-you sign, with live landmark visualization and on-screen predictions.',
            'This project explores how real-time computer vision can support gesture-based communication and accessibility, providing a foundation for future sign language recognition and human-computer interaction applications.'
        ],
        technologies: ['Python', 'TensorFlow', 'OpenCV'],
        image: `${import.meta.env.BASE_URL}/images/signum.png`,
        repository: 'https://github.com/arungjose/Signum',
        screenshots: [],
    },

    'weather-man': {
        title: 'Weather-Man',
        category: 'AI / NLP',
        description: [
            'Weather-Man is an AI-powered conversational weather assistant that transforms real-time weather data into natural, context-aware responses. It uses the OpenWeatherMap API to retrieve current and forecast weather information, allowing users to ask questions about conditions across different locations and timeframes.',
            'Built with Python, the system combines data preprocessing, lightweight natural language understanding (NLU), and structured prompt construction to interpret user queries and retrieve relevant weather information. It integrates Ollama with the Llama 2 language model for natural language generation (NLG), producing conversational responses grounded in the processed weather data.',
            'The project demonstrates how traditional data processing and language understanding can work alongside locally hosted large language models to create a practical AI assistant, combining API integration, context-aware query handling, and generative AI in a single pipeline.'
        ],
        technologies: ['Python', 'spaCy', 'OpenWeatherMap', 'Ollama'],
        image: `${import.meta.env.BASE_URL}/images/weatherman.png`,
        repository: 'https://github.com/arungjose/Weather-Man',
        screenshots: [],
    },
    'souch': {
        title: 'Souch',
        category: 'OPEN SOURCE',
        description: [
            'An open-source project I started to build free sound modulation software using Python, currently focused on live audio processing.',
            'The project is still in development, with plenty of room for new features, sound modulation techniques, and improvements. My goal is to build something useful that anyone can access, experiment with, and contribute to.',
            'Collaboration is welcome! Whether you have ideas for new audio effects, want to fix bugs, or help improve the software, feel free to check out the project and contribute. Let’s build something great together!'
        ],
        technologies: ['Python', 'PyAudio'],
        image: `${import.meta.env.BASE_URL}/images/souch.png`,
        repository: 'https://github.com/arungjose/souch',
        screenshots: [],
    },



}

export default projectDetails
