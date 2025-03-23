import { Mail, Phone, MapPin, Briefcase, GraduationCap, FileText, Award } from "lucide-react"

export default function ResumePage() {
  return (
    <main className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="bg-gray-900 text-white p-8 md:w-1/3">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">SANDEEP</h1>
              <p className="text-xl mt-2">MANAGER - TECHNOLOGY</p>
              <p className="text-lg mt-1">LEAD - PAN INDIA</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>(+91) 9711305739</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>coolfriendcs@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Gurugram, INDIA</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-3" />
                <span>11 Years 0 Month</span>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Key Skills</h2>
              <div className="flex flex-wrap">
                {[
                  "Excel",
                  "SQL",
                  "MS Office",
                  "Visio",
                  "Power Point",
                  "Web Applications",
                  "System & Process",
                  "Property Management",
                  "Power BI",
                  "PHP Developer",
                ].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Languages</h2>
              <ul className="list-disc list-inside">
                <li>English</li>
                <li>Hindi</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="p-8 md:w-2/3">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                Profile Summary
              </h2>
              <p className="text-gray-700">
                With over eleven+ years of experience as a Business Project manager, I have successfully developed and
                implemented more than 15 various business modules like Procurement, Experience App for customer, Central
                Helpdesk, Compliances, Invoicing etc. My responsibilities included understanding business requirements
                and provide tech solutions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Work Experience
              </h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Manager - Technology Lead - Pan India</h3>
                <p className="text-gray-600 italic">Jones Lang LaSalle (JLL) | 03/2012 - Present</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>
                    Led the development of new modules for web and mobile applications, enhancing functionality and user
                    experience.
                  </li>
                  <li>
                    Conducted thorough testing of the new modules to ensure seamless performance and functionality.
                  </li>
                  <li>Implemented new modules with a focus on optimizing user experience and performance.</li>
                  <li>
                    Managed end-to-end development of online applications, including Performance Monitoring System,
                    Training Module, Customer Feedback Module, and Inventory System.
                  </li>
                  {/* Add more bullet points as needed */}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Operations Executive</h3>
                <p className="text-gray-600 italic">Wipro Infotech Limited | 12/2009 - 03/2012</p>
                <p className="mt-2 text-gray-700">
                  Operations & MIS (Management Information System) Executive: Responsible for enforcing process
                  implementation & for reviewing & publishing MIS reports for projects of Bharti program. Managed
                  centralized DMS Server for Pan India and maintained SQL databases.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" />
                Education
              </h2>
              <div className="mb-2">
                <h3 className="text-xl font-semibold">MCA - Computers</h3>
                <p className="text-gray-600">Sikkim Manipal University (SMU) | 2012</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">B.A - Arts & Humanities</h3>
                <p className="text-gray-600">Delhi University | 2008</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Certifications
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>GNIIT From NIIT (Contains SQL, MS Office, .Net, Java)</li>
                <li>ITI In COPA</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

