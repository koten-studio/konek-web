'use client'

const IOS_URL = 'https://apps.apple.com/be/app/konek/id6746455896'
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.konek.mobileapp&hl=fr'

export default function AppDownloadBanner() {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-xl text-gray-900 flex items-center">
          <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-indigo-500 rounded-full mr-3"></div>
          Get the Konek App
        </h3>
      </div>

      <div className="space-y-4">
        {/* Platform buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={IOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 rounded-2xl p-4 border border-blue-200/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-blue-800">App Store</p>
                <p className="text-blue-600 text-sm">Download for iPhone</p>
              </div>
            </div>
          </a>

          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 rounded-2xl p-4 border border-green-200/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.34c-.5 0-.96-.29-1.17-.75l-1.12-2.38c-.18-.39-.32-.51-.58-.51s-.4.12-.58.51l-1.12 2.38c-.21.46-.67.75-1.17.75-.91 0-1.52-.84-1.26-1.68l2.62-8.52c.35-1.15 1.41-1.95 2.6-1.95s2.25.8 2.6 1.95l2.62 8.52c.26.84-.35 1.68-1.26 1.68zm-10.9.01c-.67 0-1.22-.55-1.22-1.22V9.88c0-.67.55-1.22 1.22-1.22s1.22.55 1.22 1.22v4.21c0 .67-.55 1.22-1.22 1.22z"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-green-800">Google Play</p>
                <p className="text-green-600 text-sm">Download for Android</p>
              </div>
            </div>
          </a>
        </div>

        <p className="text-center text-sm text-gray-500">
          Free on the App Store and Google Play.
        </p>
      </div>
    </div>
  )
}
