export interface Image {
  id: number;
  description: string;
  urls: { small: string; regular: string };
  likes: string;
}

export interface ModalImage {
  isOpen: boolean;
  onClose?: () => void;
  imgUrl: string;
  imgAlt: string;
  description: string;
}

export interface FetchImages {
  results: Image[];
  total: number;
  total_pages: number;
}
