export interface ParallaxCard {
  avatar: string;
  owner: string;
  location?: string;
  description: string;
  image: string;
}

export const parallaxCards: ParallaxCard[] = [
  {
    avatar: "/images/parallax-card/1/avatar.jpeg",
    owner: "Vlada Karpovich",
    description: "A Silhouette of a Person Sitting on a Log",
    image: "/images/parallax-card/1/image.jpg",
  },
  {
    avatar: "/images/parallax-card/2/avatar.jpeg",
    owner: "Roberto Shumski",
    description: "Aerial View of Mountains and Clouds",
    image: "/images/parallax-card/2/image.jpg",
  },
  {
    avatar: "/images/parallax-card/3/avatar.jpeg",
    owner: "Lukas Medvedevas",
    location: "Dublin, D, Ireland",
    description: "Person in Black Shirt Standing on Rock Formation",
    image: "/images/parallax-card/3/image.jpg",
  },
  {
    avatar: "/images/parallax-card/4/avatar.jpeg",
    owner: "Alejandro De Roa",
    description: "A river flowing under a bridge at sunset",
    image: "/images/parallax-card/4/image.jpg",
  },
];
