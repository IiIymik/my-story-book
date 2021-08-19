import Logo from "./Logo";

const Stories = {
    title: "Logo",
    component: Logo,
}

export default Stories;

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
    imgUrl: 'https://image.flaticon.com/icons/png/512/924/924874.png',
    alt: 'Logo',
};

