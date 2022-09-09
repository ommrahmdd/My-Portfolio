import React from "react";

type navProps = {
  name: string;
};
export default function Nav(props: navProps) {
  return (
    <div className="customNav">
      <p className="customNav__p">{props.name}</p>
    </div>
  );
}
