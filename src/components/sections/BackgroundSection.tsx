interface BackgroundSectionProps {
  weather: string;
  children: React.ReactNode;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  weather,
  children,
}) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/${weather}.png')` }}
    >
      {children}
    </div>
  );
};
export default BackgroundSection;
