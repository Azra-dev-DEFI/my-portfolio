import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Code, Shield, Zap, CheckCircle, ArrowRight, Menu, Sun, Moon, X } from 'lucide-react';
import image from './assets/avatar.jpg';
import { toast } from 'sonner'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const myemail = 'rajahibrhahim3@gmail.com';
    const myname = 'Rajah Ibrahim'
    const acronym = 'RI'

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            toast.error('Please fill in all fields');
            return;
        }

        toast.success("Message ready to be sent!");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const hoverColor = isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-700';
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
        setIsMenuOpen(false);
    };

    const projects = [
        {
            title: "DeFi Yield Farming Protocol",
            description: "Built a smart contract system for automated yield farming with multi-token support and compound rewards.",
            tech: ["Solidity", "OpenZeppelin", "Hardhat", "Ethers.js"],
            features: ["Auto-compounding rewards", "Multi-token staking", "Emergency withdraw", "Time-locked contracts"],
            github: "https://github.com",
            demo: "https://demo.com",
            status: "Live on Mainnet"
        },
        {
            title: "NFT Marketplace Contract",
            description: "Developed a gas-optimized NFT marketplace with royalty distribution and batch minting capabilities.",
            tech: ["Solidity", "ERC-721", "IPFS", "React"],
            features: ["Royalty management", "Batch operations", "Lazy minting", "Upgradeable proxy"],
            github: "https://github.com/Azra-dev-DEFI/my-portfolio",
            demo: "https://nexostakingapp.vercel.app",
            status: "In Development"
        },
        {
            title: "Multi-Sig Wallet System",
            description: "Created a secure multi-signature wallet with role-based access and transaction queuing system.",
            tech: ["Solidity", "Gnosis Safe", "Web3.js", "TypeScript"],
            features: ["M-of-N signatures", "Role management", "Transaction queuing", "Gas optimization"],
            github: "https://github.com",
            demo: "https://demo.com",
            status: "Audited"
        }
    ];

    const skills = [
        { name: "Solidity", level: 85, category: "Smart Contracts" },
        { name: "Hardhat/Foundry", level: 80, category: "Development" },
        { name: "Web3.js/Ethers.js", level: 90, category: "Integration" },
        { name: "OpenZeppelin", level: 85, category: "Security" },
        { name: "React/Next.js", level: 88, category: "Frontend" },
        { name: "Node.js", level: 82, category: "Backend" }
    ];

    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Smart Contract Development",
            description: "Custom smart contracts built with security and gas efficiency in mind.",
            features: ["ERC Standards", "DeFi Protocols", "Custom Logic", "Testing Suite"]
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Security Auditing",
            description: "Comprehensive security reviews and vulnerability assessments.",
            features: ["Code Review", "Vulnerability Testing", "Gas Optimization", "Best Practices"]
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "DApp Integration",
            description: "Seamless integration of smart contracts with web applications.",
            features: ["Web3 Integration", "Wallet Connection", "Transaction Handling", "Event Listening"]
        }
    ];

    // Theme classes
    const bgPrimary = isDarkMode ? 'bg-black' : 'bg-white';
    const bgSecondary = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
    const bgCard = isDarkMode ? 'bg-gray-900' : 'bg-white';
    const textPrimary = isDarkMode ? 'text-white' : 'text-black';
    const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-700';
    const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';
    const border = isDarkMode ? 'border-gray-800' : 'border-gray-200';
    const navBg = isDarkMode ? 'bg-black/95' : 'bg-white/95';
    const inputBg = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300';

    return (
        <div className={`min-h-screen transition-all duration-500 ${bgPrimary} ${textPrimary}`}>
            
            {/* Navigation */}
            {/* ... keep your existing navbar code ... */}

            {/* Projects Section */}
            <section id="projects" className="py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        Featured Projects
                    </h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className={`${bgCard} rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${border} border shadow-xl hover:shadow-2xl`}>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <span className={`px-4 py-2 rounded-full text-xs font-medium ${
                                        project.status === 'Live on Mainnet'
                                            ? `${isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`
                                            : project.status === 'In Development'
                                            ? `${isDarkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800'}`
                                            : `${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <p className={`${textSecondary} mb-6 leading-relaxed`}>{project.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className={`flex items-center text-sm ${textSecondary}`}>
                                                <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'} mr-3 flex-shrink-0`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className={`px-3 py-1 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full text-xs font-medium`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links (Repo + Demo) */}
                                <div className="flex items-center justify-between mt-6">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${textMuted} ${hoverColor} transition-all duration-300 hover:scale-125`}
                                    >
                                        <FaGithub className="w-7 h-7" />
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300 ${
                                            isDarkMode
                                                ? "bg-white text-black hover:bg-gray-200"
                                                : "bg-black text-white hover:bg-gray-800"
                                        }`}
                                    >
                                        View Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ... keep your other sections (services, contact, footer) ... */}
        </div>
    );
};

export default Portfolio;
