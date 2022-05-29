import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
const ProfileLeft = () => {
  return (
    <div className='.ProfileSide {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        overflow: auto;
    }'>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft
