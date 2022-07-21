import React from "react";
import * as Label from '@radix-ui/react-label';

export default function PersonalInfo() {
return (
<div>
<h1>Enter your Information</h1>
  <Label htmlFor="Name" css={{ lineHeight: '35px', marginRight: 15 }}>
    Name
  </Label>
  <input type="text" id="Name" defaultValue="First Last" />
</div>
);
}
