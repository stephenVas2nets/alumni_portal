import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import video from "../assets/video.gif";
import Logo from "../assets/logo.png";

export const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          descriptionRef.current,
          textRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.set(cards, { opacity: 0, y: 20, scale: 0.95 });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.5)",
          delay: 1.2,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white text-black"
    >
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        <img
          src={video}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Darker overlay for better contrast and blending */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header - Logo img + text nearly touching for seamless flow */}
        <header className="w-full bg-white border-b border-gray-200 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div ref={logoRef} className="flex items-center space-x-0.5">
              <img
                src={Logo}
                alt="AS2Nets Logo"
                className="h-8 md:h-10 flex-shrink-0"
              />
              <span className="text-gray-800 font-semibold text-sm md:text-base whitespace-nowrap -ml-1">
                AS2Nets Technologies Ltd
              </span>
            </div>
            {/* Empty right side for balance */}
            <div></div>
          </div>
        </header>

        {/* Simplified Main Content - Centered, minimal */}
        <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-2xl"
            >
              Coming Soon
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl font-semibold mb-6 text-white drop-shadow-xl"
            >
              Employee Alumni Network Portal
            </p>

            <p
              ref={descriptionRef}
              className="text-base md:text-lg text-white/95 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow-lg"
            >
              Connect with former colleagues, share experiences, and stay
              engaged with our vibrant community.
            </p>

            <div ref={textRef} className="mb-12">
              <p className="text-base text-white/90 drop-shadow-md">
                Something amazing is coming. Stay tuned!
              </p>
            </div>

            {/* Simplified Cards - More blended, fluid layout, less rigid */}
            <div
              ref={cardsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-lg text-white p-4 md:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-red-400 text-2xl mb-2">🤝</div>
                <h3 className="text-lg font-semibold mb-1">Connect</h3>
                <p className="text-white/90 text-sm">
                  Reconnect and expand your network
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg text-white p-4 md:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-red-400 text-2xl mb-2">💬</div>
                <h3 className="text-lg font-semibold mb-1">Engage</h3>
                <p className="text-white/90 text-sm">
                  Share insights and stay updated
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg text-white p-4 md:p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-red-400 text-2xl mb-2">🎯</div>
                <h3 className="text-lg font-semibold mb-1">Grow</h3>
                <p className="text-white/90 text-sm">
                  Access mentorship and opportunities
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
