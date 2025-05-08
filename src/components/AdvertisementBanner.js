const banners = [
    {
        bannerUrl: "/images/Know-What-Your-Future-Life-Partner-Will-Be-Like.webp",
        alt: "Vinay Bajrangi",
        link: "services/online-reports/future-life-partner.php",
        HindiLink: "services-in-hindi/online-reports/future-life-partner",
    },
    {
        bannerUrl: "/images/260_Know When You Will Get Married (2).jpg",
        alt: "Vinay Bajrangi",
        link: "services/online-reports/know-your-marriage-timing.php",
        HindiLink: "services-in-hindi/online-reports/know-your-marriage-timing",
    },
    {
        bannerUrl: "/images/261_Know If You Have The Yoga to Do Business.jpg",
        alt: "Vinay Bajrangi",
        link: "services/online-reports/job-or-business.php",
        HindiLink: "services-in-hindi/online-reports/job-or-business",
    },
];

const AdvertisementBanner = () => {
    const allBanners = [...banners, ...banners];

    return (
        <section className="bg-purple-950 py-10 overflow-hidden">
            <div className="mb-5 text-center">
                <h1 className="text-white text-3xl font-semibold">Unlock Life’s Big Answers with Vedic Astrology</h1>
                <p className="mt-1 text-gray-400 max-w-2xl mx-auto ">Curious about your future? Whether it’s marriage, business success, or your ideal life partner – get clear astrological insights tailored just for you.</p>
            </div>

            <div className="relative marquee-container max-w-7xl mx-auto">
                <div className='pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-purple-950 to-transparent' />
                <div className='pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-purple-950 to-transparent' />
                <div className="marquee-content">
                    {allBanners.map((banner, index) => (
                        <div key={index} className="mt-5 h-32 mr-10">
                            <img className="rounded-lg" src={banner.bannerUrl} alt={banner.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AdvertisementBanner