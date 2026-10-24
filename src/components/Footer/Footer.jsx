const social = [
    {
        id: 1,
        label: "Facebook"
    },
    {
        id: 2,
        label: "Instagram"
    },
    {
        id: 3,
        label: "Github"
    },
];

const condition = [
    {
        id: 1,
        label: "Terms & Condition"
    },
    {
        id: 2,
        label: "Privacy & Policy"
    },
    {
        id: 3,
        label: "About us"
    },
]

const Footer = () => {
    return (
        <section className="bg-blue-300 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="md:flex justify-between items-center px-4 md:px-6 lg:px-0">
                    <h2 className="text-2xl lg:text-4xl font-semibold">Biswas IT Firm</h2>

                    <ul className="space-y-2 my-6 lg:my-0">
                        {
                            condition.map(item =>
                                <li key={item.id}
                                    className="hover:text-slate-600 cursor-pointer"
                                >
                                    {item.label}
                                </li>
                            )
                        }
                    </ul>

                    <ul className="space-y-2">
                        {
                            social.map(item =>
                                <li key={item.id}
                                    className="hover:text-slate-600 cursor-pointer"
                                >
                                    {item.label}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;