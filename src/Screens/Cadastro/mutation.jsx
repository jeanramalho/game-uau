import { gql, useMutation } from '@apollo/client'

export const createGamer = gql`
    mutation ($nome: string, $escopo: strging, $pontos: int) {
        int 
        nome
        escopo
        pontos
    }
`