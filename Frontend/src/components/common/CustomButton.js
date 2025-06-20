import React from "react";
import { Button } from "@nextui-org/react";

function CustomButton({ text, variant, components, icon, fn }) {
  return (
    <Button
      className="px-10 py-6 text-lg"
      color="secondary"
      variant={variant}
      size="md"
      radius="small"
      onPress={fn}
    >
      {icon} {text} {components}
    </Button>
  );
}

export default CustomButton;
