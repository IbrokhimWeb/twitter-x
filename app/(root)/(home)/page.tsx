import Auth from "@/components/auth";
import React from "react";

const Page = () => {
  const user = false;

  if (!user) return <Auth />;

  return <div>Page</div>;
};

export default Page;
