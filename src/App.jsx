import { useState } from 'react'
import steveJobsImage from './assets/steve-jobs.jpg'
import './App.css'

const milestones = [
  { year: '1976', title: 'Apple begins', text: 'Jobs and Steve Wozniak build the first Apple computer in the Jobs family garage.' },
  { year: '1984', title: 'Macintosh arrives', text: 'The Macintosh brings a graphical interface and a new idea of personal computing to the mainstream.' },
  { year: '1986', title: 'A new studio', text: 'Jobs acquires the computer graphics division that becomes Pixar Animation Studios.' },
  { year: '1997', title: 'The return', text: 'Jobs returns to Apple, simplifies its product line, and starts a dramatic turnaround.' },
  { year: '2007', title: 'iPhone changes everything', text: 'A phone, an iPod, and an internet communicator become one pocket-sized product.' },
  { year: '2010', title: 'The iPad era', text: 'Apple introduces a new category of device built for touch, media, and everyday creativity.' },
]

const ventures = [
  { mark: 'A', name: 'Apple', category: 'Technology', description: 'A product company that made design, software, and hardware feel like one experience.', color: 'blue', href: 'https://www.apple.com/' },
  { mark: 'P', name: 'Pixar', category: 'Animation', description: 'The studio behind Toy Story, and a new model for computer-generated storytelling.', color: 'orange', href: 'https://www.pixar.com/' },
  { mark: 'N', name: 'NeXT', category: 'Computing', description: 'A focused workstation company whose technology later became the foundation of modern macOS.', color: 'black', href: 'https://www.next.com/' },
]

function App() {
  const [activeYear, setActiveYear] = useState('2007')
  const activeMilestone = milestones.find((milestone) => milestone.year === activeYear)

  return (
    <main>
      <nav className="nav-shell"><a className="wordmark" href="#top">/jobs<span>archive</span></a><div className="nav-links"><a href="#journey">Journey</a><a href="#ventures">Ventures</a><a href="#lessons">Lessons</a></div><a className="source-link" href="#sources">Sources <span>↗</span></a></nav>
      <section className="hero-section" id="top"><div className="hero-atmosphere" aria-hidden="true"><span className="orb orb-one"></span><span className="orb orb-two"></span><span className="orbit orbit-one"></span><span className="orbit orbit-two"></span><span className="signal-line line-one"></span><span className="signal-line line-two"></span></div><div className="hero-copy"><p className="eyebrow">An interactive entrepreneur showcase <span>01 / 04</span></p><h1>Steve<br /><em>Jobs</em></h1><p className="hero-intro">The restless mind behind products that changed how the world works, plays, and creates.</p><a className="scroll-cue" href="#journey"><span>↓</span> Explore the journey</a></div><div className="portrait-wrap"><div className="portrait-frame"><img src={steveJobsImage} alt="Steve Jobs in 2010" fetchPriority="high" /></div><div className="portrait-caption"><span>1955—2011</span><span>Co-founder, Apple Inc.</span></div><div className="hero-note">“The people who are<br />crazy enough to think<br />they can change the world<br /><strong>are the ones who do.</strong>”</div></div></section>
      <section className="manifesto band"><p className="section-label">The throughline</p><div><h2>Make a dent<br />in the universe.</h2><p>Jobs saw technology as a tool for human expression. His work was never just about what a machine could do, but how it could make people feel.</p></div></section>
      <section className="journey band" id="journey"><div className="section-heading"><p className="section-label">01 / The journey</p><h2>Six moments<br /><em>that moved culture.</em></h2><p>Select a year to trace the turns, risks, and returns that shaped an era of technology.</p></div><div className="timeline-panel"><div className="timeline-years">{milestones.map((milestone) => <button className={activeYear === milestone.year ? 'year active' : 'year'} key={milestone.year} onClick={() => setActiveYear(milestone.year)}>{milestone.year}</button>)}</div><div className="timeline-detail"><div className="detail-year">{activeMilestone.year}</div><div><h3>{activeMilestone.title}</h3><p>{activeMilestone.text}</p></div><span className="detail-arrow">↗</span></div></div></section>
      <section className="ventures band" id="ventures"><div className="section-heading compact"><p className="section-label">02 / The ventures</p><h2>Different names.<br /><em>Same obsession.</em></h2></div><div className="venture-grid">{ventures.map((venture) => <a className="venture-card" href={venture.href} target="_blank" rel="noreferrer" key={venture.name}><div className={`venture-mark ${venture.color}`}>{venture.mark}</div><div><p className="card-category">{venture.category}</p><h3>{venture.name}</h3><p>{venture.description}</p></div><span className="card-arrow">↗</span></a>)}</div></section>
      <section className="lessons band" id="lessons"><p className="section-label">03 / The lasting impact</p><div className="lesson-grid"><article><span>01</span><h3>Focus is a superpower.</h3><p>Jobs cut Apple’s product line down to four clear choices. The restraint made room for better work.</p></article><article><span>02</span><h3>Ideas need craft.</h3><p>Great products live where engineering meets the details people can feel: typography, timing, touch, and delight.</p></article></div></section>
      <footer id="sources"><div><span className="wordmark">/jobs<span>archive</span></span><p>A small study of a very large influence.</p></div><div className="sources-list"><p className="section-label">Sources & further reading</p><a href="https://www.apple.com/stevejobs/" target="_blank" rel="noreferrer">Apple: Remembering Steve ↗</a><a href="https://www.britannica.com/biography/Steve-Jobs" target="_blank" rel="noreferrer">Encyclopaedia Britannica ↗</a><a href="https://commons.wikimedia.org/wiki/File:Steve_Jobs_Headshot_2010-CROP2.jpg" target="_blank" rel="noreferrer">Portrait: Wikimedia Commons ↗</a></div></footer>
    </main>
  )
}

export default App
