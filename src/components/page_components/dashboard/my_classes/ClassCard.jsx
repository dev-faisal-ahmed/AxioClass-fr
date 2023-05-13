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

const ClassCard = () => {
  return (
    <div className="bg-white text-gray-500 rounded-lg overflow-hidden">
      {/* Top part of card with title and img */}
      <div className="flex items-center gap-5 border-b border-gray-100 p-5">
        <img
          className="h-[55px] w-[55px] rounded-lg"
          src="https://th.bing.com/th/id/R.d5e571abb4b3385e35b6fd2567a2ce72?rik=wf7RaVbYYkquJQ&pid=ImgRaw&r=0"
          alt=""
        />
        <div>
          <h2 className="font-semibold text-blue-900 mb-1">
            Interaction Engineering
          </h2>
          <div className="flex items-center gap-2">
            <BsFillPersonFill className="text-lg" />
            <p className="text-sm">Md Shahidul Islam</p>
          </div>
        </div>
        <BsThreeDotsVertical className="ms-auto mb-auto text-lg" />
      </div>

      {/* Bottom part of card with class info */}
      <div className="p-5 border-b border-gray-100 ">
        <div className="grid grid-cols-2 gap-3">
          <IconText icon={<IoFolderOutline />} title={'B class'} />
          <IconText icon={<BsFileEarmarkText />} title={'3 Credits'} />
          <IconText icon={<HiOutlineUserGroup />} title={'35 Students'} />
          <IconText icon={<FiClock />} title={'3 hours/week'} />
        </div>
      </div>

      {/* Bottom button */}
      <Link className="p-5 block text-center hover:bg-primary-600 transition text-primary-600 hover:text-white">
        <p className="text-sm  font-semibold">
          {' '}
          View Class
        </p>
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
