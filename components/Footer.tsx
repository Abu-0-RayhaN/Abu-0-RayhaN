const Footer = () => {
  const year = new Date().getFullYear();
  return <p className="text-sm py-2">© {year} Md Rayhan All rights reserved.</p>;
};

export default Footer;
