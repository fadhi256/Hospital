import '../App.css'
import { Hero } from '../components/Hero.jsx'
import { AboutBrief } from '../components/AboutBrief.jsx'
import { ServicesHighlight } from '../components/ServicesHighlight.jsx'
import { WhyChooseUs } from '../components/WhyChooseUs.jsx'
import { Specialties } from '../components/Specialties.jsx'
import { WorkingHours } from '../components/WorkingHours.jsx'
import { MeetOurDoctors } from '../components/MeetOurDoctors.jsx'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Hero />
        <AboutBrief />
        <ServicesHighlight />
        <Specialties />
        <WhyChooseUs />
        <WorkingHours />
        <MeetOurDoctors />
      </div>
    </main>
  )
}

export default App
