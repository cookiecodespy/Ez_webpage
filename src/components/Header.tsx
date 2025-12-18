import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrimaryButton } from './UIButtons';

const NAV_ITEMS = [
	{ id: 'home', label: 'Inicio' },
	{ id: 'about', label: 'Nosotros' },
	{ id: 'services', label: 'Servicios' },
	{ id: 'industries', label: 'Industrias' },
	{ id: 'technology', label: 'Tecnología' }
];

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const navigate = useNavigate();
	const location = useLocation();
	const logoSrc = `${import.meta.env.BASE_URL}ezship-logo.png`;

	const isHomePage = location.pathname === '/';

	useEffect(() => {
		const sectionIds = NAV_ITEMS.map(item => item.id);

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 950);

			if (!isHomePage) return;

			let currentSection = sectionIds[0];

			for (const id of sectionIds) {
				const section = document.getElementById(id);
				if (!section) continue;

				const top = section.getBoundingClientRect().top;
				if (top <= window.innerHeight * 0.35) {
					currentSection = id;
				}
			}

			setActiveSection(currentSection);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isHomePage]);

	const scrollToSection = (id: string) => {
		if (!isHomePage) {
			navigate('/', { state: { scrollTo: id } });
			return;
		}

		const element = document.getElementById(id);
		if (element) {
			// Offset más pequeño = título más cerca del header
			const headerOffset = id === 'home' ? 88 : 50;
			const elementPosition = element.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = elementPosition - headerOffset;

			window.scrollTo({
				top: offsetPosition >= 0 ? offsetPosition : 0,
				behavior: 'smooth'
			});
			setIsMobileMenuOpen(false);
		}
	};

	// Handle scroll on return from service detail page
	useEffect(() => {
		if (isHomePage && location.state?.scrollTo) {
			setTimeout(() => {
				const id = location.state.scrollTo;
				const element = document.getElementById(id);
				if (element) {
					const headerOffset = id === 'home' ? 88 : 50;
					const elementPosition = element.getBoundingClientRect().top + window.scrollY;
					const offsetPosition = elementPosition - headerOffset;
					window.scrollTo({
						top: offsetPosition >= 0 ? offsetPosition : 0,
						behavior: 'smooth'
					});
				}
			}, 100);
		}
	}, [isHomePage, location.state]);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 pt-4 pb-2 transition-all duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`flex items-center justify-between rounded-xl border transition-all duration-300 px-4 sm:px-6 gap-6 ${
						isScrolled 
							? 'border-gray-200/60 backdrop-blur-xl bg-white/98 shadow-xl' 
							: 'border-white/30 backdrop-blur-xl bg-white/70 shadow-sm'
					}`}
				>
					<button
						type="button"
						className="flex items-center py-1.5 focus:outline-none flex-shrink-0"
						onClick={() => scrollToSection('home')}
						aria-label="Ir al inicio"
					>
						<img
							src={logoSrc}
							alt="EZ Ship Logistics"
							className="h-[56px] w-auto rounded-md select-none transition-all hover:opacity-90"
							loading="lazy"
							style={{ filter: 'drop-shadow(0 3px 10px rgba(0, 0, 0, 0.25)) drop-shadow(0 1px 4px rgba(0, 0, 0, 0.35)) drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15))' }}
						/>
					</button>

					<nav className="hidden md:flex items-center gap-4 py-1.5">
						{NAV_ITEMS.map(item => {
							const isActive = activeSection === item.id;
							return (
								<button
									key={item.id}
									type="button"
									onClick={() => scrollToSection(item.id)}
									aria-current={isActive ? 'page' : undefined}
									className={`relative whitespace-nowrap text-[13px] md:text-sm font-semibold tracking-tight text-slate-700 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#E41B13] after:transition-transform after:duration-300 hover:text-[#E41B13] hover:after:scale-x-100 hover:-translate-y-0.5 ${
										isActive ? 'text-[#E41B13] after:scale-x-100' : ''
									}`}
								>
									{item.label}
								</button>
							);
						})}
						<PrimaryButton onClick={() => scrollToSection('contact')} className="px-4 py-2 text-[13px] md:text-sm">
							Contáctenos
						</PrimaryButton>
					</nav>

					<button
						type="button"
						className="md:hidden text-gray-700 py-2.5 relative w-8 h-8 flex items-center justify-center"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
					>
						{/* Hamburger animado */}
						<div className="relative w-6 h-6">
							<motion.span
								className="absolute left-0 w-6 h-0.5 bg-gray-700 rounded-full"
								style={{ top: '6px' }}
								animate={{
									top: isMobileMenuOpen ? '11px' : '6px',
									rotate: isMobileMenuOpen ? 45 : 0,
								}}
								transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
							/>
							<motion.span
								className="absolute left-0 top-[11px] w-6 h-0.5 bg-gray-700 rounded-full"
								animate={{
									opacity: isMobileMenuOpen ? 0 : 1,
									scaleX: isMobileMenuOpen ? 0 : 1,
								}}
								transition={{ duration: 0.2 }}
							/>
							<motion.span
								className="absolute left-0 w-6 h-0.5 bg-gray-700 rounded-full"
								style={{ top: '16px' }}
								animate={{
									top: isMobileMenuOpen ? '11px' : '16px',
									rotate: isMobileMenuOpen ? -45 : 0,
								}}
								transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
							/>
						</div>
					</button>
				</div>
			</div>

			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/60 shadow-lg overflow-hidden"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
					>
						<motion.nav
							className="flex flex-col space-y-1 px-4 py-4"
							initial={{ y: -20 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.3, delay: 0.1 }}
						>
						{NAV_ITEMS.map(item => {
							const isActive = activeSection === item.id;
							return (
								<button
									key={item.id}
									type="button"
									onClick={() => scrollToSection(item.id)}
									className={`flex justify-between items-center text-left py-3 text-sm font-semibold transition-colors ${
										isActive ? 'text-[#E41B13]' : 'text-slate-700 hover:text-[#E41B13]'
									}`}
								>
									{item.label}
									{isActive && <span aria-hidden="true">•</span>}
								</button>
							);
						})}
							<PrimaryButton onClick={() => scrollToSection('contact')} className="w-full px-5 py-3">
								Contáctenos
							</PrimaryButton>
						</motion.nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;

