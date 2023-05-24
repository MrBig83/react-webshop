import { Breadcrumb, theme } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Products from '../Products/Products';
import SingleProduct from '../SingleProduct/SingleProduct';



// import About from "./About/About";
// import Contact from "./Contact/Contact";

const Main: React.FC = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    return (
        <div style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          {/* <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <div className="site-layout-content" style={{ background: colorBgContainer }}> 
          {/* <Products /> */}
        </div>
         
        <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/:id' element={<SingleProduct />} />
                {/* <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact /> } /> */}
            </Routes>
        </div>
    )
}
export default Main;

