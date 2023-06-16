const ProfileIcon = ({ size, img, style }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "50%",
        ...style,
      }}
    >
      &nbsp;
    </div>
  );
};
export default ProfileIcon;
