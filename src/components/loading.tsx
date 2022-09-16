import React from "react";
import Marquee from "react-fast-marquee";
export default function loading() {
  let arr = new Array(15).fill(0);
  return (
    <div className="loading">
      {new Array(7).fill(0).map((mar, k) => {
        return (
          <Marquee direction="left" delay={k / 10} className="marquee" key={k}>
            {arr.map((sm, index) => (
              <img
                src={require("./../assets/loading.png")}
                alt="loading"
                key={index}
              />
            ))}
          </Marquee>
        );
      })}
    </div>
  );
}
