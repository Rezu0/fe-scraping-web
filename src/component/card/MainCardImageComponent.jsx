function MainCardImageComponent() {
  return (
    <>
    
      <div className="w-full max-w-xs shadow-md overflow-hidden">
        {/* Gambar */}
        <img 
          src="https://www.xtapes.io/img/paris_amterdam_capitales_du_sexe.jpg" 
          alt="Thumbnail"
          className="w-full h-48 object-cover rounded-md"
        />

        {/* Konten di Bawah Gambar */}
        <div className="py-1">
          <h3 className="text-md font-semibold text-adultdesu-navbartext line-clamp-2">Paris-Amsterdam Capitales du Sexe – Full Movie (1998)</h3>
          <p className="text-sm text-gray-500">10 Maret 2025</p>
          <p className="text-sm text-gray-500">1 Jam 30 Menit</p>
        </div>
      </div>
      
    </>
  )
}

export default MainCardImageComponent;