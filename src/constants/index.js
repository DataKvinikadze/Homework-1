import {
  Background,
  iPhone,
  Left,
  Logo,
  Notification,
  Right,
  Search,
  Minus,
  Plus,
  TrailBackground,
  Category,
} from "../Assets/index";

export const navBar = [
  { id: "home", title: "Home" },
  { id: "Movies & Shows", title: "Movies and Shows" },
  { id: "Support", title: "Support" },
  { id: "Subscriptions", title: "Subscriptions" },
];

export const headerTitle = {
  title: "The Best Streaming Experience",
  subTitle:
    "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.",
};

export const category = {
  title: "Explore our wide variety of categories",
  subTitle:
    "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new",
  content: [
    {
      title: "Action",
      img: Category,
    },
    {
      title: "Adventure",
      img: Category,
    },
    {
      title: "Comedy",
      img: Category,
    },
    {
      title: "Drama",
      img: Category,
    },
    {
      title: "Horror",
      img: Category,
    },
  ],
};

export const device = {
  title: "We Provide you streaming experience across various devices.",
  subTitle:
    "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.",
  content: [
    {
      image: iPhone,
      title: "Smartphones",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      image: iPhone,
      title: "Smartphones",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      image: iPhone,
      title: "Smartphones",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      image: iPhone,
      title: "Smartphones",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      image: iPhone,
      title: "Smartphones",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      image: iPhone,
      title: "Smartphones",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
  ],
};

export const plan = {
  title: "Choose the plan that's right for you",
  subTitle:
    "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!",
  content: [
    {
      id: "1",
      title: "Basic Plan",
      content:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: "$9.99",
      duration: "/month",
    },
    {
      id: "2",
      title: "Basic Plan",
      content:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: "$9.99",
      duration: "/month",
    },
    {
      id: "3",
      title: "Premium Plan",
      content:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      price: "$14.99",
      duration: "/month",
    },
  ],
};

export const Questions = {
  title: "Frequently Asked Questions",
  subTitle:
    "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.",
  content: {
    left: [
      {
        id: "1",
        icon: Minus,
        title: "What is StreamVibe?",
        content:
          "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
      },
      {
        id: "2",
        icon: Plus,
        title: "How much does StreamVibe cost?",
      },
      {
        id: "3",
        icon: Plus,
        title: "What content is available on StreamVibe?",
      },
      {
        id: "4",
        icon: Plus,
        title: "How can I watch StreamVibe?",
      },
    ],
    right: [
      {
        id: "5",
        icon: Plus,
        title: "How do I sign up for StreamVibe?",
      },
      {
        id: "6",
        icon: Plus,
        title: "What is the StreamVibe free trial?",
      },
      {
        id: "7",
        icon: Plus,
        title: "How do I contact StreamVibe customer support?",
      },
      {
        id: "8",
        icon: Plus,
        title: "What are the StreamVibe payment methods?",
      },
    ],
  },
};

export const freeTrail = {
  title: "Start your free trial today!",
  subTitle:
    "This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.",
  img: TrailBackground,
};
