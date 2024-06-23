interface ActivityProps {
    img: string;
    distance: number;
}

const Activity: React.FC<ActivityProps> = ({ img, distance }) => {
    return (
        <div className="activity">
            <img src={img} />
            <h2>{distance} km away</h2>
        </div>
    );
};

export default Activity;