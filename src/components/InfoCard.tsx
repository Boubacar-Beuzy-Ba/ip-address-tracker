
interface InfoCardProps {
    name: string,
    description: string,
}

export const InfoCard = ({...props}: InfoCardProps) => {
    return (
      <div className="flex flex-col items-center content-center justify-center w-full h-full mt-8">
        <h3 className="text-sm font-semibold text-gray-400">{props.name}</h3>
        <p className="text-gray-800 font-bold mx-2">{props.description}</p>
      </div>
    );
}