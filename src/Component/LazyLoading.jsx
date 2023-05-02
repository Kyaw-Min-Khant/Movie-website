import React from 'react'
import { Loader } from '@mantine/core';
const LazyLoading = () => {
  return (
    <div className=" h-screen flex justify-center items-center bg-[#1C1C1E]">
      <Loader color="red" size="xl" variant="bars" />
    </div>
  );
}

export default LazyLoading