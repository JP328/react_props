interface CardProps{
  titulo: string
  descricao: string
  foto?: string
}

function Card({ titulo, descricao, foto }: CardProps) {
return (
  <div style={{
      width: "500px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1rem 0",
      border: "5px solid darkblue",
      margin: "0 0 1rem 0"
  }}>
      <h1>{ titulo }</h1>
      <p>{ descricao }</p>

      {foto ?
        <img src={foto} alt="Foto" />
        : <p>Postagem sem fotos</p>
      }
  </div>
)
}

export default Card