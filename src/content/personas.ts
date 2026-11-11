// Who TipStore is for: facts from PRD chapter 2.2.
export type Persona = {
  name: string;
  image: string;
  alt: string;
  who: string[];
  sells: string[];
  goal: string;
};

export const PERSONAS: Persona[] = [
  {
    name: "Creators",
    image: "video-creators.webp",
    alt: "Two video creators setting up a camera on a tripod outdoors",
    who: ["YouTubers", "Designers", "Writers", "Photographers", "Musicians", "Digital artists"],
    sells: ["LUTs", "Lightroom presets", "Design templates", "E-books", "Stock photos", "Fonts", "Icons", "Audio packs"],
    goal: "Monetize an existing audience through digital product sales."
  },
  {
    name: "Educators",
    image: "educator.webp",
    alt: "A smiling teacher leaning against a wall covered in handwritten notes",
    who: ["Teachers", "Tutors", "Online instructors", "Subject experts", "Academic professionals"],
    sells: ["Courses", "Lesson notes", "Practice questions", "Worksheets", "Study guides", "Examination materials"],
    goal: "Package educational content into products students can purchase online."
  },
  {
    name: "Coaches",
    image: "coach.webp",
    alt: "A career coach in a pinstripe blazer against a warm wooden wall",
    who: ["Career coaches", "Life coaches", "Relationship coaches", "Mindset coaches", "Business coaches"],
    sells: ["Coaching frameworks", "Workbooks", "Programs", "Templates", "Video lessons"],
    goal: "Scale beyond one-on-one coaching by selling reusable digital resources."
  },
  {
    name: "Consultants",
    image: "consultant.webp",
    alt: "A consultant smiling while working on a laptop in a bright office",
    who: ["Marketing", "HR", "Legal", "Financial", "Strategy"],
    sells: ["SOP templates", "Audit checklists", "Consulting frameworks", "Business documents", "Proposal templates"],
    goal: "Turn consulting expertise into scalable digital products."
  },
  {
    name: "Trainers",
    image: "trainer.webp",
    alt: "Two fitness trainers flexing and laughing in bright sportswear",
    who: ["Tech trainers", "Fitness trainers", "Corporate trainers", "Public speaking trainers", "Sales trainers"],
    sells: ["Training manuals", "Exercise plans", "Video programs", "Certifications", "Slide decks"],
    goal: "Sell training materials outside live sessions."
  },
  {
    name: "Digital entrepreneurs",
    image: "entrepreneur.webp",
    alt: "A digital entrepreneur working on a laptop at a desk",
    who: ["SaaS founders", "Agency owners", "Newsletter operators", "Digital publishers", "Indie makers"],
    sells: ["SaaS templates", "Digital toolkits", "Premium resources", "Guides", "Private downloads"],
    goal: "Build recurring online revenue using digital products."
  }
];
