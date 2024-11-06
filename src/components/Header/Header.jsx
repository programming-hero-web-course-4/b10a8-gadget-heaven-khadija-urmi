

const Header = ({ title, subtitle }) => {
    return (
        <div className='flex flex-col w-full justify-center items-center my-12'>
            <h1 className='font-bold text-4xl text-center mb-6'>
                {title}
            </h1>
            <p className='text-xs md:text-base text-gray-600 text-center font-thin'>
                {subtitle}
            </p>
        </div>
    );
};

export default Header;