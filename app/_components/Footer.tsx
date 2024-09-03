import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-black hover:font-bold transition-colors duration-300"
  >
    {children}
  </a>
);

const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    className="text-black hover:font-bold transition-colors duration-300"
  >
    <Icon size={24} />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Front</h2>
            <p className="text-black">
              Providing innovative solutions for your business needs since 2010.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/services">Our Services</FooterLink>
              </li>
              <li>
                <FooterLink href="/projects">Projects</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-black mb-2">123 Business Street</p>
            <p className="text-black mb-2">City, State 12345</p>
            <p className="text-black mb-2">Phone: (123) 456-7890</p>
            <p className="text-black">Email: info@company.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="https://facebook.com" />
              <SocialIcon Icon={Twitter} href="https://twitter.com" />
              <SocialIcon Icon={Instagram} href="https://instagram.com" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-black">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
