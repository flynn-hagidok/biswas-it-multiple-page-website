import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { accordion } from "../../data/accordion";
import { useState } from "react";

const Accordion = () => {

    const data = accordion;
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQs = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-10">
            <div className="mt-20 max-w-4xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-sm text-slate-500 mt-6">
                        Everything you need to know about our services.
                    </p>
                </div>

                <div className="flex flex-col gap-4 mt-10 p-8 rounded-md shadow-md border border-slate-300">
                    {data.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="shadow-sm border border-slate-200 rounded-md p-4"
                        >
                            <button
                                type="button"
                                onClick={() => toggleFAQs(index)}
                                className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                            >
                                <span className="text-lg font-bold">
                                    {faq.question}
                                </span>

                                {activeIndex === index ? (
                                    <FaChevronUp className="shrink-0" size={18} />
                                ) : (
                                    <FaChevronDown className="shrink-0" size={18} />
                                )}
                            </button>

                            {activeIndex === index && (
                                <p className="mt-3 text-sm text-slate-500 leading-6">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accordion;