import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import { interfacePayment, interfaceProducts } from "../../interfaces";

import { Header } from "./../../components/Header";
import { PathBreadcrum } from "../../components/PathBreadcrumb";
import { CartCard } from "../../components/CartCard";
import { CartCheckout } from "../../components/CartCheckout";
import { Payment } from "../../components/Payment";
/* import { Footer } from "./../../components/Footer"; */

export const Cart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<interfaceProducts>({
    id: 0,
    title: "",
    brand: "",
    price: 0,
    color: "",
    images: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/products/" + id)
      .then((response) => {
        //console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  /*---------Q U A N T I D A D E-------------*/
  const [qtdy, setQtdy] = useState(1);

  function increaseQtdy() {
    setStatus(false);
    setQtdy(qtdy + 1);
  }

  function decreaseQtdy() {
    setStatus(false);

    if (qtdy > 1) setQtdy(qtdy - 1);
  }
  /*------------------------------------------*/

  /*--------B U T T O N   S T A T U S---------*/
  const [status, setStatus] = useState(false);

  function changeStatus() {
    setStatus(!status);
    console.log(status);
  }
  /*------------------------------------------*/

  /* ------------V A L O R E S--------------- */
  function subtotal(price: number, qtdy: number): number {
    return price * qtdy;
  }
  function freight(price: number, qtdy: number): number {
    return subtotal(price, qtdy) * 0.1;
  }

  const totalValue: number =
    subtotal(product.price, qtdy) + freight(product.price, qtdy);
  /*------------------------------------------*/

  const [statePagamento, setStatePagamento] = useState<interfacePayment>({
    total: totalValue,
    moneyQtdy: [0],
    money: [0],
    quantity: 0,
  });

  function changeStatePagamento(pgto: interfacePayment): void {
    setStatePagamento(pgto);
  }

  let pagamento = {
    total: totalValue,
    moneyQtdy: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    money: [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01],
    quantity: 0,
  };

  function paymentCalc(): void {
    console.log(`Pagamento Total: ${pagamento.total}`);
    for (let i = 0; i < 13; i++) {
      while (pagamento.total >= pagamento.money[i]) {
        pagamento.quantity++;
        pagamento.total = pagamento.total - pagamento.money[i];
        pagamento.total = parseFloat(pagamento.total.toFixed(2));
        pagamento.moneyQtdy[i] = pagamento.quantity;
      }
      pagamento.quantity = 0;
    }
    console.log(`Pagamento Total: ${pagamento.total}`);
    console.log(`Pagamento Total: ${pagamento.moneyQtdy}`);
  }

  return (
    <>
      <Header />
      <Container>
        <PathBreadcrum path="Carrinho" />
        <br />

        <>
          <div className="row">
            <div
              className="col-8"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h3
                style={{
                  fontWeight: "bold",
                  color: "#353535",
                }}
              >
                Carrinho
              </h3>
            </div>
            <div
              className="col-4"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h3
                style={{
                  fontWeight: "bold",
                  color: "#353535",
                }}
              >
                Resumo do Pedido
              </h3>
            </div>
          </div>
          <br />
          <div className="row">
            <div
              className="col-8"
              style={{
                boxSizing: "border-box",
                border: "1px solid #B2B2B2",
                borderRadius: "7px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CartCard
                id={product.id}
                title={product.title}
                brand={product.brand}
                price={product.price}
                color={product.color}
                images={product.images}
                qtdy={qtdy}
                increaseQtdy={increaseQtdy}
                decreaseQtdy={decreaseQtdy}
              ></CartCard>
            </div>
            <div className="col-4">
              <CartCheckout
                price={product.price}
                qtdy={qtdy}
                status={status}
                changeStatus={changeStatus}
                subtotal={subtotal}
                freight={freight}
                totalValue={totalValue}
                changeStatePagamento={changeStatePagamento}
                paymentCalc={paymentCalc}
                //pgto={statePagamento}
              ></CartCheckout>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-8"></div>
            <div
              style={{
                visibility: status ? "visible" : "hidden",
              }}
              className="col-4"
            >
              <Payment propStatePagamento={statePagamento} />
            </div>
          </div>
        </>
      </Container>
      {/* <Footer /> */}
    </>
  );
};
