import ImageShow from './ImageShow';

export default function ImageList({ images }) {
  // The 'images' prop, passed from the parent component (App.js), is an array of image objects.
  // We use the .map() method to iterate over this array and create a new array of ImageShow components.
  // Each ImageShow component receives an 'image' object as a prop and a unique key prop, which is the id of the 'image'.
  // The key prop is important for React's diffing algorithm and should be unique amongst siblings.
  const renderedImages = images.map(image => {
    return <ImageShow key={image.id} image={image} />;
  });

  // The array of ImageShow components is rendered inside a div with a class of 'image-list'.
  return <div className='image-list'>{renderedImages}</div>;
}
