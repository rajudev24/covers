"use client";

import React from "react";
import { Flex, Spin } from "antd";

export default function loading() {
  return (
    <Flex align="center" gap="middle">
      <Spin size="large" />
    </Flex>
  );
}
