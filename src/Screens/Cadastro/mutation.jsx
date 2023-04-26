import { gql, useMutation } from '@apollo/client'

export const createGamer = gql`
    mutation ($nome: string, $escopo: strging, $pontos: int){
        createParticipante(data: {nome: $nome, escopo: $escopo, pontos: $pontos}) {
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