import bannerImg from "../../assets/banner.jpg";
import Header from "../Header/Header";

const Banner = () => {
    return (
        <section className="relative  h-[694px] bg-uniqueColor mb-48">
            <div className=" bg-uniqueColor text-white text-center py-20">
                <h2 className="leading-extra-loose text-5xl font-bold mb-4">
                    Upgrade Your Tech Accessorize with
                    <br /> Gadget Heaven Accessories
                </h2>
                <p className="mt-6 text-lg ">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!
                </p>
                {/* <Header title='Upgrade Your Tech Accessorize with Gadget Heaven Accessories'
                    subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' /> */}
                <button className="bg-white text-xl text-purple-500 font-semibold py-3 px-8 mt-8 rounded-full hover:bg-gray-200">
                    Shop Now
                </button>
            </div>
            <div className="absolute top-1/2 left-1/2 bottom-3/4 r transform  -translate-x-1/2 -translate-y-1/2 z-10 mt-20 ">
                <img className="w-[1350px]  max-h-[400px] mx-auto rounded-xl" src={bannerImg} />
            </div>
        </section>
    );
};

export default Banner;