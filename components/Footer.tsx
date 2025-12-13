import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 pt-16 pb-8 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
          
          {/* Column 1 */}
          <div>
            <h3 className="font-display font-medium text-text-primary-light mb-4 text-base">Solutions</h3>
            <ul className="space-y-3 text-sm text-text-secondary-light">
              <li><a href="#" className="hover:text-primary-blue transition-colors">Residential Roofing</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Solar Integration</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Storm Restoration</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Inspections</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-display font-medium text-text-primary-light mb-4 text-base">About</h3>
            <ul className="space-y-3 text-sm text-text-secondary-light">
              <li><a href="#" className="hover:text-primary-blue transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Impact Resistance</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-display font-medium text-text-primary-light mb-4 text-base">Support</h3>
            <ul className="space-y-3 text-sm text-text-secondary-light">
              <li><a href="#" className="hover:text-primary-blue transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Insurance Help</a></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-display font-medium text-text-primary-light mb-4 text-base">Follow Us</h3>
            <div className="flex flex-col space-y-3 text-sm text-text-secondary-light">
              <a href="#" className="hover:text-primary-blue transition-colors flex items-center gap-2">Facebook</a>
              <a href="#" className="hover:text-primary-blue transition-colors flex items-center gap-2">Instagram</a>
              <a href="#" className="hover:text-primary-blue transition-colors flex items-center gap-2">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs pt-8 border-t border-gray-100 text-text-secondary-light">
          <p>© 2024 Sanchez Legacy Roofing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;