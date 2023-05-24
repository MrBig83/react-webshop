import { Menu } from 'antd';

const Header = () => {

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(15).fill(null).map((_, index) => {
                    const key = index + 1;
                    return {
                    key,
                    label: `nav ${key}`,
                    };
                })}
                />
        </div>  
    )
}
export default Header;