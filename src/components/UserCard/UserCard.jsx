import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserCard({ item, clicked, setClicked }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="http://sun9-70.userapi.com/impf/c849220/v849220346/36878/JhH-zDMl7O0.jpg?size=807x426&quality=96&sign=676c7f8952269a6848f97aec81e874c7&type=album"
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.username} {item.phone}
        </Card.Text>
        <Button onClick={() => setClicked(!clicked)} variant="primary">
          вызываем эффект
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
