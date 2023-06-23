import React from 'react';

interface GenericProductHeaderProps {
  header: string;
  secondHeader: string;
  text: string;
}

export const GenericProductHeader = ({
  header,
  secondHeader,
  text,
}: GenericProductHeaderProps) => {
  return (
    <div className="pb-5">
      <p className="text-center text-sm font-semibold">{header}</p>
      <h2 className="text-center text-xl font-bold">{secondHeader}</h2>
      <div className="flex justify-center pt-1">
        <div className=" bg-pink-200 w-10 h-px"></div>
      </div>
      <p className="text-center text-sm font-medium">{text}</p>
    </div>
  );
};
