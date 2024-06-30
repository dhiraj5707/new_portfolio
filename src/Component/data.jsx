import{
    faHome,
    FaUser,
    FaFolderOpen,
    FaEvelopeOne,
    FaBriefcase,
    FaGradurationCap,
    FaCode,
}
from 'react-icons/fa';



export const links=[
    {
        id:1,
        name:'Home',
        icon:<faHome className='nav__icon'/>,
        path:'/',
    },
    {
        id:2,
        name:'About',
        icon:<FaUser className='nav__icon'/>,
        path:'/about',
    },
    {
        id:3,
        name:'portfolio',
        icon:<FaFolderOpen className='nav__icon'/>,
        path:'/portfolio',
    },
    {
        id:4,
        name:'Contact',
        icon:<FaEvelopeOne className='nav__icon'/>,
        path:'/Contact',
    },
    
];
export const personalInfo=[
    {
        id:1,
        title:'First Name',
        description:'Steve',
    },
]