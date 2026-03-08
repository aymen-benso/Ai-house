import { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, MapPin, Calendar, 
  Users, BookOpen, Lightbulb, Rocket, Code, Brain,
  Target, Globe, ArrowRight, CheckCircle,
  Cpu, GraduationCap, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import './App.css';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Launch Plan', href: '#launch-plan' },
    { name: 'Team', href: '#team' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <img 
              src="/assets/Logo.png" 
              alt="AI House Logo" 
              className="h-14 w-auto"
            />
            <div className="hidden sm:block">
              <span className={`font-serif font-semibold text-lg ${isScrolled ? 'text-navy' : 'text-navy'}`}>
                AI House
              </span>
              <span className={`block text-xs ${isScrolled ? 'text-slate' : 'text-slate'}`}>
                Blida 1 University
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-sm ${isScrolled ? 'text-slate' : 'text-slate'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-light-gray">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-slate hover:text-navy transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center bg-cream pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, var(--light-gray) 1px, transparent 1px),
                              linear-gradient(to bottom, var(--light-gray) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="badge badge-gold text-sm">
                Blida 1 University
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy mb-6 leading-tight">
              Welcome to <br/>
              <span className="text-gold">AI House</span>
            </h1>
            
            <p className="text-lg text-slate mb-4 font-medium">
              Empowering AI for Research, Innovation, and Society
            </p>
            
            <p className="text-slate mb-8 max-w-lg">
              The AI Unit at Blida 1 University promotes the development and application 
              of Artificial Intelligence in research and teaching, serving as a center 
              for learning, innovation, and collaboration.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#about">
                <Button className="btn-accent">
                  Explore Our Programs
                  <ChevronRight className="ml-2" size={18} />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white rounded-lg shadow-academic p-8 border border-light-gray">
              <div className="text-center">
                <img 
                  src="/assets/Logo.png" 
                  alt="AI House" 
                  className="h-32 w-auto mx-auto mb-6"
                />
                <h3 className="font-serif text-2xl text-navy mb-2">Artificial Intelligence</h3>
                <p className="text-slate text-sm">Blida1 University</p>
              </div>
              
              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-light-gray grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-serif font-bold text-gold">500+</div>
                  <div className="text-xs text-slate">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-gold">10+</div>
                  <div className="text-xs text-slate">Workshops</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-gold">5</div>
                  <div className="text-xs text-slate">Experts</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-gold/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const objectives = [
    { icon: BookOpen, text: 'Provide a structured educational framework for AI at all expertise levels' },
    { icon: Users, text: 'Encourage interdisciplinary collaboration between academic departments' },
    { icon: Globe, text: 'Foster AI research aligned with global innovation trends' },
    { icon: Target, text: 'Promote the diffusion of AI practices throughout society' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div>
            <div className="section-header">
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Our Vision</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-2">
                About AI House
              </h2>
            </div>

            <p className="text-slate text-lg leading-relaxed mb-6">
              The AI Unit's primary goal is to promote the development and application of 
              Artificial Intelligence in research and teaching. It serves as a center for 
              learning, innovation, and collaboration in AI at Blida 1 University.
            </p>

            <p className="text-slate leading-relaxed mb-8">
              Through structured programs and hands-on training, we aim to equip students, 
              researchers, and faculty with the skills needed to excel in the rapidly evolving 
              field of artificial intelligence.
            </p>

            <div className="space-y-4">
              {objectives.map((obj, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-cream rounded-lg border border-light-gray hover:border-gold transition-colors"
                >
                  <div className="p-2 bg-gold/10 rounded text-gold flex-shrink-0">
                    <obj.icon size={20} />
                  </div>
                  <p className="text-slate">{obj.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:pt-12">
            <div className="academic-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-navy rounded-lg">
                  <Brain size={28} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy">Mission Statement</h3>
                  <p className="text-slate text-sm">Building the future of AI education</p>
                </div>
              </div>
              
              <div className="academic-quote mb-6">
                <p className="text-slate italic">
                  "To establish Blida 1 University as a leading center for AI research and 
                  education, fostering innovation and preparing the next generation of AI professionals."
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-cream rounded-lg">
                  <GraduationCap size={24} className="text-gold mx-auto mb-2" />
                  <div className="text-navy font-semibold text-sm">Education</div>
                  <div className="text-slate text-xs">All Levels</div>
                </div>
                <div className="text-center p-4 bg-cream rounded-lg">
                  <Lightbulb size={24} className="text-gold mx-auto mb-2" />
                  <div className="text-navy font-semibold text-sm">Innovation</div>
                  <div className="text-slate text-xs">Research Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Launch Plan Section
function LaunchPlanSection() {
  const phases = [
    {
      number: '01',
      title: 'Awareness and Foundation',
      description: 'Raising awareness about AI and building foundational knowledge through workshops and seminars.',
      activities: [
        'Introduction to AI and Machine Learning workshops',
        'AI Tools and Prompt Engineering training',
        'University-wide seminars on AI applications',
        'Small projects and group discussions',
      ],
    },
    {
      number: '02',
      title: 'Hands-On Training and Projects',
      description: 'Practical training in real-world AI applications for academic and research purposes.',
      activities: [
        'Computer Vision projects',
        'Signal Processing applications',
        'Natural Language Processing workshops',
        'Hackathons and competitions',
        'Google Colab and Raspberry Pi experimentation',
      ],
    },
    {
      number: '03',
      title: 'Advanced Research and Innovation',
      description: 'Specialized training and research projects focusing on cutting-edge AI techniques.',
      activities: [
        'Deep learning and reinforcement learning workshops',
        'High-performance computing resources access',
        'Research conferences and paper publications',
        'Startup initiatives and entrepreneurship programs',
        'CDE and CATI collaboration',
      ],
    },
  ];

  return (
    <section id="launch-plan" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium uppercase tracking-wider">Strategic Roadmap</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-2 mb-4">
            Our Launch Plan
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            A structured three-phase approach to build a thriving AI community at Blida 1 University
          </p>
        </div>

        {/* Phases */}
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="academic-card p-6 relative">
              {/* Phase Number */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy font-bold">{phase.number}</span>
              </div>

              <div className="pt-4">
                <h3 className="font-serif text-xl text-navy mb-3">
                  {phase.title}
                </h3>
                <p className="text-slate text-sm mb-4">
                  {phase.description}
                </p>

                <ul className="space-y-2">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start gap-2 text-sm text-slate">
                      <CheckCircle size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl text-navy text-center mb-8">Target Audience</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: 'Students', desc: 'Undergraduate to postgraduate' },
              { icon: Rocket, title: 'Startups', desc: 'Entrepreneurs & CDE/CATI' },
              { icon: Users, title: 'New Teachers', desc: 'Recently recruited faculty' },
              { icon: Brain, title: 'Researchers', desc: 'Academic & applied research' },
            ].map((audience, index) => (
              <div 
                key={index}
                className="academic-card p-6 text-center hover:border-gold transition-colors"
              >
                <div className="p-3 bg-gold/10 rounded-full w-fit mx-auto mb-4">
                  <audience.icon size={24} className="text-gold" />
                </div>
                <h4 className="text-navy font-semibold mb-1">{audience.title}</h4>
                <p className="text-slate text-sm">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const team = [
    {
      name: 'Pr. LAGHA Mohand',
      department: 'Institute of Aeronautics and Spatial Studies',
      role: 'Member',
    },
    {
      name: 'Dr. Boumahdi Fatima',
      department: 'Computer Science Department',
      role: 'Member',
    },
    {
      name: 'Pr. Fareh Messaouda',
      department: 'Computer Science Department',
      role: 'Member',
    },
    {
      name: 'Dr. Mezzi Meyara',
      department: 'Computer Science Department',
      role: 'Member',
    },
    {
      name: 'Dr. Ykhlef Hadjer',
      department: 'Computer Science Department',
      role: 'Member',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium uppercase tracking-wider">Our Experts</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-2 mb-4">
            Meet Our Team
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Dedicated professionals driving AI innovation at Blida 1 University
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="academic-card p-6 text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-serif font-bold text-gold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-serif text-lg text-navy mb-1">
                {member.name}
              </h3>
              <p className="text-gold text-sm mb-1">
                {member.department}
              </p>
              <p className="text-slate text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Events Section
function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<typeof pastEvents[0] | null>(null);

  const pastEvents = [
    {
      title: 'Mastering AI Tools for Literature Review',
      date: 'December 3, 2025',
      time: '10:00 AM',
      location: 'Pav 20, Conference Room',
      presenter: 'Dr. Fatima Boumahdi',
      type: 'Seminar',
      description: 'This seminar focused on the strategic use of AI tools to enhance the quality and efficiency of literature reviews. Participants explored methods for intelligent article discovery, automated summarization, reference organization, and critical analysis support.',
      image: '/assets/event-seminar.png',
    },
    {
      title: 'Reinforcement Learning & Smart Irrigation',
      date: 'December 3, 2025',
      time: '11:00 AM',
      location: 'Pav 20, Conference Room',
      presenter: 'Mr. Abdelatif Mekri',
      type: 'Workshop',
      description: 'This workshop introduced the core principles of reinforcement learning and demonstrated their application in optimizing smart irrigation systems. Participants discovered how AI-driven decision-making can enhance water resource management.',
      image: '/assets/event-workshop.png',
    },
    {
      title: 'PyStep1: Getting Started with Python',
      date: 'February 4-5, 2026',
      time: '8:30 AM - 1:30 PM',
      location: 'Pav 20',
      presenter: 'Multiple Instructors',
      type: 'Workshop',
      description: 'A comprehensive Training of Trainers program designed to strengthen knowledge transfer and capacity building within departments. Participants gained fundamental Python programming skills to train others in their respective units.',
      image: '/assets/pystep-workshop.png',
    },
  ];

  const upcomingActivities = [
    { name: 'Future PyStep Events', desc: 'ML & Deep Learning with Python', icon: Rocket },
    { name: 'Smart Pedagogy', desc: 'AI in Education', icon: GraduationCap },
    { name: 'DATATHON', desc: 'Data Science Competition', icon: Cpu },
    { name: 'Workshops', desc: 'Hands-on AI Training', icon: Code },
    { name: 'Seminars', desc: 'Expert Talks & Discussions', icon: BookOpen },
    { name: 'Training Programs', desc: 'Skill Development', icon: Target },
  ];

  return (
    <section id="events" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Past Events */}
        <div className="mb-20">
          <div className="section-header section-header-center text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Past Events</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-2">
              Events & Seminars
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div 
                key={index}
                className="academic-card overflow-hidden cursor-pointer group"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-gold text-navy text-xs font-semibold">
                    {event.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-navy mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-1 text-sm text-slate">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium">
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Event Photos */}
          <div className="mt-12">
            <h3 className="font-serif text-xl text-navy mb-6">Event Gallery</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="academic-card overflow-hidden p-2">
                <img 
                  src="/assets/event-photo1.jpg" 
                  alt="Event Photo 1"
                  className="w-full h-64 object-cover rounded"
                />
              </div>
              <div className="academic-card overflow-hidden p-2">
                <img 
                  src="/assets/event-photo2.jpg" 
                  alt="Event Photo 2"
                  className="w-full h-64 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Activities */}
        <div>
          <div className="text-center mb-10">
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Coming Soon</span>
            <h2 className="font-serif text-2xl text-navy mt-2">
              Upcoming Activities
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingActivities.map((activity, index) => (
              <div 
                key={index}
                className="academic-card p-5 flex items-center gap-4 hover:border-gold transition-colors"
              >
                <div className="p-2 bg-gold/10 rounded text-gold">
                  <activity.icon size={20} />
                </div>
                <div>
                  <h4 className="text-navy font-semibold text-sm">{activity.name}</h4>
                  <p className="text-slate text-xs">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Detail Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="bg-white border-light-gray text-navy max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded bg-gold text-navy text-xs font-semibold">
                    {selectedEvent.type}
                  </span>
                </div>
                <DialogTitle className="font-serif text-2xl text-navy">
                  {selectedEvent.title}
                </DialogTitle>
                <DialogDescription className="text-slate">
                  Presented by {selectedEvent.presenter}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                
                <div className="grid sm:grid-cols-2 gap-4 mb-6 p-4 bg-cream rounded-lg">
                  <div className="flex items-center gap-2 text-slate">
                    <Calendar size={18} className="text-gold" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate">
                    <MapPin size={18} className="text-gold" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
                
                <p className="text-slate leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

// Ethical AI Section
function EthicalAISection() {
  const ethics = [
    {
      title: 'Fairness & Transparency',
      description: 'Promoting AI systems that are fair, transparent, and accountable in all applications.',
    },
    {
      title: 'Education & Awareness',
      description: 'Educating students and faculty on ethical implications of AI in education and research.',
    },
    {
      title: 'Responsible Practices',
      description: 'Ensuring AI development follows ethical standards and societal values in all projects.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="section-header">
              <span className="text-gold text-sm font-medium uppercase tracking-wider">Our Commitment</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-2">
                Ethical AI Focus
              </h2>
            </div>

            <p className="text-slate text-lg leading-relaxed mb-8">
              AI ethics is a central focus within the AI unit. Understanding the societal 
              impact and ethical considerations of AI technology is crucial for responsible 
              innovation and sustainable development.
            </p>

            <div className="space-y-4">
              {ethics.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-cream rounded-lg border border-light-gray"
                >
                  <div className="p-2 bg-gold/10 rounded text-gold flex-shrink-0">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h3 className="text-navy font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="academic-card p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center mx-auto mb-6">
              <Brain size={48} className="text-gold" />
            </div>
            <h3 className="font-serif text-2xl text-navy mb-4">Responsible AI</h3>
            <p className="text-slate mb-6">
              Building AI systems that benefit society while respecting human rights and values.
            </p>
            
            <div className="grid grid-cols-3 gap-3">
              {['Fairness', 'Transparency', 'Accountability'].map((value, index) => (
                <div key={index} className="p-3 bg-cream rounded">
                  <div className="text-gold font-semibold text-sm">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="academic-card p-8 mb-6">
              <h3 className="font-serif text-xl text-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded text-gold">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-navy font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:maison_ia@univ-blida.dz" 
                      className="text-slate hover:text-gold transition-colors"
                    >
                      maison_ia@univ-blida.dz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded text-gold">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-navy font-semibold mb-1">Address</h4>
                    <p className="text-slate">
                      Aeronautics Pav 20<br />
                      Blida 1 University
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="academic-card p-8">
              <h3 className="font-serif text-xl text-navy mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'About Us', href: '#about' },
                  { name: 'Launch Plan', href: '#launch-plan' },
                  { name: 'Our Team', href: '#team' },
                  { name: 'Events', href: '#events' },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 text-slate hover:text-gold transition-colors"
                  >
                    <ArrowRight size={14} />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="academic-card p-8">
            <h3 className="font-serif text-xl text-navy mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-navy text-sm font-medium mb-2">Your Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-navy text-sm font-medium mb-2">Email Address</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-navy text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message..."
                  required
                  rows={5}
                  className="form-input resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-accent py-6"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} />
                    <span>Message Sent!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Send Message</span>
                    <ArrowRight size={16} />
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <img 
              src="/assets/Logo.png" 
              alt="AI House" 
              className="h-16 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-white/60 text-sm">
              Innovating for a brighter tomorrow.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Home', href: '#hero' },
              { name: 'About', href: '#about' },
              { name: 'Team', href: '#team' },
              { name: 'Events', href: '#events' },
              { name: 'Contact', href: '#contact' },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/60 hover:text-gold transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} AI House - Blida1.
            </p>
            <p className="text-white/40 text-sm">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <LaunchPlanSection />
        <TeamSection />
        <EventsSection />
        <EthicalAISection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
