import { Provider } from 'react-redux'
import './App.css'
import { store } from './rtk/store'

// "use client";
import AppRoutes from './routes/app-routes'

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}





export default App
