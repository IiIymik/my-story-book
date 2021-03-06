import {HiHome, HiAcademicCap,HiBookOpen} from 'react-icons/hi';
import Navigation from "./Navigation";

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
    title: 'Navigation',
    component: Navigation,
};

export default Stories;

const Template = args => <Navigation {...args}/>

export const Default = Template.bind({});

Default.args = {
    items: navItems,
};