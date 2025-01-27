import { nvidiaLogo, amdLogo, msiLogo, intelLogo, asusLogo, rogLogo, gigabyteLogo } from '../img/logo';
import heroImage from "../img/hero.jpg";

function Hero(): JSX.Element {
    const logos = [nvidiaLogo, amdLogo, intelLogo, asusLogo, gigabyteLogo, msiLogo, rogLogo];

    return (
        <div className="flex satoshi flex-col h-dvh w-dvw bg-white">
            <main className="relative flex flex-col h-dvh px-4 md:px-[54px] lg:px-[184px]">
                <div className="absolute inset-0 w-full h-full">
                    <img src={heroImage} alt="Hero" className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full flex items-center">
                    <section className="space-y-4 w-full md:w-1/2 p-6 md:p-0">
                        <h1 className="integral text-3xl md:text-5xl lg:text-6xl text-left font-bold text-white">
                            YOUR PERFECT GPU MATCH IS JUST A CLICK AWAY
                        </h1>
                        <p className="satoshi text-gray-200 text-left text-sm md:text-lg lg:text-xl max-w-xl mt-4">
                            Unleash next-level performance with our premium GPU collection - from gaming powerhouses to professional workstation cards, each engineered for uncompromising speed and visual excellence.
                        </p>
                        <a
                            href="#Marketplace"
                            className="satoshi mt-16 bg-white text-black text-sm md:text-lg lg:text-xl font-extralight px-4 py-2 md:px-6 md:py-3 rounded hover:bg-transparent hover:text-white hover:outline hover:outline-white duration-200 ease-in-out transition-colors"
                        >
                            Shop Now
                        </a>
                    </section>
                </div>
            </main>

            <section className="marquee-wrapper relative overflow-hidden h-fit bg-black py-4">
                <div className="flex marquee-content animate-marquee items-center space-x-16 md:space-x-32">
                    {Array.from({ length: 3 }, () => logos).flat().map((logo, index) => (
                        <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-12 md:h-16 lg:h-20" />
                    ))}
                </div>
            </section>

            <style>{`
                .marquee-wrapper {
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                    background: black;
                }

                .marquee-content {
                    display: flex;
                    gap: 32px; /* Adjust spacing between items */
                    white-space: nowrap;
                    will-change: transform;
                    animation: marquee 15s linear infinite;
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </div>
    );
}

export default Hero;
