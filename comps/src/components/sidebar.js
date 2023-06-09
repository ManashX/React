import Link from "./link";
function  Sidebar(){
    const items = [
        {heading: 'Accordion', navigateTo: '/accordion'},
        {heading: 'Button',navigateTo: '/button'},
        {heading: 'Dropdown', navigateTo: '/dropdown'},
        {heading: 'Modal', navigateTo: '/modal'},
        {heading: 'Table', navigateTo: '/table'}
    ];

    const renderedItems = items.map((item)=>{
        return <Link to={item.navigateTo} key={item.heading} className='mb-3'>
                <div>
                    {item.heading}
                </div>
            </Link>
    });
    return <div className="sticky top-0 overflow-y-scroll flex flex-col">{renderedItems}</div>;
}
export default Sidebar;