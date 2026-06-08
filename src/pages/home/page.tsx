import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 text-burgundy relative">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-rose-300 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-music-2-fill text-xl text-rose-400"></i>
            </div>
            <span className="font-semibold text-lg tracking-tight">MusicTheory</span>
          </button>

          <button
            onClick={() => scrollTo("details")}
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-burgundy text-white text-sm font-medium rounded-full hover:bg-burgundy-light transition-colors whitespace-nowrap cursor-pointer"
          >
            Enroll Now
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-rose-300 px-6 py-4">
            <button
              onClick={() => scrollTo("details")}
              className="w-full text-left px-4 py-3 bg-burgundy text-white text-sm font-medium rounded-full hover:bg-burgundy-light transition-colors whitespace-nowrap"
            >
              Enroll Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-rose-50 to-rose-50"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-rose-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-rose-300 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-rose-400/10 text-rose-400 text-xs font-semibold rounded-full mb-6">
                Group Music Theory Exam Intensive
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Stuck on&nbsp;<span style={{ color: "rgb(214, 90, 127)" }}>Grade 5 Theory?</span>
                <br />
                You are NOT
                <br />
                <span className="text-rose-400">Alone.</span>
              </h1>
              <p className="text-lg text-mauve mb-4 max-w-lg mx-auto lg:mx-0">
                A weekly course for ABRSM Grade 5 Theory students preparing for the Theory Examinations. Students must have completed the Theory Grade 5 syllabus.
              </p>
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-4">
                <img
                  alt="Zoom"
                  className="w-full h-full object-contain"
                  src="https://storage.readdy-site.link/project_files/f1e8f365-1dd6-4148-aae1-e7475a806344/999f7e27-9b92-4a95-a054-60d9b0046486_Zoom-App-Icon-2.png?v=fc62b621aa3ca0d98455bbdfb3b4918e"
                />
              </div>
              <button
                onClick={() => scrollTo("details")}
                className="inline-flex items-center px-8 py-3.5 bg-rose-400 text-white font-semibold rounded-full hover:bg-rose-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Personalized Help
                <span className="w-5 h-5 flex items-center justify-center ml-2">
                  <i className="ri-arrow-right-line text-sm"></i>
                </span>
              </button>
            </div>

            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    alt="Music learning environment"
                    className="w-full h-full object-cover"
                    src="https://public.readdy.ai/ai/img_res/1e43cc2a804f77bd627dc8960ca70e18.jpg"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-rose-400/10 rounded-full">
                    <i className="ri-check-line text-rose-400"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">300+ Students</p>
                    <p className="text-xs text-mauve">Taught Personally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-20">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-burgundy/10 text-burgundy text-xs font-semibold rounded-full mb-4">
              Sound Familiar?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              The challenges music students often face
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-rose-300">
            <ul className="space-y-4">
              {[
                "My child has finished Grade 5 practical, but can't move on to Grade 6 until theory is cleared. It feels like everything has stalled.",
                "We've covered the syllabus, but I'm not confident my child can actually pass the exam. Knowing the material and answering exam questions properly are two different things.",
                "We've tried YouTube videos and self-paced online courses, but there's no one to mark the work or explain where my child is going wrong.",
                "My child's instrumental teacher focuses on playing, not theory. We need someone who specialises in the theory exam itself.",
                "There's so much online — free videos, paid courses, tutors — and I don't know which one actually helps students pass the exam.",
                "We keep meaning to focus on theory during the school holidays, but without a proper structure, nothing really happens and we're back to square one.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-red-50 rounded-full shrink-0 mt-0.5">
                    <i className="ri-close-line text-red-500 font-bold text-sm"></i>
                  </div>
                  <span className="text-burgundy text-base md:text-lg leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 relative bg-rose-50 rounded-2xl p-8 md:p-12 border border-rose-300 text-center">
            <div className="w-10 h-10 flex items-center justify-center bg-rose-400/10 rounded-full mx-auto mb-6">
              <i className="ri-double-quotes-l text-xl text-rose-400"></i>
            </div>
            <p className="text-xl md:text-2xl font-medium text-burgundy leading-relaxed italic">
              Many students struggle with ABRSM Grade 5 Theory because they lack a strong foundation and don't know how to approach the exam questions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-rose-300 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-rose-400">300+</span>
              <p className="text-sm text-mauve mt-1">Students Taught Personally</p>
            </div>
            <div className="flex flex-col items-center md:border-x border-rose-300">
              <span className="text-3xl md:text-4xl font-bold text-rose-400">Focus</span>
              <p className="text-sm text-mauve mt-1">Private Zoom Format</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-rose-400">100%</span>
              <p className="text-sm text-mauve mt-1">Personalized Curriculum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 md:py-28">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How I help students through this
            </h2>
            <p className="text-mauve max-w-xl mx-auto">
              No more one-size-fits-all content. Every lesson is crafted for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "ri-video-chat-line", title: "Revise all key Grade 5 Music Theory concepts" },
              { icon: "ri-book-open-line", title: "Identify common exam traps and avoid losing marks" },
              { icon: "ri-presentation-line", title: "Answer challenging questions with confidence" },
              { icon: "ri-record-circle-line", title: "Apply proven exam techniques and shortcuts" },
              { icon: "ri-calendar-check-line", title: "Improve speed and accuracy under exam conditions" },
              { icon: "ri-file-list-3-line", title: "Build confidence through guided practice" },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 border border-rose-300 hover:border-rose-400/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-rose-400/10 rounded-xl mb-6 group-hover:bg-rose-400/20 transition-colors">
                  <i className={`${item.icon} text-2xl text-rose-400`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 md:py-20 bg-rose-50">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-burgundy bg-white inline-block px-6 py-3 rounded-xl border border-rose-300 mb-6">This course is perfect for you if you:</p>
          <ul className="bg-white rounded-2xl p-8 md:p-10 border border-rose-300 space-y-4">
            {[
              "Have an upcoming Grade 5 exam and need focused, structured preparation",
              "Have self-studied but want to fill in the gaps and build confidence",
              "Learn best in a guided, interactive environment",
              "Want proven strategies for tackling exam questions efficiently",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 flex items-center justify-center bg-rose-400/10 rounded-full shrink-0 mt-0.5">
                  <i className="ri-check-line text-rose-400 text-sm"></i>
                </div>
                <span className="text-burgundy text-base md:text-lg leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base md:text-lg text-burgundy leading-relaxed">
            Spaces are limited to keep sessions focused and personalised. Join the June crash course and walk into your exam ready
          </p>
        </div>
      </section>

      {/* Course Details Section */}
      <section id="details" className="py-20 md:py-28 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:w-2/5 w-full">
              <span className="text-xs font-semibold text-mauve uppercase tracking-wider">
                Group Music Theory Exam Intensive
              </span>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4 leading-tight bg-rose-100 p-4 rounded-xl inline-block">
                Group Music Theory Zoom (Exam Preparation Course)
              </h2>
              <div className="mt-8 aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  alt="Music theory notes"
                  className="w-full h-full object-cover"
                  src="https://public.readdy.ai/ai/img_res/f52b238543e2f6a0391c63b2276b54fa.jpg"
                />
              </div>
              <div className="mt-6">
                <p className="text-base text-mauve leading-relaxed">This intensive course is designed to get you exam-ready. Students must have completed the Theory Grade 5 syllabus as the course will be covering in-depth into everything you need to know, in answering the exam questions confidently and efficiently.&nbsp;</p>
                <p className="text-base text-mauve leading-relaxed mt-4">Over the course of this focused programme, you’ll work through all the core topics tested at Grade 5 level, including scales and keys, identifying intervals, chords and harmony, rhythm and time signatures, and music terminology. You will get clear, structured teaching.&nbsp;</p>
              </div>
            </div>

            <div className="lg:w-3/5 w-full">
              <div className="bg-rose-50 rounded-2xl p-8 md:p-10 border border-rose-300">
                <h3 className="text-2xl font-bold mb-2 text-center">
                  Course Details & Enrollment
                </h3>
                <p className="text-sm font-medium text-mauve text-center mb-4">
                  (Class is on every Sunday)
                </p>
                <div className="w-16 h-16 mx-auto mb-8">
                  <img
                    alt="Zoom"
                    className="w-full h-full object-contain"
                    src="https://storage.readdy-site.link/project_files/f1e8f365-1dd6-4148-aae1-e7475a806344/999f7e27-9b92-4a95-a054-60d9b0046486_Zoom-App-Icon-2.png?v=fc62b621aa3ca0d98455bbdfb3b4918e"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: "ri-calendar-line", label: "Start Date", value: "June 7, 2025 (Sunday)" },
                    { icon: "ri-user-line", label: "Target Students", value: "To those students who have completed music grade 5." },
                    { icon: "ri-time-line", label: "Time", value: (
                      <>
                        1:30pm-2:45pm
                        <br />
                        (Duration: 1 Hour 15 Mins)
                      </>
                    ) },
                    { icon: "ri-hourglass-line", label: "Duration", value: "4 lessons/mth — same day same time" },
                    { icon: "ri-video-chat-line", label: "Lesson conducted", value: "via Zoom" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shrink-0">
                        <i className={`${item.icon} text-rose-400`}></i>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item.label}</p>
                        <p className="text-mauve text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="mt-10 pt-8 border-t border-rose-300">
                  <div className="flex items-baseline justify-center gap-3 mb-2">
                    <span className="text-2xl text-mauve line-through">$350</span>
                    <span className="text-4xl font-bold text-rose-400">$280</span>
                    <span className="text-sm text-mauve">/ month</span>
                  </div>
                  <p className="text-center text-sm text-mauve mb-8">
                    Early Bird pricing — Limited space available
                  </p>
                <a
                    href="/"
                    className="flex items-center justify-center w-full px-8 py-4 bg-burgundy text-white font-semibold rounded-full hover:bg-burgundy-light transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Reserve Your Spot
                    <span className="w-5 h-5 flex items-center justify-center ml-2">
                      <i className="ri-arrow-right-line text-sm"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 md:py-28 bg-rose-50">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-2/5 w-full">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto lg:mx-0">
                <img
                  alt="Min Min - Music Theory Instructor"
                  className="w-full h-full object-cover"
                  src="https://static.readdy.ai/image/e0fc7be5f4b61990a0e9610d572658e6/835f5f2ad36fe5dbcd7f5eea04f49a4e.jpeg"
                />
              </div>
            </div>

            <div className="lg:w-3/5 w-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-rose-400 rotate-45"></div>
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                  Meet Your Instructor
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Min Min Tay</h2>
              <p className="text-mauve text-lg mb-6">
                Pianist, Educator & ABRSM Specialist
              </p>

              <div className="space-y-4 text-burgundy leading-relaxed mb-8">
                <p>
                  Min Min holds a Master Degree in Piano Performance (M Mus) from the University of Washington in Seattle, U.S.A, a Bachelor of Music in Piano Performance (B Mus) from Ohio Wesleyan University, U.S.A, and graduated with University Honors. She also holds the Licentiate Trinity College of London (LTCL).
                </p>
                <p>
                  Trained under renowned pianist <strong>Ong Lip Tat</strong>, Min Min brings over a decade of dedicated teaching experience to every lesson. She has personally guided more than 300 students through ABRSM exams — from complete beginners to Grade 8 distinctions.
                </p>
                <p>
                  Her teaching philosophy is simple: <strong>music theory should feel musical, not mechanical.</strong> Rather than drilling rules in isolation, she connects every concept to real pieces, real sounds, and real playing. Students describe her as patient, intuitive, and refreshingly less rigid than typical exam-prep methods.
                </p>
                <p>
                  Whether you are a child sitting your first Grade 5 theory paper, an adult returning after 10 years, or a producer who finally wants to understand why chords work — she meets you exactly where you are.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: "ri-award-line", text: "300+ Students Taught" },
                  { icon: "ri-graduation-cap-line", text: "ABRSM Grades 1–8" },
                  { icon: "ri-global-line", text: "Zoom Lessons Worldwide" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-rose-300"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={`${item.icon} text-rose-400`}></i>
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 bg-rose-100">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-rose-400 rotate-45"></div>
              <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                Student testimonials
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Every happy student is a gentle reminder of why I teach.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "My 11-year-old who scored Distinction in the Grade 5 Music Theory Exam with only 15 weeks of preparation under Min Min's systematic approach.",
                name: "YX",
                role: "Parent of 11 years old",
              },
              {
                text: "I scored Distinction in ABRSM Grade 5 Music Theory after 1 year of lessons with Min Min, despite having no prior music theory background and not having touched the piano for 10 years. Praised her teaching style as less rigid than typical methods, with strong emphasis on pedalling, musicality, and fundamentals. Noted she is a student of renowned pianist Ong Lip Tat.",
                name: "哲寓",
                role: "Music Student",
              },
              {
                text: "I passed both Grade 8 Practical and Theory under Min Min's guidance. Described her as patient, helpful, understanding, and friendly.",
                name: "Alicia",
                role: "Music Student",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-rose-300">
                <div className="w-8 h-8 flex items-center justify-center mb-4">
                  <i className="ri-double-quotes-l text-2xl text-rose-400/30"></i>
                </div>
                <p className="text-sm text-burgundy leading-relaxed mb-6">{t.text}</p>
                <div className="pt-4 border-t border-rose-300">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-mauve">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-burgundy">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Make every week of June count
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Stop guessing. Start learning with a personal guide who adapts to exactly what you need.
          </p>
          <button
            onClick={() => scrollTo("details")}
            className="inline-flex items-center px-8 py-4 bg-rose-400 text-white font-semibold rounded-full hover:bg-rose-500 transition-colors whitespace-nowrap cursor-pointer"
          >
            Click to Reserve Your Seat
            <span className="w-5 h-5 flex items-center justify-center ml-2">
              <i className="ri-arrow-right-line text-sm"></i>
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-rose-50 border-t border-rose-300">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mauve">
            &copy; 2026 MusicTheory. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-sm text-mauve hover:text-rose-400 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-up-line"></i>
            Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
}