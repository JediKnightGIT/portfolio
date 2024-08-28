'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { LocaleProps } from '../page';

const Resume = ({ params: { locale } }: LocaleProps) => {
  unstable_setRequestLocale(locale);

  const ta = useTranslations('About');
  const te = useTranslations('Experience');
  const ted = useTranslations('Education');
  const ts = useTranslations('Skills');

  // about data
  const about = {
    title: ta('title'),
    info: [
      {
        fieldName: ta('list.name.title'),
        fieldValue: ta('list.name.value'),
      },
      {
        fieldName: ta('list.experience.title'),
        fieldValue: ta('list.experience.value'),
      },
      {
        fieldName: ta('list.languages.title'),
        fieldValue: ta('list.languages.value'),
      },
      {
        fieldName: ta('list.teamwork.title'),
        fieldValue: ta('list.teamwork.value'),
      },
      {
        fieldName: 'Email',
        fieldValue: 'jediknightru@gmail.com',
      },
    ],
  };

  // experience data
  const experience = {
    icon: '/resume/badge.svg',
    title: te('title'),
    items: [
      {
        company: te('list.1.company'),
        position: te('list.1.position'),
        duration: te('list.1.duration'),
      },
      {
        company: te('list.2.company'),
        position: te('list.2.position'),
        duration: te('list.2.duration'),
      },
    ],
  };

  // education data
  const education = {
    icon: '/resume/cap.svg',
    title: ted('title'),
    items: [
      {
        institution: ted('list.1.institution'),
        degree: ted('list.1.degree'),
        duration: '2018 - 2022',
      },
      {
        institution: ted('list.2.institution'),
        degree: ted('list.2.degree'),
        duration: '2014 - 2018',
      },
    ],
  };

  // skills data
  const skills = {
    title: 'My skills',
    skillList: [
      {
        icon: <FaHtml5 />,
        name: 'HTML5',
      },
      {
        icon: <FaCss3 />,
        name: 'CSS3',
      },
      {
        icon: <FaJs />,
        name: 'JavaScript',
      },
      {
        icon: <FaReact />,
        name: 'React.js',
      },
      {
        icon: <SiNextdotjs />,
        name: 'Next.js',
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind CSS',
      },
      {
        icon: <FaNodeJs />,
        name: 'Node.js',
      },
      {
        icon: <FaFigma />,
        name: 'Figma',
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{te('value')}</TabsTrigger>
            <TabsTrigger value="education">{ted('value')}</TabsTrigger>
            <TabsTrigger value="skills">{ts('value')}</TabsTrigger>
            <TabsTrigger value="about">{ta('title')}</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* {dot} */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* {dot} */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-[10px] w-full">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, idx) => {
                    return (
                      <li key={idx}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 xl:gap-x-[6px]">
                  {about.info.map((item, idx) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:jusitfy-start gap-4 xl:justify-start"
                        key={idx}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
