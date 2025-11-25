import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
	const logoSrc = `${import.meta.env.BASE_URL}ezship-logo.png`;

	useEffect(() => {
		const sectionIds = NAV_ITEMS.map(item => item.id);

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 950);

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
	}, []);

	const scrollToSection = (id: string) => {
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
									className={`relative whitespace-nowrap text-[13px] md:text-sm font-semibold tracking-tight text-slate-700 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#E41B13] after:transition-transform after:duration-300 hover:text-[#E41B13] hover:after:scale-x-100 ${
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
						className="md:hidden text-gray-700 py-2.5"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
					>
						{isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
					</button>
				</div>
			</div>

			{isMobileMenuOpen && (
				<div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/60 shadow-lg">
					<nav className="flex flex-col space-y-1 px-4 py-4">
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
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;

