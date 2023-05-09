export const ProfileIcon = ({ size, img }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "50%",
      }}
    >
      &nbsp;
    </div>
  );
};
