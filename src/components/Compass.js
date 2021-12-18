import * as React from "react";
import { RadialGauge } from "@progress/kendo-react-gauges";

const radialOptions = {
  pointer: [
    {
      value: 0,
      color: "blue",
    },
    {
      value: 0,
      color: "orange",
    },
  ],
  scale: { startAngle: 0, endAngle: 360 },
};

const Compass = (props) => {
  const [radialOptions, setRadialOptions] = React.useState({});
  React.useEffect(() => {
    setRadialOptions(getUpToDateObj(props.his));
  }, [props]);

  return <RadialGauge {...radialOptions} />;
};

function getUpToDateObj(val) {
  let radial = {};
  return (radial = {
    pointer: [
      {
        value: 0,
        color: "blue",
      },
      {
        value: val,
        color: "orange",
      },
    ],
    scale: { startAngle: 0, endAngle: 360 },
  });
}
export default Compass;
