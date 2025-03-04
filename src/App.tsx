import { Provider } from 'react-redux'
import './App.css'
import { store } from './rtk/store'

// "use client";
import AppRoutes from './routes/app-routes'
import NewUserCardData from './tables/component/NewUserCardsData';

function App() {
  return (
    <Provider store={store}>
      <NewUserCardData />
      <AppRoutes />
    </Provider>
  );
}





export default App
