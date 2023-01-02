import styled from "styled-components";

const ProfilPicture = styled.img`
    border-radius: 50%;
    width: ${(props) => (props.type === "sm" ? "20px" : "35px")};
    margin: ${(props) => (props.type === "sm" ? "0 5px" : "")};
`;

export default ProfilPicture;
