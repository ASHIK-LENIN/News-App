


const NewsCard = ({ title, description, src, url }) => {

  // Check if title and description are defined before using slice
  const slicedTitle = title ? title.slice(0, 50) : '';
  const slicedDescription = description ? String(description).slice(0, 90) : '';
 


  return (
    <div className="card bg-$blue-100 text-dark md-3 d-inline-block mx-3 my-3 px-2 py-2" style={{ maxWidth: '345px' }}>
      <div className="card-hover">
      <img src={src || 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fbreaking-news-picture-id476030981%3Fk%3D6%26m%3D476030981%26s%3D612x612%26w%3D0%26h%3Dtg50oQlz8rglSNKGO0dJhhJpkMRklhpmVw4A9NsUU2k%3D&f=1&nofb=1&ipt=019ce3e7946df2f3ec300e377d718f14c57f2e5fc2445caa53d57659f097a0b9&ipo=images'} style={{ height: '200px', width: '325px' }} className="card-img-top" alt="..." />

      </div>
      <div className="card-body">
        <h5 className="card-title">{slicedTitle}</h5>
        <p className="card-text">{slicedDescription || "Stay informed with our news app, delivering the latest headlines and breaking stories. "}</p>
        <a href={url} className="btn btn-primary">Know more</a>
      </div>
    </div>
  );
};

export default NewsCard;
