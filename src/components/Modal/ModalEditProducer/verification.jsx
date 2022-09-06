export const verification = async (data, infos) => {
  let newData = {
    ...data,
    social_media: {
      instagram: data.instagram,
      facebook: data.facebook,
      youtube: data.youtube,
      twitter: data.twitter,
    },
  };

  delete newData.instagram;
  delete newData.facebook;
  delete newData.youtube;
  delete newData.twitter;

  if (newData.name === "") {
    delete newData.name;
  }
  if (newData.artistic_name === "") {
    delete newData.artistic_name;
  }
  if (newData.bio === "") {
    delete newData.bio;
  }
  if (newData.profile_picture === "") {
    delete newData.profile_picture;
  }
  if (newData.genre.length === 0) {
    delete newData.genre;
  }
  if (
    newData.social_media.instagram === "" &&
    newData.social_media.facebook === "" &&
    newData.social_media.youtube === "" &&
    newData.social_media.twitter === ""
  ) {
    delete newData.social_media;
  } else {
    if (newData.social_media.instagram === "") {
      newData.social_media.instagram = infos[0].social_media.instagram;
    }
    if (newData.social_media.facebook === "") {
      newData.social_media.facebook = infos[0].social_media.facebook;
    }
    if (newData.social_media.youtube === "") {
      newData.social_media.youtube = infos[0].social_media.youtube;
    }
    if (newData.social_media.twitter === "") {
      newData.social_media.twitter = infos[0].social_media.twitter;
    }
  }
  return newData;
};
