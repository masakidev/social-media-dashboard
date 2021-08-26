import iconUp from '../images/icon-up.svg';
import iconDown from '../images/icon-down.svg';

const CardOverview = ({ social, name, logo, number = 0, porcentage = 0 }) => {
  let arrow;
  let stylePorcentage;
  
  if (number > 1000000) {
    number = number / 100000 + 'm';
  } else if (number > 10000) {
    number = number / 1000 + 'k';
  }

  if (porcentage < 0) {
    arrow = iconDown;
    stylePorcentage = 'text-brightred font-bold';
    porcentage = porcentage * -1;
  } else {
    arrow = iconUp;
    stylePorcentage = 'text-limegreen font-bold';
  }
  
  return (
    <div className="px-6 py-6 mb-4 bg-darkdesaturatedbluecardbg rounded-md" key={social + name}>
      <div className="flex justify-between mb-4">
      <h2 className="text-desaturatedbluetext font-bold">
        {name}
      </h2>
      <img src={logo} alt="" />
      </div>
      <div className="flex justify-between">
        <h1 className="text-4xl text-whitetext font-bold">
          {number}
        </h1>
        <div className="flex items-center gap-1">
          <img className="h-1" src={arrow} alt="" />
          <h1 className={stylePorcentage}>
            {porcentage}%
          </h1>
        </div>
      </div>
    </div>
  )
}

export default CardOverview;