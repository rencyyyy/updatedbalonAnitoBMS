import { HashLink } from 'react-router-hash-link';
import { useContext, useEffect } from 'react';
import { ActiveSectionContext } from './ActiveSectionContext';

const Navbar = ({ containerStyles }) => {
  const { activeSection, setActiveSection } = useContext(ActiveSectionContext);

  const isActive = (hash) => activeSection === hash;

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setActiveSection]);

  return (
    <nav className={containerStyles}>
      {['home', 'about', 'services', 'track-request', 'location'].map((section) => (
        <HashLink
          key={section}
          smooth
          to={`/#${section}`}
          onClick={() => setActiveSection(`#${section}`)}
          className={isActive(`#${section}`) ? 'text-green-400 text-sm font-semibold flex-1 border-b-2 border-b-green-400' : 'text-sm font-semibold transform hover:scale-110'}
        >
          <div className='p-2 flex items-center justify-center gap-1'>
            {section.toUpperCase().replace('-', ' ')}
          </div>
        </HashLink>
      ))}
    </nav>
  );
};

export default Navbar;
