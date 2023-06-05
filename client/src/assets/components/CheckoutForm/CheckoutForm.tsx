import { Button, Form, Input } from "antd";
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

  const handleSubmit = () => {
    placeOrder();
  };

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
