import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashaboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  )
}