import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCards from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import "./ProfileSide.css";

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <ProfileCards />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide
