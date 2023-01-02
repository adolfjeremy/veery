import styled from "styled-components";
import bgImage from "../../images/veerybirds.png";

const Main = styled.main`
    display: flex;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    min-height: calc(100vh - 59px);
    @media (max-width: 992px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`;

export default Main;
