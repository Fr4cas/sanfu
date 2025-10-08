import HeaderBar from '../components/HeaderBar.jsx'

function HomePage() {
    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <HeaderBar />
                    <div className="bg-white rounded-lg shadow p-6 text-gray-600">
                            Place to put the data
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage