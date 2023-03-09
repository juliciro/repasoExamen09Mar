import React from 'react'

export const Card = ({email, password,rol}) => {
  return (
    <div style={{
        border: "4px solid blue",
    }}>
        <h2>Hola al email: {email}</h2>
        <h2>Tu contraseña es:{password}</h2>
        <h2>Tu rol es:{rol}</h2>
    </div>
  )
}
