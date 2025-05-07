import React from 'react'

const Questions = [
    {
        textHindi: "लग्न कैलकुलेटर",
        text: "Ascendant Calculator",
        imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/ascendent.png",
        link: "/calculator/ascendant-calculator.php",
        HindiLink: "/calculator-in-hindi/ascendant-calculator",
    },
    {
        textHindi: "रत्न सुझाव",
        text: "Gemstone Suggestion",
        imageUrl:
            "https://www.vinaybajrangi.com/asset_frontend/img/calculators/gemstone-suggestion.png",
        link: "/calculator/gemstone-calculator.php",
        HindiLink: "/calculator-in-hindi/gemstone-calculator",
    },
    {
        textHindi: "रुद्राक्ष सुझाव ",
        text: "Rudraksha Suggestion",
        imageUrl:
            "https://www.vinaybajrangi.com/asset_frontend/img/calculators/rudraksha-suggestion.png",
        link: "/calculator/rudraksha-calculator.php",
        HindiLink: "/calculator-in-hindi/rudraksha-calculator",
    },
    {
        textHindi: "अंकज्योतिष आपके लिए ",
        text: "Numerology For You",
        imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/numerology.png",
        link: "/calculator/numerology-calculator.php",
        HindiLink: "/calculator-in-hindi/numerology-calculator",
    },
    {
        textHindi: "कालसर्प दोष",
        text: "Kaalsarp Dosha",
        imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/kaalsarp.png",
        link: "/calculator/kaalsarp-dosh-calculator.php",
        HindiLink: "/calculator-in-hindi/kaalsarp-dosh-calculator",
    },
    {
        textHindi: "साढ़ेसाती कैलकुलेटर",
        text: "Sadesati Calculator",
        imageUrl:
            "https://www.vinaybajrangi.com/asset_frontend/img/calculators/sadesati-calculator.png",
        link: "/calculator/sadesati-calculator.php",
        HindiLink: "/calculator-in-hindi/sadesati-calculator",
    },
    {
        textHindi: "पितृ दोष कैलकुलेटर ",
        text: "Pitra Dosha Calculator",
        imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/pitra-dosha.png",
        link: "/calculator/pitra-dosha-calculator.php",
        HindiLink: "/calculator-in-hindi/pitra-dosha-calculator",
    },
    {
        textHindi: "मांगलिक दोष कैलकुलेटर",
        text: "Manglik Dosha Calculator",
        imageUrl:
            "https://www.vinaybajrangi.com/asset_frontend/img/calculators/manglik-dosha-calculator.png",
        link: "/calculator/manglik-dosha-calculator.php",
        HindiLink: "/calculator-in-hindi/manglik-dosha-calculator",
    },
    {
        textHindi: "चंद्र राशि कैलकुलेटर",
        text: "Moon Sign Calculator",
        imageUrl: "https://www.vinaybajrangi.com/asset_frontend/img/calculators/moon-sign.png",
        link: "/calculator/moon-sign-calculator.php",
        HindiLink: "/calculator-in-hindi/moon-sign-calculator",
    },
];

const CalculatorSection = () => {
    const allQuestions = [...Questions, ...Questions];

    return (
        <section className="bg-red-950 py-10 overflow-hidden">
            <div className="mb-5 text-center">
                <h1 className="text-white text-3xl font-semibold">Free Vedic Astrology Calculators</h1>
                <p className="mt-1 text-gray-400 max-w-2xl mx-auto ">Explore our free Vedic astrology calculators to uncover deep insights about your birth chart, moon sign, rising sign, planetary positions, and more.</p>
            </div>

            <div className="relative marquee-container max-w-7xl mx-auto">
                <div className='pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-red-950 to-transparent' />
                <div className='pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-red-950 to-transparent' />
                <div className="marquee-content">
                    {allQuestions.map((qs, index) => (
                        <div key={index} className="marquee-item">
                            <img
                                className="transition-transform duration-200 ease-linear hover:scale-110"
                                src={qs.imageUrl}
                                alt={qs.text}
                            />
                            <h2 className="mt-1 text-center whitespace-nowrap text-xs text-white">
                                {qs.text}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CalculatorSection