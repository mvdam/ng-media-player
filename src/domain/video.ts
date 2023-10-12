export type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  playbackUrl: string;
  description: string;
};

export type NewVideo = Omit<Video, 'id'>;
