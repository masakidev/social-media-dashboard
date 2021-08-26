import CardOverview from "./CardOverview";
import data from "./data";

const Overview = () => {
  const pagesViews = data.map(item => (
    item.stats.pagesviews
  ))

  const likes = data.map(item => (
    item.stats.likes
  ))

  const profileViews = data.map(item => (
    item.stats.profileviews
  ))

  const retweets = data.map(item => (
    item.stats.retweets
  ))

  const totalViews = data.map(item => (
    item.stats.totalviews
  ))

  console.log(pagesViews)

  return (
    <div>
      <h1 className="text-whitetext text-2xl font-bold mb-6">
        Overview - Today
      </h1>
      <CardOverview 
      social="Facebook" 
      name="Pages Views" 
      number={pagesViews[0].number}
      porcentage={pagesViews[0].porcentage}
      logo={data[0].social.logo} 
      />
      <CardOverview 
      social="Facebook" 
      name="Likes"
      number={likes[0].number} 
      porcentage={likes[0].porcentage}
      logo={data[0].social.logo}
      />
      <CardOverview 
      social="Instagram" 
      name="Likes" 
      number={likes[2].number}
      porcentage={likes[2].porcentage}
      logo={data[2].social.logo}
      />
      <CardOverview 
      social="Instagram" 
      name="Profile Views"
      number={profileViews[2].number}
      porcentage={profileViews[2].porcentage}
      logo={data[2].social.logo}
      />
      <CardOverview 
      social="Twitter" 
      name="Retweets"
      number={retweets[1].number}
      porcentage={retweets[1].porcentage}
      logo={data[1].social.logo}
      />
      <CardOverview 
      social="Twitter" 
      name="Likes"
      number={likes[1].number}
      porcentage={likes[1].porcentage}
      logo={data[1].social.logo}
      />
      <CardOverview 
      social="Youtube" 
      name="Likes"
      number={likes[3].number}
      porcentage={likes[3].porcentage}
      logo={data[3].social.logo}
      />
      <CardOverview 
      social="Youtube" 
      name="Total Views"
      number={totalViews[3].number}
      porcentage={totalViews[3].porcentage}
      logo={data[3].social.logo}
      />
    </div>
  )
}

export default Overview;