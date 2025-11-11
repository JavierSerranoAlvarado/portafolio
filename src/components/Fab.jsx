
export default function Fab({
  href = 'https://www.linkedin.com/in/javier-eduardo-serrano-alvarado-033386185/',
  icon = 'linkedin',
  prefix = 'fab',
  label = 'Contactar',
}) {
  const isExternal = href.startsWith('http')
  return (
    //className="floating_button"
    <a
      className="floating_button"
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer noopener' : undefined}
      aria-label={label}
      title={label}
    >
      <i className={`${prefix} fa-${icon}`} aria-hidden="true"></i>
      <span className="fab-label">{label}</span>
    </a>
  )
}
