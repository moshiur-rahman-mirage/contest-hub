import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import { Button, Typography } from "@mui/material";

const MotionButton = ({ to }) => {
  return (
    <motion.div
      whileHover={{ scaleX: 1 }}
      style={{ position: "relative", display: "inline-block" }}
    >
      <Button
        sx={{
          mx: 0,
          px: 3,
          color: "primary.dark",
          display: "block",
          position: "relative",
        }}
      >
        <Link
          to={`${to}`}
          style={{
            textDecoration: "none",
            color: "inherit",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              my: 2,
              color: "primary.dark",
              display: "inline",
            }}
          >
            {to}
          </Typography>
        </Link>
      </Button>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 2 }}
        style={{
          height: 2,
          background: "black",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          transformOrigin: "bottom",
        }}
      />
    </motion.div>
  );
};

export { MotionButton };
