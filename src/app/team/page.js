import TeamCard from "@/components/TeamCard";

// Initial structured data for chapter leadership
const FACULTY_ADVISOR = {
  name: "Name ",
  role: "Faculty Advisor",
  department: "Department of Electronics & Communication",
  bio: "Guiding the chapter toward technological excellence, research initiatives, and professional development.",
  photoUrl: "", // Add photo URL or leave empty for initials placeholder
  socials: {
    linkedin: "https://linkedin.com",
    email: "advisor@university.edu",
  },
};

const EXECUTIVE_COMMITTEE = [
  {
    name: "T.V.Sai Charan",
    role: "Chair",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Wireless Comms", "5G/6G"],
    photoUrl:"",
    socials: { linkedin: "https://www.linkedin.com/in/sai-charan-tiruveedhula-b2499429a/", github: "https://github.com" },
  },
  {
    name: "K.Vishnu Vardhan Reddy",
    role: "Vice Chair",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["IoT", "Signal Processing"],
    photoUrl:"",
    socials: { linkedin: "https://www.linkedin.com/in/karla-vishnu-vardhan-reddy-7b720138b/" },
  },
  {
    name: "D.Mani Sharath",
    role: "Secretary",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Computer Networks"],
    photoUrl: "/mani.jpeg",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "M.Thushara",
    role: "Treasurer",
    department: "ECE",
    academicYear: "3rd Year",
    areasOfInterest: ["Embedded Systems"],
    photoUrl:"",
    socials: { linkedin: "https://www.linkedin.com/in/thushara-mallekedi-706002384/" },
  },
  
  {
    name: "G.Sriram",
    role: "Webmaster",
    department: "CSE",
    academicYear: "3rd Year",
    areasOfInterest: ["Next.js", "Web Dev"],
    photoUrl:"",
    socials: { linkedin: "https://www.linkedin.com/in/govindu-sri-ram-2164b532b/", github: "https://github.com/sriram0095" },
  },
];

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Chapter <span className="text-cyan-400">Leadership</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Meet the faculty and student executive committee leading the IEEE Communications Society Student Branch Chapter.
        </p>
      </div>

      {/* Section 1: Faculty Advisor */}
      <section className="mb-20">
        <h2 className="text-xl font-bold text-white mb-8 text-center border-b border-slate-800 pb-4">
          Faculty Leadership
        </h2>
        <div className="max-w-md mx-auto">
          <TeamCard member={FACULTY_ADVISOR} />
        </div>
      </section>

      {/* Section 2: Executive Committee */}
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