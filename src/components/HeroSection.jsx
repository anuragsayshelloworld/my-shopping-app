import { Truck } from 'lucide-react';
function HeroSection(){
  return <div className="lg:col-span-2 lg:sticky lg:top-24">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Fresh<br />
              <span className="text-green-600">Homemade</span><br />
              Products
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Premium homemade products at unbeatable prices. Made fresh, delivered free.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <Truck className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-green-800">Free Home Delivery</span>
              </div>
              <p className="text-green-700 text-sm">
                Free delivery within Itahari • Order today, get it fresh tomorrow
              </p>
            </div>
          </div>

}
export default HeroSection;