
export const navLinks = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About Me',
        href: '/about'
    },
    {
        title: 'My Work',
        href: '/project'
    },
    {
        title: 'Blog',
        href: '/blog'
    },
    {
        title: 'My Tools',
        href: '/tools'
    },
]

import { IoLogoGithub, IoLogoLinkedin,  } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

export const socialLinks = [
    {
        title: 'Github',
        href: '/github',
        icon: IoLogoGithub,
    },
    {
        title: 'X',
        href: '/x.com',
        icon: FaSquareXTwitter,
    },
    {
        title: 'Linkedln',
        href: '/linkedln',
        icon: IoLogoLinkedin
    }
]

export const tabLists = ["User", "Project", "Experience", "Skills", "Stack"];