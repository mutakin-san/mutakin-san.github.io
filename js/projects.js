const projects = [
    {
        id: "pu-shy",
        title: "Pu.Shy",
        description: "Pu.shy is a beginner-friendly iOS app designed to be your virtual lifting partner. It helps new lifters build safe habits by detecting body movements and posture using your phone’s camera.",
        longDescription: "Pu.shy is an innovative iOS application tailored for individuals new to weightlifting. Recognizing that improper form is a leading cause of injury, Pu.shy leverages the power of CoreML and Vision frameworks to provide real-time feedback on your lifting posture. \n\n The app acts as a virtual spotter, analyzing your movements through the phone's camera and offering instant visual and haptic cues when your form deviates from the safe standard. Beyond just correction, Pu.shy tracks your progress over time, helping you build confidence and consistency in your fitness journey. The intuitive interface ensures that even those completely new to the gym can start lifting safely and effectively.",
        features: [
            "Real-time Posture Correction using Vision Framework",
            "Instant Haptic & Visual Feedback",
            "Progress Tracking & Workout History",
            "Beginner-friendly Interface",
            "Privacy-focused: All processing happens on-device"
        ],
        technologies: ["iOS", "Swift", "SwiftUI", "MLKit", "Vision", "CoreData"],
        image: "images/pu.shy.jpg",
        link: null,
        aosDelay: 100,
        tags: ["iOS", "Swift", "MLKit", "UIKit"],
        role: "iOS Developer",
        year: "2025"
    },
    {
        id: "shiny-shift",
        title: "Shiny Shift",
        description: "ShinyShift: Auto-generate fair, efficient cleaning schedules—saved securely and ready to share with one click.",
        longDescription: "The District Cleaning Service Leader at Green Office Park wants to improve operational efficiency, as the current manual plotting method for assigning cleaning areas every two weeks is time-consuming, difficult to track, and makes fair distribution and quick adjustments challenging. Our solution leverages a greedy algorithm and SwiftData to automatically generate a fair and efficient area plotting schedule with a single click. This eliminates the need for manual assignment, ensures the schedule is safely stored locally to prevent data loss, and allows easy distribution to teams in a readable text format. This project was developed using Swift as the main programming language and SwiftUI for building a modern, responsive, and intuitive user interface on iOS. SwiftData was implemented to manage local data storage, ensuring that the generated schedules are saved securely and remain available offline. A custom greedy algorithm serves as the core logic for automatically assigning cleaning areas to teams, enabling efficient and fair distribution without manual input. These technologies were chosen to provide a fast, reliable, and user-friendly experience, while also minimizing the complexity of managing schedules. When the user taps the “Generate Schedule” button, the app uses the greedy algorithm to process area and team data, saves the result using SwiftData, then displays the schedule in a structured text format ready to be shared with the teams. This seamless flow helps the cleaning service lead automate scheduling tasks with just one click.",
        features: [
            "Generate Schedule",
            "Randomized Team Assignment",
            "Fair Distribution",
            "Easy Distribution",
            "Offline Storage"
        ],
        technologies: ["iOS", "Swift", "SwiftUI", "SwiftData"],
        image: "images/shiny-shift.jpeg",
        link: null,
        aosDelay: 100,
        tags: ["iOS", "Swift", "SwiftData"],
        role: "iOS Developer",
        year: "2025"
    },
    {
        id: "asanti",
        title: "Asanti",
        description: "An Android application that allows users to check the stunting status of babies and mom.",
        longDescription: "Asanti is a comprehensive Android application developed to combat stunting in children by empowering mothers with easy-to-use monitoring tools. The app provides a digital platform for tracking the growth and nutritional status of both babies and expectant mothers.\n\n Users can input key health metrics, which the app analyzes against standard growth charts to detect early signs of stunting or malnutrition. Asanti also serves as an educational hub, offering personalized nutritional advice, meal plans, and health tips approved by medical professionals. By bridging the gap between families and health resources, Asanti aims to ensure every child gets a healthy start in life.",
        features: [
            "Stunting Detection Algorithm",
            "Growth & Nutrition Tracking",
            "Personalized Health Recommendations",
            "Educational Articles & Resources",
            "User-friendly Dashboard for Mothers"
        ],
        technologies: ["Android", "Kotlin", "Firebase", "MPAndroidChart", "Glide"],
        image: "images/asanti.png",
        link: null,
        aosDelay: 100,
        tags: ["Android", "Kotlin", "Firebase"],
        role: "Android Developer",
        year: "2024"
    },
    {
        id: "luarkelas-academy",
        title: "Luarkelas Academy",
        description: "Luarkelas Academy is Fullstack website using Next.js that provides a platform for users to buy online courses and events.",
        longDescription: "Luarkelas Academy is a modern, full-stack ed-tech platform built to democratize access to quality education. Developed using Next.js for high performance and SEO, the platform connects learners with expert instructors through a seamless course marketplace.\n\n The platform features a robust payment gateway integration for secure transactions, a dynamic dashboard for students to track their learning progress, and an instructor portal for course management. With a focus on user experience, Luarkelas Academy offers a responsive design that works perfectly across all devices, ensuring learning can happen anywhere, anytime.",
        features: [
            "Secure Payment Gateway Integration",
            "Dynamic Course Management System",
            "User Dashboard & Progress Tracking",
            "Responsive & SEO Optimized Design",
            "Real-time Event Registration"
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Web"],
        image: "images/luarkelas_academy.png",
        link: "/",
        aosDelay: 200,
        tags: ["Next.js", "React", "Tailwind", "TypeScript"],
        role: "Fullstack Developer",
        year: "2024"
    },
    {
        id: "predikter",
        title: "Predikter",
        description: "Predikter is an Android application that allows users to predict the cattle body weight & selling price based on their body size.",
        longDescription: "Predikter is a specialized Android tool designed to assist cattle farmers and traders in making informed economic decisions. By utilizing machine learning models (TFLite), the app can estimate the weight and fair market value of cattle simply by analyzing input data regarding their body dimensions.\n\n This tool eliminates the need for expensive and cumbersome weighing scales in the field. It provides instant, accurate estimates that help prevent financial loss and ensure fair trade. The app also maintains a history of predictions, allowing farmers to track the growth and value appreciation of their livestock over time.",
        features: [
            "AI-Powered Weight Prediction (TFLite)",
            "Real-time Market Price Estimation",
            "Offline Functionality for Remote Areas",
            "Historical Data Tracking",
            "Simple Data Entry Interface"
        ],
        technologies: ["Android", "Kotlin", "TensorFlow Lite", "Room Database", "Coroutines"],
        image: "images/predikter.png",
        link: "https://github.com/mutakin-san/predikter",
        aosDelay: 300,
        tags: ["Android", "Kotlin", "TFLite"],
        role: "Android Developer",
        year: "2024"
    },
    {
        id: "ditonton",
        title: "Ditonton",
        description: "Ditonton is an Android application that allows users to watch movies and TV series.",
        longDescription: "Ditonton is a sleek and feature-rich movie discovery application built with a focus on Clean Architecture and modular design. It integrates with the TMDB API to provide users with up-to-date information on thousands of movies and TV shows.\n\n The app features a robust search engine, personalized watchlists, and detailed information screens including cast, reviews, and trailers. Under the hood, Ditonton demonstrates best practices in modern Android development, utilizing dependency injection, reactive programming, and a clear separation of concerns to ensure scalability and testability.",
        features: [
            "Clean Architecture & Modular Design",
            "TMDB API Integration",
            "Offline Caching & Watchlist",
            "Search & Filter Functionality",
            "Unit & UI Testing Coverage"
        ],
        technologies: ["Android", "Kotlin", "Clean Architecture", "Dagger Hilt", "Retrofit", "RxJava"],
        image: "images/ditonton.png",
        link: "https://github.com/mutakin-san/ditonton",
        aosDelay: 400,
        tags: ["Android", "Kotlin", "Clean Arch"],
        role: "Android Developer",
        year: "2023"
    },
    {
        id: "cypher-city-sfc",
        title: "Cypher City SFC",
        description: "Cypher City SFC is an Android application for managing competitions.",
        longDescription: "Cypher City SFC is a dedicated management platform designed to streamline the organization of sports and e-sports competitions. It serves as a central hub for organizers, participants, and spectators to stay updated on tournament schedules, scores, and standings.\n\n The app simplifies complex logistics such as bracket generation, team registration, and real-time score reporting. With its intuitive MVVM architecture, the app ensures a smooth and responsive user experience, handling real-time data updates efficiently to keep everyone in the loop during high-stakes events.",
        features: [
            "Tournament Bracket Management",
            "Team Registration & Management",
            "Real-time Score Updates",
            "Event Scheduling & Notifications",
            "MVVM Architecture Pattern"
        ],
        technologies: ["Android", "Kotlin", "MVVM", "Firebase Realtime DB", "LiveData"],
        image: "images/cyphercity.png",
        link: "https://github.com/mutakin-san/cyphercity",
        aosDelay: 500,
        tags: ["Android", "Kotlin", "MVVM"],
        role: "Android Developer",
        year: "2023"
    },
    {
        id: "valo-ai",
        title: "Valo.AI",
        description: "Valo.AI is an Android application to recommend vaccines location and types based on user.",
        longDescription: "Valo.AI is a public health initiative app designed to increase vaccine accessibility and awareness. It uses geolocation services to recommend the nearest vaccination centers and appropriate vaccine types based on the user's profile and location.\n\n The app integrates with map services to provide turn-by-turn navigation to clinics. It also features an intelligent recommendation engine that considers user age, health history, and local availability to suggest the most suitable vaccination options, helping to streamline the public health response.",
        features: [
            "Location-based Vaccine Center Finder",
            "Personalized Vaccine Recommendations",
            "Google Maps Integration",
            "User Health Profile Management",
            "Appointment Scheduling Support"
        ],
        technologies: ["Android", "Kotlin", "Google Maps API", "Location Services", "Room Database"],
        image: "images/valoai.png",
        link: "https://github.com/mutakin-san/valo.ai",
        aosDelay: 600,
        tags: ["Android", "Kotlin", "Maps API"],
        role: "Android Developer",
        year: "2023"
    },
    {
        id: "maresto",
        title: "Maresto",
        description: "Dicoding Submission application for Flutter Basic for Beginners.",
        longDescription: "Maresto is a restaurant discovery app built as a showcase of fundamental Flutter development skills. It allows users to browse a curated list of restaurants, view detailed menus, and read customer reviews.\n\n Despite being a submission project, Maresto features a polished UI/UX with smooth transitions and a responsive layout. It demonstrates proficiency in Dart, widget composition, state management, and parsing JSON data, serving as a solid foundation for cross-platform mobile development.",
        features: [
            "Restaurant Listing & Search",
            "Detailed Menu & Review View",
            "Favorites / Bookmarking System",
            "Responsive Cross-platform UI",
            "Dark Mode Support"
        ],
        technologies: ["Flutter", "Dart", "Provider", "Shared Preferences"],
        image: "images/maresto.png",
        link: null,
        aosDelay: 700,
        tags: ["Flutter", "Dart"],
        role: "Mobile Developer",
        year: "2023"
    }
];
