import React from 'react';

const HeaderItem = ({ name, Icon, onClick }) => {
  return (
    <div className='flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3 mt-3' onClick={onClick}>
      <Icon />
      <h2 className=''>{name}</h2>
    </div>
  );
};

export default HeaderItem;
