import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 bg-gradient-to-br from-surface-light to-background-light dark:from-surface-dark dark:to-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">

          {/* Column 1 */}
          <div>
            <h3 className="font-display font-medium text-text-primary-light dark:text-text-primary-dark mb-4 text-base">Services</h3>
            <ul className="space-y-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Residential Roofing</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Residential Gutters</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Residential Solar</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Free Inspections</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-display font-medium text-text-primary-light dark:text-text-primary-dark mb-4 text-base">Company</h3>
            <ul className="space-y-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <li><a href="#why-choose-us" className="hover:text-brand-gold transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-brand-gold transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-display font-medium text-text-primary-light dark:text-text-primary-dark mb-4 text-base">Legal</h3>
            <ul className="space-y-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <li><a href="/terms" className="hover:text-brand-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-display font-medium text-text-primary-light dark:text-text-primary-dark mb-4 text-base">Follow Us</h3>
            <div className="flex flex-col space-y-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <a href="https://www.facebook.com/sanchezlegacyroofing" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2">Facebook</a>
              <a href="https://www.instagram.com/sanchezlegacyroofing" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2">Instagram</a>
              <a href="https://www.linkedin.com/company/sanchezlegacyroofing" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs pt-8 border-t border-gray-100 dark:border-gray-800 text-text-secondary-light dark:text-text-secondary-dark">
          <p>© 2025 Sanchez Legacy Roofing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;