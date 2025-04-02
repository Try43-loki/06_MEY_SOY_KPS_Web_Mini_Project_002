import getCurrentUserService from "@/services/user.service";
import { BellIcon } from "lucide-react";
import React from "react";

const ProfileComponent = async () => {
  const profileData = await getCurrentUserService();
  const { payload } = profileData;

  return (
    <>
      <section className="flex justify-center items-center gap-4">
        <BellIcon className="text-xl" />
        <article className="flex justify-center items-center gap-3">
          <figure className="w-[50px] h-[50px] overflow-hidden rounded-full">
            <img
              src={payload?.profile}
              alt={payload?.usename}
              className=" w-full  rounded-full object-cover"
            />
          </figure>
          <span className="flex flex-col items-start justify-start ">
            <h4 className="text-lg font-semibold leading-5">
              {payload?.username}
            </h4>
            <span className="text-sm font-medium text-persian-green leading-5">
              {payload?.email}
            </span>
          </span>
        </article>
      </section>
    </>
  );
};

export default ProfileComponent;
