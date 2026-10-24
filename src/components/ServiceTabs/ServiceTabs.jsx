import { useEffect, useState } from "react";

const ServiceTabs = () => {

    const [activeCategory, setActiveCategory] = useState("Web Development");
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const categries = [... new Set(service.map(item => item.category))];
    const filterCategories = service.filter(item => item.category === activeCategory);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/service.json")

                if (!res.ok) {
                    throw new Error("Failed to fetch data")
                }

                const data = await res.json();
                setService(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return <p className="text-center text-xl mt-2">Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl lg:text-4xl text-center font-bold">Our Sevices</h2>
                <p className="max-w-180 mx-auto text-center mt-2 text-slate-600">Discover our wide range of innovative digital solutions designed to help your business grow. From web and app development to digital marketing and UI/UX design, we turn your ideas into powerful digital experiences.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                    {
                        categries.map(category =>
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`border border-slate-400 rounded-md py-2 hover:cursor-pointer active:scale-98 ${activeCategory === category ? "bg-blue-600 text-white" : "bg-slate-200"}`}
                            >
                                {category}
                            </button>
                        )
                    }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {filterCategories.map(item =>
                        <div className="p-10 rounded-md bg-blue-100 shadow-md transition hover:-translate-y-1 duration-300">
                            <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
                            <p className="mt-4 text-slate-600">{item.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceTabs;