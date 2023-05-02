import { gql, useMutation } from '@apollo/client'

export const createGamer = gql`
mutation ($nome: String!, $pontos: Int!, $escopo: String!){
    createParticipante(data: {nome: $nome, pontos: $pontos, escopo: $escopo}) {
        id
        nome
        escopo
        pontos
}
publishParticipante(where: {nome: $nome}, to: PUBLISHED) {
    id
  }
}
`