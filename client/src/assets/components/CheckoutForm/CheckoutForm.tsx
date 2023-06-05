import { Button, Form, Input } from "antd";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
const CheckoutForm = () => {
  const { data } = useContext(UserContext)!;

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Förnamn"
          name="Förnamn"
          initialValue={data.firstName}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Efternamn"
          name="Efternamn"
          initialValue={data.lastName}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          initialValue={data.email}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Telefonnummer"
          name="Telefonnummer"
          rules={[{ required: true, message: "Skriv in tel" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gata"
          name="Gata"
          rules={[{ required: true, message: "Skriv in tel" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Postnummer"
          name="Postnummer"
          rules={[{ required: true, message: "Skriv in tel" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Stad"
          name="Stad"
          rules={[{ required: true, message: "Skriv in tel" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Land"
          name="Land"
          rules={[{ required: true, message: "Skriv in tel" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CheckoutForm;
