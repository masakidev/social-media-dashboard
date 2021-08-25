import data from './data';

const Overview = () => {
  return (
    <div>
      <h1 className="text-whitetext text-2xl font-bold mb-6">Overview - Today</h1>
    
    {
   data.map(overview => (
      <div className="px-6 py-6 mb-4 bg-darkdesaturatedbluecardbg rounded-md" key={overview.social.id}>
      <div className="flex justify-between mb-4">
      <h2 className="text-desaturatedbluetext font-bold">
        {overview.social.id}
      </h2>
      <img src={overview.facebook} alt="" />
      </div>
      <div className="flex justify-between">
        <h1 className="text-4xl text-whitetext font-bold">
          2344
        </h1>
        <div className="flex items-center gap-1">
          <img className="h-1" src={overview.iconUp} alt="" />
          <h1 className="font-bold text-limegreen">
            34903
          </h1>
        </div>
      </div>
    </div>
    ))
    }
    </div>
  )
}

export default Overview;