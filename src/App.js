import Header from './components/Header';
import Card from './components/Card';
import Overview from './components/Overview';

const App = () => {
  return (
    <div className="px-6 py-10 text-sm font-inter bg-verydarkbluebg select-none">
      <Header />
      <Card />
      <Overview />
    </div>
  )
}

export default App;
