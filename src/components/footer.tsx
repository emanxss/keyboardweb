function Footer() {
  return (
    <div
      style={{
        backgroundColor: '000000',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1caca' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
      }}
      className="flex h-16 items-center justify-center border-t border-[rgba(255,255,255,0.25)] bg-black text-sm text-white"
    >
      <h1>Contact example@hotmail.com</h1>
    </div>
  )
}
/* TODO: Should try to add some rainbow text or background
  gradient effect
*/

export default Footer
