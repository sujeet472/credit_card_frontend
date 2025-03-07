import { useEffect } from "react";
import { useFetchUserProfileQuery } from "@/rtk/createApi";
import { useDispatch } from "react-redux";
import { setProfile } from "@/rtk/profileSlice";

const ProfileFetcher = () => {
  const dispatch = useDispatch();
  const { data: profile, isSuccess } = useFetchUserProfileQuery();

  useEffect(() => {
    if (isSuccess && profile) {
      dispatch(setProfile(profile));
    }
  }, [profile, isSuccess, dispatch]);

  return null;
};

export default ProfileFetcher;
