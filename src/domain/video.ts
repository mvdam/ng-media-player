export type Video = {
  id: number;
  title: string;
  thumbnailUrl: string;
  playbackUrl: string;
  description?: string;
};

export type NewVideo = Omit<Video, 'id'>;
