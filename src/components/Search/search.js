import React, {useState} from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../../components/Search/search.css"

const Search = () => {
  const [nameHero, setNameHero] = useState();
  async function updateInput(e) {
    if (e.key === "Enter" && e.currentTarget.value !== "") {
      setNameHero(e.target.value);
      await resultSearch();
    }
  }
  function resultSearch() {
    window.location.href = `/heroes?name=${nameHero}`;
  }
  console.log(nameHero, "meu nameHero");
    return (
        <Container className="container">
        <Form.Label className="title">MY SUPER HERO</Form.Label>
        <Form.Group className="form-principal">
          <Form.Control className="form" type="text"
          onKeyDown={updateInput}
          onChange={event => {
            setNameHero(event.target.value);
          }} 
          ></Form.Control>
          <Button className="button" type="submit" 
          onClick={event => {
            event.preventDefault();
            resultSearch();
          }}
          >
            Pesquisar
          </Button>
        </Form.Group>
      </Container>
    )
}

export default Search;