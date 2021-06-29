const LogoCard = ({icon, title, url}) => {
  return (
    <section>
      {/* this whole card needs to be a link or have a link?? */}
      <div>{icon}</div>
      <h5>{title}</h5>
    </section>
  )
}

export default LogoCard;