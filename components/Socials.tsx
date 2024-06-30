import Link from 'next/link';

import { FaGithub, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/JediKnightGIT' },
  { icon: <FaTelegram />, path: 'https://t.me/JediKnightTG' },
  { icon: <MdEmail />, path: 'mailto:jediknightru@gmail.com' },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => {
        return (
          <Link key={idx} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
