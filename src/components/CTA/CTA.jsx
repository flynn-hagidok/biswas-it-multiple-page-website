
const CTA = () => {
    return (
        <section className='py-20 bg-blue-50'>
            <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-between p-4'>
                <div>
                    <p className='uppercase font-semibold text-lg'>Let&apos;s Work Together</p>
                    <h2 className='text-4xl font-bold my-2'>Ready to Start Your Project</h2>
                    <p className='text-slate-600'>Get in touch with us today and let&apos;s turn your ideas into reality</p>
                </div>
                <div>
                    <button className='bg-blue-600 text-white px-6 py-2 rounded-md font-semibold cursor-pointer active:scale-98'>Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default CTA;