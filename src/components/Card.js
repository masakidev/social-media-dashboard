import iconUp from '../images/icon-up.svg';
import iconDown from '../images/icon-down.svg';
import data from './data';

const Card = () => {
  return (
    <div className="mb-12">
      {
        data.map(card => (
          <div 
          className="bg-darkdesaturatedbluecardbg text-center rounded-md mb-6 py-6 text-desaturatedbluetext border-t-4" 
          key={card.social.id}>
            <div className="flex justify-center gap-2 mb-5">
              <img className="h-5" src={card.social.logo} alt={card.social}/>
              <h2 className="font-bold">
                {card.username}
              </h2>
            </div>
            <div className="mb-5">
              <h1 className="text-6xl font-bold text-whitetext select-none">
                {
                  card.stats.followers > 1000000 || card.stats.subscribers > 1000000 
                  ? 
                  card.stats.followers / 100000 || card.stats.subscribers / 100000
                  :
                  card.stats.followers > 10000 || card.stats.subscribers > 10000
                  ?
                  card.stats.followers / 1000 || card.stats.subscribers / 1000
                  :
                  card.stats.followers || card.stats.subscribers
                } 
                {
                  card.stats.followers > 1000000 || card.stats.subscribers > 1000000
                  ? 
                  'm'
                  :
                  card.stats.followers > 10000 || card.stats.subscribers > 10000
                  ?
                  'k'
                  :
                  '' 
                }
              </h1>
              <h2 className="text-sm uppercase tracking-widest">
                {card.social.id === 'Youtube' ? 'Subscribers' : 'Followers'}
              </h2>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img 
              className="h-2" 
              src={
                card.stats.followersToday < 0 || card.stats.subscribersToday < 0 
                ? 
                iconDown 
                : 
                iconUp
              } 
              alt="icon up"/>
              <h1 className={card.stats.followersToday < 0 || card.stats.subscribersToday < 0 ? 'text-brightred font-bold' : 'text-limegreen font-bold'}>
              {
                card.stats.followersToday < 0 || card.stats.subscribersToday < 0 
                ? 
                card.stats.followersToday * -1 || card.stats.subscribersToday * -1 
                :
                card.stats.followersToday || card.stats.subscribersToday
              } Today
              </h1>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card;