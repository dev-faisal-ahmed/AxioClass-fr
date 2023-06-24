import React from 'react';
import {
  BsFillPersonFill,
  BsThreeDotsVertical,
  BsFileEarmarkText,
} from 'react-icons/bs';
import { IoFolderOutline } from 'react-icons/io5';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ClassCard = ({
  className,
  instructor,
  img,
  credits,
  students,
  hours,
  classNumber,
}) => {
  return (
    <div className="bg-white text-gray-500 rounded-xl overflow-hidden">
      {/* Top part of card with title and img */}
      <div className="flex items-center gap-5 border-b border-gray-100 p-6">
        <img className="h-[55px] w-[55px] rounded-lg" src={img} alt="" />
        <div>
          <h2 className="font-semibold text-primary-900 mb-1">{className}</h2>
          <div className="flex items-center gap-2">
            <BsFillPersonFill className="text-lg" />
            <p className="text-sm">{instructor}</p>
          </div>
        </div>
        <BsThreeDotsVertical className="ms-auto mb-auto text-lg" />
      </div>

      {/* Bottom part of card with class info */}
      <div className="p-5 px-6 border-b border-gray-100 ">
        <div className="grid grid-cols-2 gap-3">
          <IconText
            icon={<IoFolderOutline />}
            title={`${classNumber} classes`}
          />
          <IconText icon={<BsFileEarmarkText />} title={`${credits} credits`} />
          <IconText
            icon={<HiOutlineUserGroup />}
            title={`${students} students`}
          />
          <IconText icon={<FiClock />} title={`${hours} hours/week`} />
        </div>
      </div>

      {/* Bottom button */}
      <Link className="p-4 block text-center hover:bg-primary-600 transition text-primary-600 hover:text-white">
        <p className="text-sm  font-semibold"> View Class</p>
      </Link>
    </div>
  );
};

const IconText = ({ icon, title }) => {
  return (
    <div className="flex gap-2 items-center">
      {icon}
      <p className="text-sm capitalize whitespace-nowrap">{title}</p>
    </div>
  );
};

export default ClassCard;
