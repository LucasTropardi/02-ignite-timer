import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>12:35</td>
              <td>Indo</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>12:35</td>
              <td>Indo</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>12:35</td>
              <td>Indo</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}