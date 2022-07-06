import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { changeVisbility, VisibleReq } from "lib/api";
import useProfile from "lib/hooks/useProfile";
import { useCallback, useMemo } from "react";

const Visibility = ({ section }: { section: VisibleReq["section"] }) => {
  const { profile, mutateProfile } = useProfile({});

  const isPublic = useMemo(() => {
    if (!profile) return true;
    let visible = true;
    switch (section) {
      case "about":
        visible = profile.aboutData.isPublic;
        break;
      case "experiences":
        visible = profile.jobExperiencesData.isPublic;
        break;
      case "personalDetails":
        visible = profile.personalDetailsData.isPublic;
        break;
      default:
        visible = true;
    }
    return visible;
  }, [section, profile]);

  const handleClick = useCallback(async () => {
    try {
      const profile = await changeVisbility({ section, visible: !isPublic });
      mutateProfile(profile);
    } catch (e) {
      console.log((e as Error).message);
    }
  }, [isPublic, mutateProfile, section]);

  if (!profile) {
    return <div />;
  }

  if (isPublic) {
    return (
      <button onClick={handleClick}>
        <EyeIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
      </button>
    );
  } else {
    return (
      <button onClick={handleClick}>
        <EyeOffIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-700" />
      </button>
    );
  }
};

export default Visibility;
