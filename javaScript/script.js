const loadCategories = async () => {
  // fetch the data
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  const data = await response.json();
  displayCategories(data.categories);
};

// individual video display
const loadCategoriesVideo =async(id)=>{
    // console.log(id);
    
    const response =await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
    const data = await response.json();
      displayVideo(data.category);
    
}

// {category_id: '1001', category: 'Music'}
const displayCategories = (categories) => {
  // console.log(categories);
  const buttonContainer = document.getElementById("button-container");

  for (const category of categories) {
    // console.log(category);
    // categoryDiv create
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
               <button onclick="loadCategoriesVideo(${category.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>
        `;
    buttonContainer.appendChild(categoryDiv);
  }
};
loadCategories();

// video categories data load

//  {
//   "category_id": "1001",
//   "video_id": "aaaa",
//   "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//   "title": "Shape of You",
//   "authors": [
//     {
//       "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//       "profile_name": "Olivia Mitchell",
//       "verified": ""
//     }
//   ],
//   "others": {
//     "views": "100K",
//     "posted_date": "16278"
//   },
//   "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

const videoCategories = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/videos"
  );
  const data = await response.json();
  displayVideo(data.videos);
};
const displayVideo = (videos) => {
  // console.log(videos);
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML=""

  for (const video of videos) {
    // console.log(video);
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
            <div class="card bg-base-100  shadow-sm">
  <figure class="relative">
    <img
     class="w-full h-50 object-cover"
      src=${video.thumbnail}
      alt="videos" />
      <span class="absolute bottom-2 right-2 bg-black text-white p-3 rounded-xl">${video.others.posted_date}</span>
  </figure>
  <div class="card-body">
    <h2 class="card-title">
    <img class="w-10 h-10 rounded-full object-cover border-2" src=${video.authors[0].profile_picture}>
      <div class="badge badge-secondary">${video.title}</div>
    </h2>
    <p>${video.description}</p>
    <div class="card-actions">
      <div>${video.authors[0].profile_name}</div>
      <p>${video.authors[0].verified}</p>
    </div>
    <p class="badge badge-primary">${video.others.views}</p>
  </div>
</div>
        `
        videoContainer.appendChild(createDiv)
  }
};

