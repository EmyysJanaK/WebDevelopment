document.addEventListener("DOMContentLoaded", function () {
    const framesData = [
      {
        title: "About Us",
        content: `EXMO 2023 Flagship Exhibition is a premier math exhibition held annually in Sri Lanka. Our mission is to promote the importance of mathematics and its applications in various fields. We believe that mathematics is the foundation of all sciences and plays a crucial role in shaping the future of our world.
          Our exhibition features the latest advancements in mathematical research, innovative solutions to real-world problems, and interactive displays that engage and inspire visitors of all ages. We bring together leading experts, researchers, educators, and students from around the world to exchange ideas, collaborate, and learn from each other. Join us at EXMO 2023 Flagship Exhibition to discover the fascinating world of mathematics and its endless possibilities.`,
      },
      {
        title: "Our Services",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lorem mauris. Nunc consectetur metus vitae ultrices.",
      },
      {
        title: "Pictures",
        content: "Add image gallery or individual images here",
      },
      {
        title: "Videos",
        content: "Add video gallery or individual videos here",
      },
      {
        title: "Location",
        content: "University of Moratuwa, Bandaranayake Mawatha, Moratuwa 10400",
      },
      {
        title: "Contact Us Now",
        content: "Email: contact@example.com\nPhone: +1 123-456-7890",
      },
      {
        title: "Made By",
        content: "Mathematics Society\n© 2023 Mathematics Department of University of Moratuwa",
      },
    ];
  
    const framesContainer = document.getElementById("frames-container");
  
    framesData.forEach((frameData) => {
      const frame = document.createElement("div");
      frame.classList.add("frame");
  
      const frameTitle = document.createElement("h2");
      frameTitle.textContent = frameData.title;
  
      const frameContent = document.createElement("p");
      frameContent.textContent = frameData.content;
  
      frame.appendChild(frameTitle);
      frame.appendChild(frameContent);
  
      framesContainer.appendChild(frame);
    });
  });
  