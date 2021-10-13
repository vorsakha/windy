interface SongTypes {
  hits: {
    track: {
      key: string;
      title: string;
      subtitle: string;
      images: {
        coverart: string;
      };
      share: {
        snapchat: string;
      };
    };
  }[];
}
interface SongListTypes {
  playlistData: {
    tracks: {
      hits: {
        track: {
          key: string;
          title: string;
          subtitle: string;
          images: {
            coverart: string;
          };
          share: {
            snapchat: string;
          };
        };
      }[];
    };
  };
  loading: boolean;
}
interface SongBoxTypes {
  track: {
    key: string;
    title: string;
    subtitle: string;
    images: {
      coverart: string;
    };
    share: {
      snapchat: string;
    };
    date?: string;
    city?: string;
    temperature?: number;
  };
  fav?: boolean;
}
interface SongType {
  key: string;
  title: string;
  subtitle: string;
  images: {
    coverart: string;
  };
  share: {
    snapchat: string;
  };
  data: string;
}
