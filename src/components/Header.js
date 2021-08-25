import ToggleTheme from './ToggleTheme';
import data from './data'

const totalFollowers = data.map(card => (
  card.stats.followers === undefined ? 0 : card.stats.followers
))

const totalSubscribers = data.map(card => (
  card.stats.subscribers === undefined ? 0 : card.stats.subscribers
))
const getTotalSubscribers = totalSubscribers.reduce((value1, value2) => {
  return value1 + value2;
})

const getTotalFollowers = totalFollowers.reduce((value1, value2) => {
  return value1 + value2;
})

const getAllFollowers = getTotalFollowers + getTotalSubscribers


const Header = () => {
  return (
    <header className="mb-10">
      <div className="border-b-2 border-desaturatedbluetext pb-4">
      <h1 className="text-whitetext text-2xl font-bold">
        Social Media Dashboard
      </h1>
      <h2 className="text-desaturatedbluetext font-bold">
        Total followers: {
        getAllFollowers > 1000000 
        ? 
        getAllFollowers / 100000 + 'm'
        :
        getAllFollowers > 10000
        ?
        getAllFollowers / 1000 + 'k'
        :
        getAllFollowers
      }
      </h2>
      </div>
      <ToggleTheme />
    </header>
  )
}

export default Header;