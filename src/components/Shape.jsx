import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { motion } from "framer-motion";
import polypath from "../drawPolygon";

const Shape = () => {
  const { shape, details, fill, stroke } = useContext(GlobalContext);

  let perimeter;
  switch (shape) {
    case "rectangle":
      perimeter = (+details.rectWidth + +details.rectLength) * 2;
      const rectVariants = {
        before: {
          strokeDashoffset: perimeter,
        },
        after: {
          strokeDashoffset: 0,
          transition: {
            type: "tween",
            duration: 2,
            ease: "linear",
          },
        },
      };

      return (
        <motion.rect
          className="shape"
          width={details.rectWidth}
          height={details.rectLength}
          style={{
            fill: fill,
            strokeWidth: 2,
            stroke: stroke,
            strokeDasharray: perimeter,
          }}
          x="5"
          y="5"
          variants={rectVariants}
          initial="before"
          animate="after"
        />
      );
    case "square":
      perimeter = +details.squareLength * 4;
      const squareVariants = {
        before: {
          strokeDashoffset: perimeter,
        },
        after: {
          strokeDashoffset: 0,
          transition: {
            type: "tween",
            duration: 2,
          },
        },
      };

      return (
        <motion.rect
          className="shape"
          width={details.squareLength}
          height={details.squareLength}
          style={{
            fill: fill,
            strokeWidth: 2,
            stroke: stroke,
            strokeDasharray: perimeter,
          }}
          x="5"
          y="5"
          variants={squareVariants}
          initial="before"
          animate="after"
        />
      );
    case "circle":
      perimeter = 2 * 3.14 * +details.circleRadius;
      const circleVariants = {
        before: {
          strokeDashoffset: perimeter,
        },
        after: {
          strokeDashoffset: 0,
          transition: {
            type: "tween",
            duration: 2,
          },
        },
      };

      return (
        <motion.circle
          className="shape"
          r={details.circleRadius}
          strokeWidth="2"
          stroke={stroke}
          strokeDasharray={perimeter}
          fill={fill}
          cx="150"
          cy="150"
          variants={circleVariants}
          initial="before"
          animate="after"
        />
      );
    case "ellipse":
      let a = +details.ellipseXradius;
      let b = +details.ellipseYradius;
      let h = ((a - b) * (a - b)) / ((a + b) * (a + b));
      perimeter = 3.14 * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));

      const ellipseVariants = {
        before: {
          strokeDashoffset: perimeter,
        },
        after: {
          strokeDashoffset: 0,
          transition: {
            type: "tween",
            duration: 2,
          },
        },
      };

      return (
        <motion.ellipse
          className="shape"
          rx={a}
          ry={b}
          style={{
            fill: fill,
            strokeWidth: 2,
            stroke: stroke,
            strokeDasharray: perimeter,
          }}
          cx="150"
          cy="150"
          variants={ellipseVariants}
          initial="before"
          animate="after"
        />
      );
    case "polygon":
      perimeter = +details.polygonRadius * (2 * +details.polygonSides);
      const polygonVariants = {
        before: {
          strokeDashoffset: perimeter,
        },
        after: {
          strokeDashoffset: 0,
          transition: {
            type: "tween",
            duration: 2,
          },
        },
      };

      return (
        <motion.path
          className="shape"
          d={polypath(150, 150, +details.polygonSides, +details.polygonRadius)}
          strokeWidth="2"
          stroke={stroke}
          strokeDasharray={perimeter}
          fill={fill}
          variants={polygonVariants}
          initial="before"
          animate="after"
        />
      );
    default:
      return <></>;
  }
};

export default Shape;
