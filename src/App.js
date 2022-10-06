import Header from "./components/Header"
import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4 } from 'uuid'
import AboutPage from "./pages/AboutPage"
import AboutLink from "./components/AboutLink"
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feedback ?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" exact element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }>
                    </Route>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
            <AboutLink />
        </Router>
        </FeedbackProvider>
        </>
    )
}

export default App