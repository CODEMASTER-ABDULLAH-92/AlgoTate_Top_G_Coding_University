"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../Component/SeoComp"
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AndrewTateMotivationalSpeech = () => {
  const containerRef = useRef(null);

  const speechSegments = [
    {text:"Listen to me.  If you don't wake up right now, you will lose everything.  Not just your dreams, your time, your potential, your entire future.  And the worst part, it'll be your fault.  You've been lied to.  They told you to hope, to stay positive, to trust the process.  It was all a trap.  Hope is the greatest scam in human history.  And it's the reason you're still broke, still weak, still invisible in a world that only respects power.  Every second you wait, another man, someone hungry or stronger and more ruthless than you is taking what should have been yours. "},
    {text:"And if you don't act now, you will be left behind forever.  This is your last chance to wake up.  Listen closely or regret it for life.  Let me tell you something most people are too scared to admit.  Hope is useless without action.  You've been lied to your whole life.  They told you to stay positive, believe in yourself, and trust the universe.  As if sitting around, waiting for success to land in your lap was ever going to work.  It won't.  Right now, at this very moment, another man is outworking you.  While you're scrolling through your phone, he's making money.  While you're hesitating, he's executing.  While you're hoping for change, he's forcing the world to bend to his will.  That's why you're stuck.  That's why you don't have what you want.  Because you still think hope will save you.  It won't.  Because winners don't hope, winners take action. "},
    {text:"You think the rich have an advantage?  They do.  You think successful men are playing the game better than you?  They are.  But here's what no one wants to admit.  You can win anyway. "},
   {text:"By doing what weak men refuse to do.  Discipline.  Sacrifice.  Suffering.  Grinding when everyone else is quitting.  That's how you win.  That's how you become the kind of man nobody can compete with.  But most of you will never do it.  You'll watch this, feel motivated for five minutes, then go back to wasting time.  And that's why you'll lose.  Because deep down, you're addicted to comfort.  You want success without suffering.  You want rewards without discipline.  Most people don't want to hear this, but pain is your greatest teacher.  You don't grow from comfort.  You don't evolve by taking it easy.  You become strong by suffering.  Think about the most powerful men in history.  They didn't become great by hoping things would get easier.  They became great by dominating, by forcing themselves to endure more pain, more struggle, more hardship than anyone else was willing to take.  And that's exactly why most of you will never be successful because you run from pain.  You want to be fit, but you don't want to suffer through the workouts.  You want to be rich, but you don't want to sacrifice your weekend's grinding.  You want respect, but you're too scared to do what it takes to earn it. "},
   {text:" Let me ask you, how badly do you want it?  Because if you're not willing to bleed for it, you don't deserve it.  Hope is for cowards.  Action is for winners.  And if you don't wake up, and start acting like a man who deserves success, you will never have it.  The real reason most of you are losing isn't because life is unfair.  It's not because the system is rigged.  It's not because you were dealt a bad hand.  It's because you refuse to take full responsibility for your life.  Most men today have become soft.  They blame everyone else for their failures.  They look at successful people and say, oh, he got lucky.  No, he earned it.  You think millionaires got lucky?  You think world champions just had talent?  No, they worked harder than you.  They sacrificed more than you.  They pushed through more pain than you ever have.  That's why they win.  That's why they dominate and that's why you're still hoping while they're taking.  So what's it going to be?  Are you going to keep sitting there wishing for success?  Are you finally gonna stand up and take it?  The world is not a fairy tale."},
   {text:"There is no happy ending for the weak.  No knight in shining armor is coming to rescue you.  The world only respects power, dominance, and action.  You think life is about fairness?  About equality?  Wake up.  The strong take and the weak get nothing.  That is the truth.  they don't want you to realize.  Every second you sit around hoping for things to change, another man is out there taking what should have been yours.  You see it every day.  The men who drive the cars you want, live in the houses you dream about, and date the women you desire.  And do you know why they have those things?  Because while you were wishing, they were working.  While you were waiting for motivation, they were grinding.  While you were saying, tomorrow I'll start, they were executing today.  This is war.  And in war, there are only two types of men, predators and prey.  Every single decision you make is pushing you into one of those two categories.  When your alarm goes off in the morning and you hit snooze, you choose to be prey.  When you skip the gym because you're too tired, you choose to be prey.  When you avoid hard work and make excuses, you choose to be prey. "},
   {text:"And the problem with being prey is that the world has no mercy for the weak.  Society is designed to crush the men who refuse to compete.  The economy is built to keep you trapped.  The distractions, social media, junk food, endless entertainment, are all designed to keep you weak and controllable.  Because weak men don't take power.  Weak men don't rise to the top.  Weak men exist to serve the strong.  And if you refuse to break out of that cycle, you will spend your entire life watching other men live the life you wanted.  That is why you must become a predator. "},
    { text: "A man who doesn't wait, doesn't hesitate, doesn't rely on hope to guide his actions.  You take what you want, when you want, because you have earned the right to do so.  But that kind of power doesn't come from sitting around wishing for success.  It comes from suffering for it.  You want to be rich?  Then you better be willing to work 16 hour days while everyone else is resting.  You want to be powerful?  You better be willing to sacrifice every weakness that holds you back.  You want to be respected?  Then you better demand excellence from yourself and everything you do." },
    { text: "That's the price of greatness.  And most of you aren't willing to pay it.  Hope is a different price.  It's a trick they use to keep you obedient.  They tell you to stay positive, to believe in yourself, as if mindset alone will make you successful.  It won't.  You can manifest all day long, but without action, you will remain exactly where you are.  Hope without discipline is just another form of procrastination.  The difference between winners and losers is simple.  Winners execute, losers wait.  Every time you hesitate, you lose.  Every time you choose comfort over discipline, you lose.  Every time you waste another day thinking about success instead of taking real steps toward it, you lose.  And do you know what happens when you lose too many times?  You become irrelevant, forgotten, just another weak man who wasted his potential.  You look around and see men getting richer, stronger, and more powerful, and you think to yourself, why not me? "},

    { text: "You think the world is unfair? Guess what? It is. You think the rich have an advantage? They do." },
    { text: "I'll tell you why, because you haven't earned it.  Success is not handed out like candy, it is taken by force.  You have to be willing to outwork, outthink, and outlast every single person in the room.  You have to be so relentless, so disciplined, so obsessed with becoming the best version of yourself that failure becomes impossible.  Because let me tell you something, there is a version of you that is unstoppable, a version of you that wakes up every day and dominates, a version of you that never hesitates, never complains, never stops pushing forward.  That version of you is waiting to be unleashed.  The only way to bring him to life is to kill the weakness inside you.  Your emotions don't matter.  Your excuses don't matter.  Your past doesn't matter.  All that matters is what you do next.  Every second wasted is a second closer to death.  Every moment spent in weakness is a moment you will never get back.  And one day when you're old, when you're out of time, when you realize that you wasted your life hoping instead of taking, that regret will be unbearable because by then it will be too late.  The question is, are you going to let that happen or are you going to let it go?" },


    { text: "to rise up and take control of your destiny?  Because let me make one thing clear.  Nobody is coming to save you.  Your parents won't save you.  Your friends won't save you.  The government won't save you.  The universe won't save you.  The only person who can change your life is you.  And until you fully accept that, until you take complete ownership over your fate, you will never be free.  The moment you realize that your success, your power, your future is 100 % in your hands, That is the moment you become truly dangerous, because that is the moment you stop hoping and start taking.  So tell me, are you still going to sit there hoping for success, or are you going to stand up and take what's yours?  Most men today are weak, fragile, and pathetic.  They live their entire lives in fear, fear of failure, fear of rejection, fear of pain, and because they are afraid, they stay broke, stay invisible, and stay powerless.  Society has trained them to be this way from the moment.  They were born.  They were taught to be obedient to be nice to wait their turn.  They were told that if they just stay patient and work hard success will come to them lies success doesn't come to those who wait. " },

    { text: "It comes to those who take action without hesitation.  It comes to those who are willing to sacrifice comfort, endure suffering, and refuse to quit when things get tough.  But most of you will never reach that level because most of you choose weakness every single day.  Look at your life.  Look at your body, your bank account, your habits.  Are you proud of them?  If the answer is no, then let me tell you something.  You are the problem.  Not the economy, not society, not bad luck.  You, you are the reason you don't have the life you want.  You are the reason you wake up every day, feeling frustrated, unsatisfied and powerless.  And until you take full responsibility for that, nothing will change.  You see, most people don't want to hear this because it forces them to look in the mirror and face their own failures.  It forces them to accept that their life is a direct result." },

    { text:"of their own choices and that level of accountability.  Most men are too weak to handle it.  Weakness is a choice.  You don't accidentally become broke, out of shape, and unsuccessful.  You chose it.  Every time you skipped the gym, every time you wasted money on nonsense, every time you avoided hard work because it was too difficult, you were making a choice.  And the result of those choices is the life you are living right now.  But instead of fixing the problem, most of you look for excuses.  You blame the system, you blame other people, you convince yourself that the world is against you as if that somehow justifies your laziness. " },



    { text: "It doesn't.  Do you think powerful men waste their time complaining?  Do you think billionaires sit around crying about how unfair the system is?  No, they play the game better than anyone else and they outwork, outthink and outmaneuver their competition.  And that is exactly why they win, because they refuse to be weak.  There is nothing respectable about being weak.  Society tells you that it's okay to be average, that it's okay to be mediocre, that it's okay to be content with what you have.  It's not.  If you are not constantly improving, constantly pushing yourself, constantly evolving into a stronger version of yourself, then you are failing." },
    { text: "Because here's the truth, weak men get left behind.  Look around you.  The men who are struggling, the men who are constantly stressed, the men who are stuck in dead -end jobs, barely scraping by, they are weak.  They spent their entire lives making excuses instead of taking action.  And now when they look back, all they see is wasted potential.  Regret is the heaviest burden a man can carry.  And if you don't change, You don't start living with discipline and intensity, that will be your future.  You need to understand something.  Life is not about fairness.  Life does not reward good intentions." },

    { text: "Nobody is coming to save you. Your parents won't save you. Your friends won't save you." },
    { text: "Because here's the truth, weak men get left behind.  Look around you.  The men who are struggling, the men who are constantly stressed, the men who are stuck in dead -end jobs, barely scraping by, they are weak.  They spent their entire lives making excuses instead of taking action.  And now when they look back, all they see is wasted potential.  Regret is the heaviest burden a man can carry.  And if you don't change, You don't start living with discipline and intensity, that will be your future.  You need to understand something.  Life is not about fairness.  Life does not reward good intentions." },




    { text: "Because here's the truth, weak men get left behind.  Look around you.  The men who are struggling, the men who are constantly stressed, the men who are stuck in dead -end jobs, barely scraping by, they are weak.  They spent their entire lives making excuses instead of taking action.  And now when they look back, all they see is wasted potential.  Regret is the heaviest burden a man can carry.  And if you don't change, You don't start living with discipline and intensity, that will be your future.  You need to understand something.  Life is not about fairness.  Life does not reward good intentions." },
    { text: "It does not care how much you want success.  It only cares about one thing, what you produce.  If you are weak, life will crush you.  If you are strong, life will reward you.  It's that simple.  And yet, most of you are weak.  sitting around, waiting for some magical moment to feel ready.  Let me make something very clear.  You will never feel ready.  If you keep waiting for motivation, you will wait forever.  The only way to get ahead is to take action even when you don't feel like it.  That is the difference between winners and losers.  Losers wait for the right time.  Winners make the time right.  Losers complain about how hard things are.  Winners embrace the struggle and push through it.  Losers waste time on distractions.  Winners use every second to improve, grow, and dominate.  The real reason most of you are stuck is because you have too many distractions, too many bad habits, too much weakness." },
    { text: "You spend hours scrolling through social media watching other men live the life you want instead of building it for yourself.  You waste your time on meaningless entertainment, on chasing short -term pleasure, on doing everything except the one thing that actually matters.  putting in the work.  And do you know what's going to happen if you don't change?  Nothing.  Your life will look exactly the same next year, five years from now, 10 years from now.  And one day when you're old, when you're too weak to change, you will look back and realize that you wasted everything.  But here's the good news.  You still have time.  If you are reading this right now, it means you have the opportunity to fix your mistake.  It means you can still become strong, still become powerful, still become the man you were meant to be.  But that requires action.  That requires discipline.  That requires being brutally honest with yourself about where you are right now and where you need to be.  And most importantly, it requires killing the weakness inside you.  The time for excuses is over.  The time for hesitation is over.  The time for action is now." }
  ];

  useGSAP(() => {
    // Grid line animation
    gsap.to(".grid-line", {
      backgroundPosition: "100% 100%",
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Floating code elements - optimized
    gsap.to(".floating-code", {
      y: -20,
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: "sine.inOut"
    });

    // Main content animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cyber-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false
      }
    });

    tl.fromTo(".cyber-card",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(".cyber-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }, "-=0.5"
    )
    .fromTo(".cyber-feature",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2 }, "-=0.3"
    )
    .fromTo(".cyber-button",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.2"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="cyber-section relative min-h-screen bg-black overflow-hidden">
      {/* Animated Grid Background */}
      <SEO title="Tate Message | Hack This Monster"/>
      <div className="absolute inset-0">
        <div className="grid-line absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.05)_25px,transparent_26px),linear-gradient(180deg,transparent_24px,rgba(59,130,246,0.05)_25px,transparent_26px)] bg-[size:50px_50px] bg-repeat" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          "ACTION", "DISCIPLINE", "POWER", "STRENGTH", "GRIND", "SACRIFICE", 
          "WIN", "DOMINATE", "HUSTLE", "CONQUER", "VICTORY", "WARRIOR"
        ].map((code, index) => (
          <div
            key={index}
            className="floating-code absolute text-blue-400/20 font-mono text-lg"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              fontSize: `${Math.random() * 16 + 12}px`
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-12">
        <div className="cyber-card max-w-6xl w-full">
          
          {/* Header Section */}
          <div className="text-center mb-12 space-y-6">
            <div className="cyber-title">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  WAKE UP
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-amber-200 font-bold mt-4">
                The Cold, Hard Truth You Need to Hear
              </p>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* Left Column - Visual Elements */}
            <div className="space-y-6">
              {/* Cyber Terminal */}
              <div className="bg-gray-900/80 backdrop-blur-xl border border-blue-500/30 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-blue-400 font-mono text-sm">
                    ANDREW TATE - TOP G MOTIVATION
                  </div>
                </div>
                <div className="font-mono text-sm space-y-3">
                  <div className="text-green-400">$ motivation status --check</div>
                  <div className="text-blue-400">→ Current State: <span className="text-white">HOPING</span></div>
                  <div className="text-blue-400">→ Target State: <span className="text-yellow-400">TAKING ACTION</span></div>
                  <div className="text-blue-400">→ Mindset Required: <span className="text-purple-400">WARRIOR MINDSET</span></div>
                  <div className="text-green-400 mt-4">$ execute --transformation</div>
                  <div className="text-white animate-pulse flex items-center space-x-2">
                    <span>🚀 Initializing mental transformation...</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Principles Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "DISCIPLINE", icon: "⚡", bg: "from-blue-500/20 to-blue-600/10" },
                  { title: "ACTION", icon: "🎯", bg: "from-purple-500/20 to-purple-600/10" },
                  { title: "POWER", icon: "💪", bg: "from-cyan-500/20 to-cyan-600/10" },
                  { title: "VICTORY", icon: "🏆", bg: "from-blue-500/20 to-purple-600/10" }
                ].map((principle, index) => (
                  <div 
                    key={index}
                    className={`cyber-feature text-center p-4 bg-gradient-to-br ${principle.bg} border border-blue-500/20 rounded-xl backdrop-blur-sm`}
                  >
                    <div className="text-2xl mb-2">{principle.icon}</div>
                    <div className="text-blue-300 font-bold text-sm">{principle.title}</div>
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "100%", label: "No Excuses", color: "text-green-400" },
                  { value: "24/7", label: "Discipline", color: "text-blue-400" },
                  { value: "0%", label: "Weakness", color: "text-red-400" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg backdrop-blur-sm">
                    <div className={`text-xl md:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-blue-300 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
                 <div className="cyber-feature bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-blue-300 mb-4 text-center">
                  THE UNFILTERED TRUTH
                </h3>
                <p className="text-gray-200 leading-relaxed text-center">
                  "The world only respects power, dominance, and action. Your time is NOW."
                </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              {/* Transcript Section */}
              <div className="bg-gray-900/80 sticky top-10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 shadow-2xl h-screen overflow-auto">

                
                <div className="space-y-4">
                  {speechSegments.map((segment, index) => (
                    <div 
                      key={index}
                      className="cyber-feature p-4 rounded-lg border-l-4 border-blue-500/50 bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                          <span className="text-blue-300 text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-200 leading-relaxed flex-1 text-sm md:text-base">
                          {segment.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <button className="cyber-button group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative flex items-center justify-center space-x-3 text-lg">
                    <span>STOP HOPING - START TAKING ACTION</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
                  <div className="flex items-center space-x-2 justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Unfiltered Hard Truth</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Proven Warrior Mindset</span>
                  </div>
                  <div className="flex items-center space-x-2 justify-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Life-Changing Message</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scan Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
    </section>
  );
};

export default AndrewTateMotivationalSpeech;






// onst speechSegments = [
//     { time: "0:00", text: "Listen to me. If you don't wake up right now, you will lose everything. Not just your dreams, your time, your potential, your entire future." },
//     { time: "0:30", text: "And if you don't act now, you will be left behind forever. This is your last chance to wake up. Listen closely or regret it for life." },
//     { time: "1:14", text: "You think the world is unfair? Guess what? It is. You think the rich have an advantage? They do." },
//     { time: "1:26", text: "By doing what weak men refuse to do. Discipline. Sacrifice. Suffering. Grinding when everyone else is quitting." },
//     { time: "2:36", text: "Let me ask you, how badly do you want it? Because if you're not willing to bleed for it, you don't deserve it." },
//     { time: "3:40", text: "There is no happy ending for the weak. No knight in shining armor is coming to rescue you." },
//     { time: "4:42", text: "And the problem with being prey is that the world has no mercy for the weak." },
//     { time: "5:16", text: "A man who doesn't wait, doesn't hesitate, doesn't rely on hope to guide his actions." },
//     { time: "6:41", text: "I'll tell you why, because you haven't earned it. Success is not handed out like candy, it is taken by force." },
//     { time: "7:45", text: "Nobody is coming to save you. Your parents won't save you. Your friends won't save you." },
//     { time: "8:50", text: "It comes to those who take action without hesitation. It comes to those who are willing to sacrifice comfort." },
//     { time: "10:16", text: "Do you think powerful men waste their time complaining? Do you think billionaires sit around crying about how unfair the system is?" },
//     { time: "11:25", text: "Life does not care how much you want success. It only cares about one thing, what you produce." },
//     { time: "12:13", text: "The time for excuses is over. The time for hesitation is over. The time for action is now." }
//   ];
