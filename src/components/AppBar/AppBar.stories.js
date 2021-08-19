import {HiHome, HiAcademicCap,HiBookOpen} from 'react-icons/hi';
import AppBar from "./AppBar";

const navItems = [{
    text: 'Main',
    icon: <HiHome size='24' />
},
{
    text: 'Student',
    icon: <HiAcademicCap size='24' />
},
{
    text: 'Book',
    icon: <HiBookOpen size='24' />
}
];

const Stories = {
    title: 'AppBar',
    component: AppBar,
};

export default Stories;

const Template = (args) => <AppBar {...args} />;

export const Default = Template.bind({});

Default.args = {
    logoImg: 'https://image.flaticon.com/icons/png/512/924/924874.png',
    navItems,
    minimized:false,
};

export const Minimized = Template.bind({});

Minimized.args = {
    ...Default.args,
    minimized: true,
};


