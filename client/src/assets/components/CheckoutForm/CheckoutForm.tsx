import { Button, Form, Input, Select, Spin } from "antd";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";
import { useContext, useState } from "react";
import { MyCartContext } from "../../../context/CartContext";
import { NavLink } from "react-router-dom";
import '../Buttons/BtnStyle/btnStyle.css'

const CheckoutForm = () => {
  const {
    setZipcode,
    setStreet,
    setCountry,
    setCity,
    placeOrder,
    setShippingMethod,
    setOrderItems,
    setOrderInfo,
  } = useContext(OrderContext)!;

  const [loading, setLoading] = useState(false);

  const { data } = useContext(UserContext)!;
  const { shippingData } = useContext(OrderContext)!;
  const { items } = useContext(MyCartContext);

  setOrderInfo(items);

  const OrderItems = items.map((p) => ({
    product: p._id,
    quantity: p.quantity,
  }));
  console.log(OrderItems);

  const handleSubmit = () => {
    setLoading(true);
    placeOrder();
    setLoading(false);
  };

  const handleDropdownChange = (value: string | ((prevValue: string) => string)) => {
    console.log("Selected value:", value);
    setShippingMethod(value);
    setOrderItems(OrderItems);
  };

  ///Detta löste felen som var innan 
  function setLastname(_value: string): void {
    throw new Error("Function not implemented.");
  }

  function setFirstname(_value: string): void {
    throw new Error("Function not implemented.");
  }

  function setEmail(_value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      {loading ? (
        <Spin tip="Processing order..." />
      ) : (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="on"
        >
          <Form.Item
            name={["address", "province"]}
            noStyle
            rules={[{ required: true, message: "Province is required" }]}
          >
            <Select
              defaultValue="Välj fraktsätt"
              style={{ minWidth: 150 }}
              onChange={handleDropdownChange}
              placeholder="Select province"
            >
              {shippingData.map((d) => (
                <option key={d._id} value={d._id}>
                  {d.company}
                </option>
              ))}
            </Select>
          </Form.Item>

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
            <Button className="btnStyle" onClick={handleSubmit} type="primary" htmlType="submit">
              <NavLink to="/order">Lägg order</NavLink>
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default CheckoutForm;
