import TeamCard from "@/components/TeamCard";

// 1. Faculty Leadership Section
const FACULTY_LEADERSHIP = [
  {
    name: "Dr. Harpreet Kaur",
    role: "IEEE ComSoc Convenor",
    department: "IEEE ComSoc Student Branch Chapter",
    academicYear: "Convenor",
    bio: "Guiding the chapter toward technological excellence, research initiatives, and professional development.",
    photoUrl: "/Convenor.jpg",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "Dr. Md Rashid Mahmood",
    role: "IEEE ComSoc Advisor",
    department: "IEEE ComSoc Student Branch Chapter",
    academicYear: "Advisor",
    bio: "Providing expert mentorship and supporting student chapter milestones.",
    photoUrl: "/Comsoc-Coordinator.jpg",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "Ms. Manpreet Kaur",
    role: "ECE Coordinator",
    department: "IEEE ComSoc Student Branch Chapter",
    academicYear: "Coordinator",
    bio: "Coordinating departmental activities and supporting student engagement in ECE initiatives.",
    photoUrl: "/manpreet.jpg",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "Mr. Sunkari Rajasheker",
    role: "ECE Coordinator",
    department: "IEEE ComSoc Student Branch Chapter",
    academicYear: "Coordinator",
    bio: "Coordinating departmental activities and supporting student engagement in ECE initiatives.",
    photoUrl: "/rajshekar.jpg",
    socials: { linkedin: "https://linkedin.com" },
  },
];

// 2. Core Team Section
const CORE_TEAM = [
  {
    name: "Sai Charan Tiruveedhula",
    role: "Chair",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Wireless Comms", "5G/6G"],
    photoUrl: "/Charan1.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/sai-charan-tiruveedhula-b2499429a/", github: "https://github.com" },
  },
  {
    name: "Vishnu Reddy Karla",
    role: "Vice Chair",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["IoT", "Signal Processing"],
    photoUrl: "/Vishnu.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/karla-vishnu-vardhan-reddy-7b720138b/" },
  },
  {
    name: "Mani Sharath Devarala",
    role: "Secretary",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Computer Networks"],
    photoUrl: "/mani.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/sharath-devarala-3881a8406?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  },
  {
    name: "Thushara Mallekedi",
    role: "Treasurer",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Embedded Systems"],
    photoUrl: "/thushara.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/thushara-mallekedi-706002384/" },
  },
  {
    name: "Sriram Govindu",
    role: "Webmaster",
    department: "CSE",
    academicYear: "3rd Year",
    areasOfInterest: ["Web Dev"],
    photoUrl: "/Sriram1.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/govindu-sri-ram-2164b532b/", github: "https://github.com/sriram0095" },
  },
];

// 3. Executive Committee Section (Remaining Members from PDF)
const EXECUTIVE_COMMITTEE = [
  {
    name: "B.K. Srikar",
    role: "General Secretary",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Chapter Operations"],
    photoUrl: "/srikar1.jpeg",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "S. Rishi",
    role: "Joint Treasurer",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Financial Planning"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "Ch. Lohitha",
    role: "Public Relations (PR)",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Outreach", "Communications"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "Muchapotula Prudhvi",
    role: "Student Representative",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Student Coordination"],
    photoUrl: "/prudvi.jpg",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "P. Prethika",
    role: "Student Representative",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Student Coordination"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "J. Naga Pardhu",
    role: "Documentation Head",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Reports", "Documentation"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "A. Sreemanth",
    role: "Documentation Head",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Reports", "Documentation"],
    photoUrl: "/srimanth1.jpeg",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "Ch. Sandeep",
    role: "Technical Lead",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Workshops", "Coding"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "B. Achyuth",
    role: "Design Lead",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Graphics", "UI/UX"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "K. Swaranjali",
    role: "Design Lead",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Graphics", "UI/UX"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "B. Anusha",
    role: "Membership Recruiter",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Acquisition", "Engagement"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "K. Aneesh",
    role: "Membership Recruiter",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Acquisition", "Engagement"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "K. Gayathri",
    role: "Discipline Lead",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Event Management"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "J. Pranav",
    role: "Publicity & Social Media",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Social Media", "Marketing"],
    photoUrl: "",
    socials: { linkedin: "https://linkedin.com" },
  },
];

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
          IEEE Student Branch - STB60237593
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Chapter <span className="text-cyan-400">Leadership</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Meet the faculty advisors, core student leaders, and executive committee members driving our chapter forward.
        </p>
      </div>

      {/* Section 1: Faculty Leadership */}
      <section className="mb-20">
        <h2 className="text-xl font-bold text-white mb-8 text-center border-b border-slate-800 pb-4">
          Faculty Leadership
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-18 max-w-3xl mx-auto">
          {FACULTY_LEADERSHIP.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </section>

      {/* Section 2: Core Team */}
      <section className="mb-20">
        <h2 className="text-xl font-bold text-white mb-8 text-center border-b border-slate-800 pb-4">
          Core Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_TEAM.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </section>

      {/* Section 3: Executive Committee */}
      <section>
        <h2 className="text-xl font-bold text-white mb-8 text-center border-b border-slate-800 pb-4">
          Executive Committee
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXECUTIVE_COMMITTEE.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </section>

    </div>
  );
}