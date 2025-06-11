function Footer(){
  return <footer className="bg-gray-50 border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FH</span>
                </div>
                <span className="text-lg font-semibold text-gray-800">Fresh Homemade</span>
              </div>
              <p className="text-gray-600 text-sm">
                Premium homemade products delivered fresh to your doorstep in Itahari.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📱 +977-9812368214</p>
                <p>📧 itahari@freshhomemade.com</p>
                <p>📍 Itahari, Sunsari</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Delivery</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🚚 Free delivery within Itahari</p>
                <p>⏰ Order today, get tomorrow</p>
                <p>📦 Fresh products guaranteed</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
            <p>© 2025 Fresh Homemade. Made with ❤️ in Itahari</p>
          </div>
        </div>
      </footer>
}

export default Footer;