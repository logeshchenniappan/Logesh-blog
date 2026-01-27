export default function AdminPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

  if (!projectId) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-6 bg-white rounded-lg shadow">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Configuration Error
          </h1>
          <p className="text-gray-600 mb-4">
            NEXT_PUBLIC_SANITY_PROJECT_ID is not configured
          </p>
          <p className="text-sm text-gray-500">
            Please add it to your{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Sanity Studio</h1>
        <p className="text-gray-600 mb-6">Access your content editor at:</p>
        <a
          href={`https://${projectId}.sanity.studio`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open Sanity Studio
        </a>
        <p className="text-sm text-gray-500 mt-6">
          <strong>First time?</strong> You may need to authenticate with your
          Sanity account.
        </p>
      </div>
    </div>
  )
}
