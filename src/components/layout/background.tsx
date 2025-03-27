export const Background = () => {
  return (
    <div
      className="absolute inset-0 bg-foreground"
      style={{
        backgroundImage:
          'url(https://cdn.dribbble.com/userupload/32025222/file/original-ee1d4422a842d977b9823b87ef1acecc.jpg?resize=1600x1200&vertical=center)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.7,
      }}
    />
  )
}
