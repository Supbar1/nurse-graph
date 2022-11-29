import styled from "styled-components";

const TableHeaderStyled = styled.thead`
  height: 4rem;
  padding: 9rem;
  border-radius: 4rem;
  line-height: 3rem;
  z-index: 1;
`;

const Cell = styled.th`
  text-align: center;
`;

const TableHeader = () => (
  <TableHeaderStyled>
    <tr>
      <th>Imie i Nazwisko</th>
      <Cell>Ranki</Cell>
      <Cell>Dni</Cell>
      <Cell>Noce</Cell>
      <Cell>Razem</Cell>
      <Cell />
    </tr>
  </TableHeaderStyled>
);

export default TableHeader;
