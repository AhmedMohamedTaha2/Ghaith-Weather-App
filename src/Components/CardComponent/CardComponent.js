import DegreeComponent from "./DegreeComponent";
import LocationAndDateComponent from "./LocationAndDateComponent";
import MinAndMaxComponent from "./MinAndMaxComponent";

export default function CardComponent() {
  const style = {
    backdropFilter: 'blur(10px) saturate(180%)',
    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    WebkitBoxShadow: '0px 0px 8px 0px rgba(255,255,255,1)', 
    MozBoxShadow: '0px 0px 8px 0px rgba(255,255,255,1)', 
    boxShadow: '0px 0px 8px 0px rgba(255,255,255,1)', 
  };

  return (
    <div
      className="card h-full w-5/6 p-4 sm:w-1/3 flex flex-col justify-between items-center"
      style={style}
    >
      <LocationAndDateComponent />
      <DegreeComponent />
      <MinAndMaxComponent />
    </div>
  );
}
