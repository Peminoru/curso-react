
import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? ' aprovado ' : ' recuperação '
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.título}</h2>
            <p>
                <strong>{props.aluno}</strong>
                tem nota
                <strong>{notaInt}</strong>
                e está
                <strongs>{status}</strongs>
            </p>


        </div>
    )
}

