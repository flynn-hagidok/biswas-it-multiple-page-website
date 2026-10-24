import { LuMessagesSquare, LuClipboardList, LuSettings, LuRocket } from "react-icons/lu";

const processData = [
    {
        id: 1,
        step: "01",
        title: "Discover",
        icon: "💡",
        description: "We understand your business goals, requirements and challenges to plan the right solution.",
    },
    {
        id: 2,
        step: "02",
        title: "Planning",
        icon: "📝",
        description: "We create a clear strategy, project roadmap and timeline to ensure a smooth development process.",
    },
    {
        id: 3,
        step: "03",
        title: "Development",
        icon: "💻",
        description: "Our expert team brings your ideas to life with clean code, modern technology and best practices.",
    },
    {
        id: 4,
        step: "04",
        title: "Launch & Support",
        icon: "🚀",
        description: "We deliver the final solution and provide ongoing support to help your business grow.",
    }
];

const WorkProcess = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center p-4">
                    <h2 className="text-2xl md:text-4xl font-bold mt-6">
                        How We Work
                    </h2>

                    <p className="max-w-2xl mx-auto text-slate-500 mt-5 leading-relaxed">
                        We follow a simple and effective process to turn your ideas
                        into successful digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-16 mt-24 px-8">
                    {
                        processData.map(process =>
                            <div key={process.id} className="border border-slate-400 p-6 rounded-xl relative shadow-md transition hover:-translate-y-1 duration-300">
                                <p className="absolute -left-4 -top-10 rounded-full bg-blue-600 px-4 w-16 h-16 text-white flex items-center justify-center">{process.step}</p>
                                <p className="text-center text-4xl">{process.icon}</p>
                                <p className="text-xl font-bold text-center py-2">{process.title}</p>
                                <p className="text-slate-600 text-center">{process.description}</p>
                            </div>
                        )
                    }
                </div>

            </div>
        </section >
    );
};

export default WorkProcess;