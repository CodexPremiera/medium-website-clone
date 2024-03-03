import React from 'react';
import ProfileFeed from "./ProfileFeed.jsx";
import ProfileInfo from "./ProfileInfo.jsx";
import useWindowResize from "../../../hooks/useWindowResize.js";

function ProfileContent() {
  const isTablet = useWindowResize(1024);

  const style = {
    container: `flex flex-row max-w-[1336px] justify-evenly mx-auto`,
    profile_feed: `flex-1 max-w-[728px] min-h-[1080px] pt-14 pb-12 px-6`,
    profile_info: `flex-1 max-w-fit max-h-[90vh] pt-10 pb-12 sticky top-[57px] relative border-l border-gray-200`
  }

  return (
    <div className={style.container}>
      <section className={style.profile_feed}>
        <ProfileFeed/>
      </section>

      {isTablet && (
        <section className={style.profile_info}>
          <ProfileInfo/>
        </section>
      )}
    </div>
  );
}

export default ProfileContent;