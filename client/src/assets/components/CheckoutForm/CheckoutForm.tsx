import { Button, Form, Input, Select } from "antd";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";
import { useContext, useState, useEffect } from "react";
import { MyCartContext } from "../../../context/CartContext";
import "../../components/Buttons/BtnStyle/BtnStyle.css";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [form] = Form.useForm();

  const {
    setZipcode,
    setStreet,
    setCountry,
    setCity,
    placeOrder,
    setShippingMethod,
    setOrderItems,
    setOrderInfo,
    setOrderTotal,
    setShippingTime,
  } = useContext(OrderContext);

  const { data } = useContext(UserContext);
  const { shippingData, orderTotal } = useContext(OrderContext);
  const { items, shopingcartTotal } = useContext(MyCartContext);

  const [submittable, setSubmittable] = useState(false);
  const values = Form.useWatch([], form);

  const claculateOrderTotal = (value: string) => {
    const parsedValue = JSON.parse(value);
    const shippingPrice = parsedValue.price;
    const orderTotal = shopingcartTotal + shippingPrice;
    setOrderTotal(orderTotal);
  };
  useEffect(() =>{

    setOrderInfo(items);
  })

  const OrderItems = items.map((p) => ({
    product: p.product._id,
    quantity: p.quantity,
  }));

  const Navigate = useNavigate();

  const handleSubmit = () => {
    placeOrder();
    Navigate("/order", { replace: true });
  };

  const handleDropdownChange = (value: string) => {
    const parsedValue = JSON.parse(value);
    setShippingMethod(parsedValue.id);
    setShippingTime(parsedValue);

    setOrderItems(OrderItems);
    claculateOrderTotal(value);
  };

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values]);

  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 17 }}
        style={{ maxWidth: 600}}
        initialValues={{ remember: true }}
        autoComplete="on"
      >
        <Form.Item
          name={["Frakt metod"]}
          noStyle
          rules={[{ required: true, message: "Ange leverans metod" }]}
        >
          <Select
            //intialValue="Välj fraktsätt"
            style={{ minWidth: 300, paddingBottom: 10 }}
            onChange={handleDropdownChange}
            placeholder="Välj fraktsätt"
          >
            {shippingData
              .map((d) => ({
                id: d._id,
                price: d.price,
                company: d.company,
                deliveryTimeInHours: d.deliveryTimeInHours,
              }))
              .map((option) => (
                <Select.Option key={option.id} value={JSON.stringify(option)}>
                  {option.company} {option.price}:- leveranstid{" "}
                  {option.deliveryTimeInHours} h
                </Select.Option>
              ))}
          </Select>
        </Form.Item>


        <Form.Item
          label="Förnamn"
          name="Förnamn"
          initialValue={data.firstName}
          rules={[
            {
              required: true,
              message: "Ange förnamn",
              pattern: new RegExp(
                /^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i
              ),
            },
          ]}
        >
          <Input onChange={(e) => e.target.value} />
        </Form.Item>

        <Form.Item
          label="Efternamn"
          name="Efternamn"
          initialValue={data.lastName}
          rules={[
            {
              required: true,
              message: "Ange efternamn",
              pattern: new RegExp(
                /^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i
              ),
            },
          ]}
        >
          <Input onChange={(e) => e.target.value} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          initialValue={data.email}
          rules={[{ required: true, type: "email", message: "Ange Email" }]}
        >
          <Input onChange={(e) => e.target.value} />
        </Form.Item>

        <Form.Item
          label="Gata"
          name="Gata"
          rules={[{ required: true, message: "Ange Gata" }]}
        >
          <Input onChange={(e) => setStreet(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Postnummer"
          name="Postnummer"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[0-9]+$/),      
              message: "Ange postnummer",
            },
            {
              min: 5,
              max: 5, 
              message: "Postnummer måste vara 5 siffror"
            }
          ]}
        >
          <Input onChange={(e) => setZipcode(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Stad"
          name="Stad"
          rules={[
            {
              required: true,
              message: "Ange stad",
            },
          ]}
        >
          <Input onChange={(e) => setCity(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Land"
          name="Land"
          rules={[
            {
              required: true,
              message: "Ange land",
            },
          ]}
        >
          <Input onChange={(e) => setCountry(e.target.value)} />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            onClick={handleSubmit}
            type="primary"
            htmlType="submit"
            disabled={!submittable}
          >
            Lägg order
            {/* usenavigate */}
          </Button>
        </Form.Item>
      </Form>

      <h3>Totalbelop med frakt: {orderTotal} kr</h3>
    </div>
  );
};

export default CheckoutForm;
