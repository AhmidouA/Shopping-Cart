import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justifu-content: space-between;
    font-family; Arial, Helvetica, sans-serif;
    border-bottom: 0.5rem solid lightblue;
    padding-bottom: 1rem;

    div {
        flex: 1;
    }

    .information, .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 5rem;
        object-fit: cover;
        margin-left: 3rem;
    }
`;