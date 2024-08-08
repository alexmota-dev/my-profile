interface NavigationProps {
  href: string;
  children: React.ReactNode;
}

export const NavigationPrimaryItem: React.FC<NavigationProps> = (props) => {
  return (
    <a
      href={props.href}
      style={{
        display: "flex",
        cursor: "pointer",
        flexDirection: "row",
        padding: "10px",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      {props.children}
    </a>
  );
};
