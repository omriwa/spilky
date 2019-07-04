import React, { memo } from "react";
import { SpaceshipDetails } from "../components/SpaceshipDetails";

export const SpacehipPage = memo(props => <SpaceshipDetails {...props} />);
