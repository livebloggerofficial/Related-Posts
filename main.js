const allPosts = [
  {
    title: "How Search Engine Works?",
    link: "#",
    thumbnail: "images/blog1.jpg  ",
  },

  {
    title: "Get More Traffic With These Tricks",
    link: "#",
    thumbnail: "images/blog2.jpg",
  },

  {
    title: "What Is On My Office Desk?",
    link: "#",
    thumbnail: "images/blog3.jpg",
  },

  {
    title: "What Is The Future of AI?",
    link: "#",
    thumbnail: "images/blog4.jpg",
  },

  {
    title: "Get The Most Out Of ChatGPT",
    link: "#",
    thumbnail: "images/blog5.jpg",
  },
];

const relatedPosts = document.querySelector(".related-posts");

const generateReleatedPosts = () => {
  const shuffledList = allPosts.sort((a, b) => 0.5 - Math.random()).slice(0, 3);
  shuffledList.forEach((post) => {
    const thumbnailLink = document.createElement("a");
    thumbnailLink.href = post.link;

    const thumbnail = document.createElement("img");
    thumbnail.src = post.thumbnail;

    thumbnailLink.appendChild(thumbnail);

    const title = document.createElement("a");
    title.classList.add("post-title");
    title.href = post.link;
    title.innerHTML = post.title;

    const relatedPost = document.createElement("div");
    relatedPost.classList.add("related-post");

    relatedPost.appendChild(thumbnailLink);
    relatedPost.appendChild(title);

    relatedPosts.appendChild(relatedPost);
  });
};

generateReleatedPosts();
