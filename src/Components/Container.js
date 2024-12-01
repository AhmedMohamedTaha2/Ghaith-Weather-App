import CardComponent from "./CardComponent/CardComponent";

export default function ContainerComponent() {
  const style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Images/bgPattern.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment:'fixed'
  };

  return (
    <div className="main-container h-auto my-1 w-full mx-auto flex flex-col items-center pt-20 pb-40" style={style}>
      <CardComponent />
    </div>
  );
}
