import Toggle from "./Toggle";

const Stories = {
    title: "Toggle",
    component: Toggle,
}

export default Stories;

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});

Default.args = {
    reversed: false,
};

