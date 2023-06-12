import { Button, Form, Input, Select, Spin } from "antd";
import { UserContext } from "../../../context/UserContext";
import { OrderContext } from "../../../context/OrderContext";
import { useContext, useState, useEffect } from "react";
import { MyCartContext } from "../../../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";

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
  } = useContext(OrderContext)!;

  const { data } = useContext(UserContext)!;
  const { shippingData, orderTotal, loading } = useContext(OrderContext)!;
  const { items, shopingcartTotal } = useContext(MyCartContext);

  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  const claculateOrderTotal = (value: string) => {
    const parsedValue = JSON.parse(value);
    const shippingPrice = parsedValue.price;
    const orderTotal = shopingcartTotal + shippingPrice;
    setOrderTotal(orderTotal);
    console.log(parsedValue);
  };

  setOrderInfo(items);

  const OrderItems = items.map((p) => ({
    product: p.product._id,
    quantity: p.quantity,
  }));

  const Navigate = useNavigate();

  const handleSubmit = () => {
    placeOrder();

    Navigate("/order");
  };

  const handleDropdownChange = (value: string) => {
    const parsedValue = JSON.parse(value);
    console.log("Selected value:", parsedValue);
    setShippingMethod(parsedValue.id);
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
            style={{ minWidth: 300 }}
            onChange={handleDropdownChange}
            placeholder="Select province"
          >
<<<<<<< HEAD
            <Select
              defaultValue="Välj fraktsätt"
              style={{ minWidth: 300 }}
              onChange={handleDropdownChange}
              placeholder="Select province"
              
            >
              {shippingData
                .map((d) => ({
                  id: d._id,
                  price: d.price,
                  company: d.company,
                  deliveryTimeInHours: d.deliveryTimeInHours,
                }))
                .map((option) => (
                  <option key={option.id} value={JSON.stringify(option)}>
                    {option.company} {option.price}:- leveranstid{" "}
                    {option.deliveryTimeInHours} h
                  </option>
                ))}
            </Select>
          </Form.Item>
=======
            {shippingData
              .map((d) => ({
                id: d._id,
                price: d.price,
                company: d.company,
                deliveryTimeInHours: d.deliveryTimeInHours,
              }))
              .map((option) => (
                <option key={option.id} value={JSON.stringify(option)}>
                  {option.company} {option.price}:- leveranstid{" "}
                  {option.deliveryTimeInHours} h
                </option>
              ))}
          </Select>
        </Form.Item>
>>>>>>> 8f02f77d31ebe161224b0e08668026c9089a2977

        <Form.Item
          label="Förnamn"
          name="Förnamn"
          initialValue={data.firstName}
          rules={[{ required: true, message: "Ange förnamn" }]}
        >
          <Input onChange={(e) => setFirstname(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Efternamn"
          name="Efternamn"
          initialValue={data.lastName}
          rules={[{ required: true, message: "Ange efternamn" }]}
        >
          <Input onChange={(e) => setLastname(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          initialValue={data.email}
          rules={[{ required: true, message: "Ange Email" }]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
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
          rules={[{ required: true, message: "Ange postnummer" }]}
        >
          <Input onChange={(e) => setZipcode(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Stad"
          name="Stad"
          rules={[{ required: true, message: "Ange stad" }]}
        >
          <Input onChange={(e) => setCity(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Land"
          name="Land"
          rules={[{ required: true, message: "Ange land" }]}
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

<<<<<<< HEAD
          <Form.Item
            label="Efternamn"
            name="Efternamn"
            initialValue={data.lastName}
            rules={[{ required: true, message: "Ange efternamn" }]}
          >
            <Input onChange={(e) => setLastname(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            initialValue={data.email}
            rules={[{ required: true, message: "Ange Email" }]}
          >
            <Input onChange={(e) => setEmail(e.target.value)} />
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
            rules={[{ required: true, message: "Ange postnummer" }]}
          >
            <Input onChange={(e) => setZipcode(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Stad"
            name="Stad"
            rules={[{ required: true, message: "Ange stad" }]}
          >
            <Input onChange={(e) => setCity(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Land"
            name="Land"
            rules={[{ required: true, message: "Ange land" }]}
          >
            <Input onChange={(e) => setCountry(e.target.value)} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            
            <Button onClick={handleSubmit} type="primary" htmlType="submit">
              <NavLink to="/order">Lägg order</NavLink>
              {/* usenavigate */}
            </Button>
          </Form.Item>
        </Form>
      )}
=======
>>>>>>> 8f02f77d31ebe161224b0e08668026c9089a2977
      <h3>Totalbelop med frakt: {orderTotal}</h3>
    </div>
  );
};

export default CheckoutForm;
