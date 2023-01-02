import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.625rem 1rem;
    border-radius: 20px;
    text-decoration: none;
`;

export default LinkButton;
