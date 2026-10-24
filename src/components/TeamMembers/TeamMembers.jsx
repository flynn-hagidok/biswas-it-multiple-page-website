import { useEffect, useState } from "react";

const TeamMembers = () => {

    const [members, setMembers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("team.json")
                if (!res.ok) {
                    throw new Error("Failed to fetc data");
                }

                const data = await res.json();
                setMembers(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <p className="text-center text-xl mt-2">Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    const handleSearch = () => {
        setSearchQuery(search)
    }

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center font-semibold text-2xl md:text-4xl">Our Team Members</h2>
                <p className="max-w-140 text-center mx-auto mt-4 text-slate-600">Meet the talented professionals behind Biswas IT Firm. Our passionate team of developers, designers, and digital marketing experts works together to deliver creative solutions and exceptional results.</p>

                <div className="mt-10">
                    <div className="flex flex-wrap justify-between items-center px-4 lg:px-0">
                        <p className="font-semibold">Total Member: {members.length}</p>
                        <div className="flex gap-2 mt-4 lg:mt-0">
                            <input
                                type="search"
                                name=""
                                id=""
                                value={search}
                                placeholder="search team member"
                                onChange={(e) => setSearch(e.target.value)}
                                className="border rounded p-2"
                            />
                            <button
                                type="button"
                                onClick={handleSearch}
                                className="border p-2 rounded cursor-pointer active:scale-98"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    {
                        filteredMembers.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-2">
                                {
                                    filteredMembers.map(member =>
                                        <div key={member.id} className="p-4 shadow-md border border-slate-100 transition hover:-translate-y-1 duration-300">
                                            <img src={member.image} alt={member.name}
                                                className="h-90 w-90 object-cover"
                                            />
                                            <h2 className="py-2 font-semibold text-lg">{member.name}</h2>
                                            <p className="text-slate-600 font-semibold">{member.position}</p>
                                        </div>
                                    )
                                }
                            </div>
                        ) : <p className="text-center p-10 text-red-600 font-semibold shadow-md mt-10">No team members found!</p>
                    }
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;