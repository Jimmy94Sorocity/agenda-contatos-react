import { Link } from "react-router-dom";

import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const BotaoAdicionar = styled(Link)`
  padding: 8px;
  border: 2px solid green;
  border-radius: 8px;
  background-color: ${variaveis.verde};
  color: #fff;
  margin-bottom: 16px;
  text-decoration: none;
`;
