import { useState } from "react"
import { Snackbar } from "./Snackbar"

function App() {
  const [snackbarVisible, setSnackbarVisible] = useState(false)
  return (
    <main className="container mx-auto">
      {snackbarVisible && <Snackbar visible={snackbarVisible} setVisible={setSnackbarVisible} />}
      <div className="flex w-full justify-center mt-48">
        <button className="border border-gray px-8 py-5 rounded" onClick={() => setSnackbarVisible(!snackbarVisible)}>Show Snackbar</button>
      </div>
    </main>
  )
}

export default App
