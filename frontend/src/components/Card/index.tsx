import { Card as CardBootstrap, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface interfaceProps {
    id: string,
    img: string,
    title: string,
    price: string,
    sale: string
}

export const Card = (props: interfaceProps) => {

    const navigate = useNavigate();

    return (
        <CardBootstrap style={{ width: "18rem", margin: 10 }}>
            <CardBootstrap.Img variant="top" src={props.img} />
            <CardBootstrap.Body>
                <CardBootstrap.Title>{props.title}</CardBootstrap.Title>
                <CardBootstrap.Text style={{ textDecoration: "line-through" }}>
                    {`R$ ${props.price}`}
                </CardBootstrap.Text>
                <CardBootstrap.Text
                    style={{ fontWeight: "bold", color: "red" }}
                >
                    {`R$ ${props.sale}`}
                </CardBootstrap.Text>
                <Button 
                    variant="primary"
                    className="btn-lg w-100"
                    onClick={() => {
                        navigate("/product/" + props.id)
                    }}>
                    Details
                </Button>
            </CardBootstrap.Body>
        </CardBootstrap>
    );
};
