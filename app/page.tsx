"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  ChevronRight,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ArrowRight,
  Play,
} from "lucide-react"

export default function ModernPortfolio() {
  const [activeProject, setActiveProject] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "EUROBOT Competition Robot",
      description:
        "Developed a competitive robot for the EUROBOT competition with advanced odometry and communication systems.",
      achievement: "20% Movement Accuracy Improvement",
      technologies: ["Python", "C", "Computer Vision", "STM32", "ROS", "SolidWorks"],
      period: "Sept 2022 – Mar 2023",
      gifUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eurobot-M6paNtncaLypHLozMVPohDyad8qL0x.gif",
      staticImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/euro-aQjNdcOAxsuAs3leIgbgI0Ad5LzNGK.png",
      details: [
        "Developed and implemented odometry algorithms on STM32 microcontroller",
        "Established seamless communication between STM32, Arduino, and Raspberry Pi",
        "Enhanced movement accuracy by 20% through efficient actuator control",
      ],
    },
    {
      id: 2,
      title: "Robotic Arm Chess Player",
      description: "Engineered a fully autonomous robotic arm capable of playing chess with advanced AI integration.",
      achievement: "25% Motion Accuracy Improvement",
      technologies: ["C++", "Python", "Arduino", "ROS", "OpenCV", "RViz", "Stockfish"],
      period: "Jan 2024 – May 2024",
      gifUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chess_gif-Qnh2GGKym1uBSROfscpQklyYSumOfI.gif",
      staticImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/armo.jpg-tiVmbt3KoqknD7eH1CBrALm8TUb2Dg.jpeg",
      details: [
        "Developed autonomous chess-playing capabilities using Arduino and ROS",
        "Implemented advanced kinematics for precise motion planning",
        "Integrated Stockfish AI engine for intelligent gameplay",
      ],
    },
    {
      id: 3,
      title: "VisionFoot",
      description:
        "Led the development of VisionFoot, an innovative assistive Ball Launcher engineered to empower visually impaired football players, improving player navigation and interaction on the field.",
      achievement: "30% System Responsiveness Improvement",
      technologies: ["Raspberry Pi", "Arduino", "Computer Vision", "SolidWorks", "3D Printing", "Laser Cutting"],
      period: "Dec 2023 – Mar 2024",
      organization: "Orange Digital Center",
      gifUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visionfoot.gif-RS2Nw5AwhcMWpIpNq73zt8HZr5KHOL.jpeg",
      staticImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visionfoot.gif-RS2Nw5AwhcMWpIpNq73zt8HZr5KHOL.jpeg",
      details: [
        "Developed real-time communication between Raspberry Pi and Arduino for player localization",
        "Integrated camera system with optimized motor control for improved responsiveness",
        "Utilized SolidWorks for detailed component modeling with laser cutting and 3D printing",
        "Achieved 90% fabrication accuracy for system components",
      ],
    },
  ]

  const skills = {
    "Programming Languages": ["C/C++", "Python", "C#", "Java", "SQL"],
    "Frameworks & Libraries": ["ROS/ROS2", "OpenCV", "TensorFlow", "MediaPipe", "ASP.NET"],
    "Developer Tools": ["Git", "Azure DevOps", "VS Code", "TiaPortal", "STM32CubeIDE", "SolidWorks", "Proteus"],
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Mohamed Moussi</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-red-500 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">
                About
              </a>
              <a href="#experience" className="text-gray-300 hover:text-red-500 transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-gray-300 hover:text-red-500 transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-300 hover:text-red-500 transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? "animate-in slide-in-from-left duration-1000" : "opacity-0"}`}>
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold">
                  Hi,
                  <br />
                  I'm <span className="text-red-500">Mohamed</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-light text-gray-300">Robotics Software Engineer</h2>
                <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                  Passionate about transforming ideas into intelligent robotic solutions through cutting-edge software
                  engineering and automation technologies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/Mohamed_Moussi_CV.pdf" // You'll need to add your CV file to the public folder
                    link.download = "Mohamed_Moussi_CV.pdf"
                    link.click()
                  }}
                >
                  Download CV
                  <Download className="ml-2" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>

              <div className="flex gap-6 pt-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500 p-2">
                  <Github size={24} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500 p-2" asChild>
                  <a
                    href="https://www.linkedin.com/in/mohamed-moussi-73ba4a257/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500 p-2">
                  <Mail size={24} />
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div
              className={`flex justify-center lg:justify-end ${isVisible ? "animate-in slide-in-from-right duration-1000 delay-300" : "opacity-0"}`}
            >
              <div className="relative">
                {/* Hexagonal Frame */}
                <div className="w-80 h-80 md:w-96 md:h-96 relative">
                  <div
                    className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 p-1"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <div
                      className="w-full h-full bg-gray-800 flex items-center justify-center"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    >
                      {/* Replace this with your actual image */}
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mohamed_pic-127B6J8gioRufNxILIlYiYlZBIIVky.png"
                        alt="Mohamed Moussi"
                        className="w-full h-full object-cover"
                        style={{
                          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-500 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-red-500">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A dedicated robotics software engineer with expertise in automation, computer vision, and intelligent
              systems development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm currently pursuing my degree in Robotics Software Engineering at the National Institute of Applied
                Sciences and Technology in Tunis. My passion lies in developing innovative solutions that bridge the gap
                between software and hardware in robotics applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in industrial automation, computer vision, and robotic control systems, I've
                contributed to projects that have improved efficiency and accuracy in automated production environments.
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <GraduationCap className="text-red-500" size={20} />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <div className="font-semibold">National Institute of Applied Sciences and Technology</div>
                    <div className="text-sm text-gray-400">Robotics Software Engineering Student</div>
                    <div className="text-sm text-gray-400">2020 - 2025 | Tunis, Tunisia</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Award className="text-red-500" size={20} />
                      Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Arabic</span>
                        <span className="text-gray-400">Native</span>
                      </div>
                      <div className="flex justify-between">
                        <span>English</span>
                        <span className="text-gray-400">Advanced</span>
                      </div>
                      <div className="flex justify-between">
                        <span>French</span>
                        <span className="text-gray-400">Advanced</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Italian</span>
                        <span className="text-gray-400">Beginner</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-red-500">Experience</span>
            </h2>
            <p className="text-xl text-gray-400">Building expertise through hands-on industry experience</p>
          </div>

          <div className="space-y-8">
            {/* Current Project */}
            <Card className="bg-gray-900/50 border-gray-700 border-l-4 border-l-red-500">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      End-of-Studies Project: Transforming the Tog 519 Robot
                    </h3>
                    <div className="flex items-center gap-3">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bs.jpg-RO3QIgNGjW2nUZ6ibLwmUs0o04rMZt.jpeg"
                        alt="BS Automation"
                        className="w-8 h-8 object-contain"
                      />
                      <p className="text-lg text-red-400 font-semibold">BS Automation (Schubert Group)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Feb 2025 – Present</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>
                        Optimized the Tog 519 kinematic model, transitioning from a 5-axis to a 4-axis system, including
                        updates to referencing, vision system calibration, path planning, and UDP communication.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>
                        Developed the Programming System to enable seamless switching between 4-axis and 5-axis
                        configurations, automating updates to vision systems, calibration, and communication routines.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                      <span>
                        Engineered the system for flexibility, enabling future axis configurations and feature
                        integration.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Part-time Role */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Part-Time Robotics Software Engineer</h3>
                    <div className="flex items-center gap-3">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bs.jpg-RO3QIgNGjW2nUZ6ibLwmUs0o04rMZt.jpeg"
                        alt="BS Automation"
                        className="w-8 h-8 object-contain"
                      />
                      <p className="text-lg text-red-400 font-semibold">BS Automation (Schubert Group)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full">
                    <span className="font-medium">Oct 2024 – Dec 2024</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="text-gray-400 mt-0.5 flex-shrink-0" size={16} />
                      <span>
                        Developed an OpenDDS-based communication system for IDS cameras, reducing frame transmission
                        latency and improving real-time processing.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="text-gray-400 mt-0.5 flex-shrink-0" size={16} />
                      <span>
                        Conducted a comparative analysis of OpenDDS with existing enterprise solutions, evaluating its
                        performance and feasibility.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Summer Internship */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Robotics Software Intern</h3>
                    <div className="flex items-center gap-3">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bs.jpg-RO3QIgNGjW2nUZ6ibLwmUs0o04rMZt.jpeg"
                        alt="BS Automation"
                        className="w-8 h-8 object-contain"
                      />
                      <p className="text-lg text-red-400 font-semibold">BS Automation (Schubert Group)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full">
                    <span className="font-medium">Jul 2024 – Sept 2024</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="text-gray-400 mt-0.5 flex-shrink-0" size={16} />
                      <span>
                        Implemented a new architecture for the Tog519 vision system on a Jetson AGX Xavier, resulting in
                        a 40% improvement in performance and accuracy.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="text-gray-400 mt-0.5 flex-shrink-0" size={16} />
                      <span>
                        Programmed vision system features using C++ and Python, performing camera calibration and image
                        processing, and designed automated test cases to validate functionality.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="text-gray-400 mt-0.5 flex-shrink-0" size={16} />
                      <span>
                        Gained hands-on experience with TwinCAT software to develop control algorithms for the cobot,
                        including creating and deploying automation solutions.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Industrial Automation Intern */}
            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Industrial Automation Intern</h3>
                    <div className="flex items-center gap-3">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/as2e-N9lwrF64cvYJY9DgRX9T9pKKpwBuN6.png"
                        alt="AS2E"
                        className="w-8 h-8 object-contain"
                      />
                      <p className="text-lg text-gray-400 font-semibold">AS2E</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full">
                    <span className="font-medium">Jun 2023 – Jul 2023</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="text-gray-400 mt-0.5 flex-shrink-0" size={16} />
                      <span>
                        Mastered MotoSim EG-VRC software to program and simulate complex robotic motion sequences,
                        enhancing efficiency by 20% in robotic operations.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="text-gray-400 mt-0.5 flex-shrink-0" size={16} />
                      <span>
                        Gained extensive hands-on experience with YASKAWA industrial robots, deepening expertise in
                        robotic system mechanics and seamless integration into automated production lines.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-red-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-400">Innovative solutions in robotics and automation</p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="bg-gray-900/50 border-gray-700 overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Project GIF/Image */}
                  <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <img
                        src={project.staticImage || project.gifUrl}
                        alt={`${project.title} demonstration`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-16 h-16 bg-red-500/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="text-white ml-1" size={24} />
                        </div>
                      </div>
                      {/* GIF overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <img
                          src={project.gifUrl || "/placeholder.svg"}
                          alt={`${project.title} in action`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`space-y-6 p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div>
                      <div className="text-sm text-red-500 font-semibold mb-2">{project.period}</div>
                      {project.organization && (
                        <div className="text-sm text-orange-400 font-medium mb-2">{project.organization}</div>
                      )}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-lg text-gray-300 leading-relaxed mb-6">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <ChevronRight className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-red-500">Skills</span>
            </h2>
            <p className="text-xl text-gray-400">Comprehensive expertise across robotics and software development</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={category}
                className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    {index === 0 && <Code className="text-red-500" size={20} />}
                    {index === 1 && <Briefcase className="text-red-500" size={20} />}
                    {index === 2 && <GraduationCap className="text-red-500" size={20} />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Leadership <span className="text-red-500">Experience</span>
            </h2>
            <p className="text-xl text-gray-400">Leading robotics initiatives and building technical communities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-red-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">President</h3>
                <h4 className="text-lg text-red-400 font-semibold mb-4">Robolympix 2.0</h4>
                <p className="text-gray-400 text-sm mb-4">Jan 2024 – Mar 2024</p>
                <p className="text-gray-300 leading-relaxed">
                  Led robotics competition with 50+ participants and coordinated event logistics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="text-red-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Technical Vice President</h3>
                <h4 className="text-lg text-red-400 font-semibold mb-4">Aerobotix INSAT</h4>
                <p className="text-gray-400 text-sm mb-4">Sept 2023 – Jun 2024</p>
                <p className="text-gray-300 leading-relaxed">
                  Managed technical projects and mentored students in robotics development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="text-red-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Board Member</h3>
                <h4 className="text-lg text-red-400 font-semibold mb-4">Association of Robotics Techniques</h4>
                <p className="text-gray-400 text-sm mb-4">Sept 2023 – Jan 2025</p>
                <p className="text-gray-300 leading-relaxed">
                  Strategic planning for robotics education and research initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-400">Let's discuss opportunities in robotics and automation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Whether you're looking for a robotics software engineer, want to collaborate on a project, or
                        simply want to discuss the latest in automation technology, I'd love to hear from you.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                          <Mail className="text-red-500" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Email</div>
                          <div className="text-gray-400">m.mohamed.moussi@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                          <Phone className="text-red-500" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Phone</div>
                          <div className="text-gray-400">+216 96 747 668</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                          <MapPin className="text-red-500" size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">Location</div>
                          <div className="text-gray-400">Tunis, Tunisia</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Button
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-lg font-semibold"
                      asChild
                    >
                      <a href="mailto:m.mohamed.moussi@gmail.com?subject=Portfolio Inquiry&body=Hello Mohamed, I'm interested in discussing opportunities with you.">
                        <Mail className="mr-2" size={20} />
                        Send Message
                      </a>
                    </Button>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 py-3"
                        asChild
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" size={18} />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 py-3"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/mohamed-moussi-73ba4a257/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="mr-2" size={18} />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-500">Available for full-time opportunities starting 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 Mohamed Moussi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
