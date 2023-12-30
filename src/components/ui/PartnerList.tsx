import React from 'react';
import PartnerCard from './PartnerCard/PartnerCard';

export default function PartnerList({showFavoriteIcon}:{showFavoriteIcon?:boolean}) {
  return (
    <div className='grid grid-cols-3 gap-x-7 gap-y-9'>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
      <PartnerCard showFavoriteIcon={showFavoriteIcon}/>
    </div>
  );
}
