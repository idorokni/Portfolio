import {
    pickpack,
    c_punchcard,
    csharp_punchcard,
    cpp_punchcard,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const languages = [
    {
      image: c_punchcard,
    },
    {
      image: csharp_punchcard,
    },
    {
      image: cpp_punchcard,
    },
  ];
  
  const educationData = [
    {
      program: "Magshimim Program",
      year: "2018-2021",
      details: "During my time in the Magshimim program, I honed my software development skills, gaining hands-on experience with a variety of frameworks and libraries. This program challenged me to deepen my understanding of core programming concepts while building practical solutions, allowing me to grow as a developer. I learned how to adapt to different technologies and work efficiently in a collaborative environment. Overall, Magshimim played a significant role in shaping me into a more proficient and well-rounded programmer."
    },
    {
      program: "Gifted Class",
      institution: "High School",
      year: "2015-2021",
      details: "Being part of a gifted class was another pivotal experience. It not only required me to manage my time professionally, balancing multiple projects and deadlines, but also allowed me to explore a wide range of subjects. The rigorous coursework and intellectually stimulating environment pushed me to excel, and I graduated at the top of my class. This experience helped expand my horizons and instilled in me a passion for learning that continues to drive me forward."
    },
  ];
  
  const experiences = [
    {
      title: ".NET Developer",
      company_name: "Pickpack",
      icon: pickpack,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Leveraged the Orleans library to build scalable, distributed systems with actor-based concurrency for efficient task execution.",
        "Managed data access and database interactions by implementing ORM solutions with Entity Framework, ensuring efficient CRUD operations and database performance.",
        "Utilized LINQ to streamline complex data querying and manipulation, enhancing code readability and maintainability in the backend logic.",
        "Developed backend logic using C# to support core functionalities of PickPack’s services.",
      ],
    },
  ];

  const NexusOSPoints = [
    {
      name: "Virtual Memory Management",
      point: "The OS implements advanced memory management techniques, including virtual memory, allowing it to handle processes with efficient use of RAM and swap space. This feature supports multitasking and prevents memory-related bottlenecks.",
    },
    {
      name: "File System Management",
      point: "NexusOS includes a custom file system designed for efficient data storage, retrieval, and manipulation. It supports essential file operations and is optimized for performance.",
    },
    {
      name: "Custom Terminal",
      point: "The system features a powerful, custom-built terminal interface. It allows users to interact directly with the system through commands, providing fine control over processes, files, and system settings. This terminal is designed to support complex operations while remaining user-friendly.",
    },
    {
      name: "Low-Level Development",
      point: "Everything in NexusOS, from the kernel to the memory manager and terminal, is written in low-level C and assembly, offering deep control over system operations and hardware. This gives NexusOS a lightweight yet highly optimized performance profile.",
    },
  ];
  /*
  const projects = [
    {
      name: "NexusOS",
      description:
        "NexusOS is a custom-built, 32-bit operating system developed entirely by me, with a focus on adhering to POSIX standards to ensure compatibility with UNIX-like environments. It is written in low-level C and assembly, emphasizing efficiency, performance, and precise control over the system’s hardware and processes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      point: [
        {
          name: "Virtual Memory Management",
          point: "The OS implements advanced memory management techniques, including virtual memory, allowing it to handle processes with efficient use of RAM and swap space. This feature supports multitasking and prevents memory-related bottlenecks.",
        },
        {
          name: "File System Management",
          point: "NexusOS includes a custom file system designed for efficient data storage, retrieval, and manipulation. It supports essential file operations and is optimized for performance.",
        },
        {
          name: "Custom Terminal",
          point: "The system features a powerful, custom-built terminal interface. It allows users to interact directly with the system through commands, providing fine control over processes, files, and system settings. This terminal is designed to support complex operations while remaining user-friendly.",
        },
        {
          name: "Low-Level Development",
          point: "Everything in NexusOS, from the kernel to the memory manager and terminal, is written in low-level C and assembly, offering deep control over system operations and hardware. This gives NexusOS a lightweight yet highly optimized performance profile.",
        },
      ],
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  */
  export { experiences, languages, NexusOSPoints, educationData };