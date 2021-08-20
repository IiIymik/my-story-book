import NavigationItem from "../NavigationItem/NavigationItem"
export default function Navigation({ items, reversed }) {
    return items
        ? items.map(item => <NavigationItem key={item.text} {...item} reversed={reversed}/>)
        : null;
};

