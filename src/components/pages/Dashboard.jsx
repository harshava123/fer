import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token || !userData) {
      navigate('/login')
      return
    }

    try {
      setUser(JSON.parse(userData))
    } catch {
      navigate('/login')
    }
  }, [navigate])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Welcome to Dashboard, {user.username}!
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* User Info Card */}
              <div className="bg-indigo-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-indigo-900 mb-4">User Information</h2>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-indigo-700 font-medium">Username:</span>
                    <p className="text-indigo-900 font-semibold">{user.username}</p>
                  </div>
                  <div>
                    <span className="text-sm text-indigo-700 font-medium">Email:</span>
                    <p className="text-indigo-900 font-semibold">{user.email}</p>
                  </div>
                  <div>
                    <span className="text-sm text-indigo-700 font-medium">User ID:</span>
                    <p className="text-indigo-900 font-mono text-xs">{user.id}</p>
                  </div>
                </div>
              </div>

              {/* Status Card */}
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-green-900 mb-4">Account Status</h2>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-green-900 font-semibold">Active</p>
                    <p className="text-green-700 text-sm">Your account is active and ready to use</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions Card */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-4">Quick Actions</h2>
                <div className="space-y-2">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Update Profile
                  </button>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Settings
                  </button>
                </div>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">🎉 Successfully Logged In!</h2>
              <p className="text-indigo-100">
                Your account has been created and saved to the database. You can now access all features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

