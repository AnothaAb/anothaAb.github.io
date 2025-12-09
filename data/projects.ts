export type Project = { slug:string; title:string; category:"Software"|"Hardware"|"Other"; year:string; summary:string; stack:string[]; role:string; outcome?:string; links?:{ demo?:string; source?:string } };
export const projects: Project[] = [
  { slug:"smart-digital-pet-c2x", title:"Smart Digital Pet (C2X)", category:"Hardware", year:"2024",
    summary:"Portable digital pet that transcribes speech in real time and syncs to a companion app for AI-based memo summarization.",
    stack:["Python","Embedded","Microcontroller","Audio"], role:"Designer & Prototyper", outcome:"Functional prototype with live transcription + synced notes." },
  { slug:"automated-plant-watering", title:"Automated Plant Watering System", category:"Hardware", year:"2023",
    summary:"Low-cost irrigation controller using repurposed coffee-machine components and environmental sensors.",
    stack:["Arduino","C++","Sensors","Relays"], role:"Engineer", outcome:"Moisture-triggered watering; reduced manual checks." },
  { slug:"cohort-viz-dashboard", title:"Cohort Visualization Dashboard", category:"Software", year:"2024",
    summary:"Plotly-based dashboard to compare and explore research cohorts for administrators.",
    stack:["JavaScript","Plotly.js"], role:"Software Engineering Intern", outcome:"Streamlined cohort comparisons and exploration." },
  { slug:"academic-advisor-chatbot", title:"Academic Advisor Chatbot", category:"Software", year:"2024",
    summary:"Chatbot to support course planning using Python and prompt-engineering workflows.",
    stack:["Python","OpenAI API"], role:"Team Lead", outcome:"Guided responses for common advising questions." }
];
export function getProject(slug:string){ return projects.find(p=>p.slug===slug); }
