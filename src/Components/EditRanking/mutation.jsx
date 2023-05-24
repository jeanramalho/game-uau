import { gql } from "@apollo/client"

export const saveUserChanged = gql`
mutation($points: Int, $gamer: String) {
  updateParticipante(data: {pontos: $points}, where: {nome: $gamer}) {
    id
  }
}
`