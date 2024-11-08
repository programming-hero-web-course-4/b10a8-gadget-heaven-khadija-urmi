

const Header = ({ title, subtitle }) => {
    return (
        <div className='bg-uniqueColor  flex flex-col w-full h-auto justify-center items-center py-12'>
            <h1 className='font-bold text-4xl text-center mb-6 text-white'>
                {title}
            </h1>
            <p className='text-xs md:text-base text-white text-center font-thin mb-4'>
                {subtitle}
            </p>
        </div>
    );
};

export default Header;