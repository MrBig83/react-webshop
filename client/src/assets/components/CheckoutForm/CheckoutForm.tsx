import { Button, Form, Input, Select } from "antd";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";
import { useContext } from "react";

const CheckoutForm = () => {
  const {
    setFirstname,
    setLastname,
    setEmail,
    setPhoneNumber,
    setZipcode,
    setStreet,
    setCountry,
    setCity,
    placeOrder,
  } = useContext(OrderContext)!;

  const { data } = useContext(UserContext)!;
  const { shippingData } = useContext(OrderContext)!

  
  const handleSubmit = () => {
    placeOrder();
  };
  console.log(shippingData)
//shippingData.map((d) => console.log(d.price))
  
  
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="on"
      >
        {/* <Form.Item         
         name={['address', 'province']} 
         noStyle 
         rules={[{ required: true, message: 'Province is required' }]}>
         <Select placeholder="Select province">
          <Option value="Zhejiang">Postnord</Option>
          <Option value="">DHL</Option>
          <Option value="Jiangsu">DB Shenker</Option>
         </Select>
        </Form.Item> */}

        <Form.Item
          label="Förnamn"
          name="Förnamn"
          initialValue={data.firstName}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={(e) => setFirstname(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Efternamn"
          name="Efternamn"
          initialValue={data.lastName}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={(e) => setLastname(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          initialValue={data.email}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Telefon"
          name="Telefonnummer"
          rules={[{ required: true, message: "Skriv in tel" }]}
        >
          <Input onChange={(e) => setPhoneNumber(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Gata"
          name="Gata"
          rules={[{ required: true, message: "Skriv in tel" }]}
        >
          <Input onChange={(e) => setStreet(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Postnummer"
          name="Postnummer"
          rules={[{ required: true, message: "Skriv in tel" }]}
        >
          <Input onChange={(e) => setZipcode(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Stad"
          name="Stad"
          rules={[{ required: true, message: "Skriv in tel" }]}
        >
          <Input onChange={(e) => setCity(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Land"
          name="Land"
          rules={[{ required: true, message: "Skriv in tel" }]}
        >
          <Input onChange={(e) => setCountry(e.target.value)} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={handleSubmit} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CheckoutForm;
