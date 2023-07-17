import React from 'react';
import { FaUserGraduate, FaUserSecret } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';
import { TbCurrencyDollarOff, TbCurrencyTaka } from 'react-icons/tb';
import { RiBookReadFill, RiBookFill, RiInformationLine } from 'react-icons/ri';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
const StatAdmin = ({
  totalCourses,
  totalDemand,
  totalRevenue,
  totalStudent,
  totalTeacher,
}) => {
  // function
  const statBox = ({
    icon,
    title,
    amount,
    textColor,
    color,
    growth,
    growthAmount,
    currency,
  }) => {
    color = color || 'bg-primary-100';
    textColor = textColor || 'text-primary-600';
    return (
      <div
        className={`w-full p-4 rounded-lg border border-primary-25 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-100 cursor-pointer transition`}
      >
        <div className="w-full flex items-center gap-5 relative">
          <div className={`p-3 center--xy rounded-lg ${color} ${textColor}`}>
            {icon}
          </div>
          <div>
            <div className="w-full flex justify-between items-center gap-5 text-gray-500">
              <span className="text-sm">{title}</span>
              {/* <RiInformationLine className='text-lg cursor-pointer hover:text-primary-600'/> */}
            </div>
            <div className="flex items-end gap-2">
              <h2 className="text-xl font-semibold text-primary-900 mt-1">
                {currency ? <span>&#2547;</span> : ''}
                {amount}
              </h2>
              <div
                className={
                  'flex items-end ' +
                  (growth === 'up' ? 'text-green-600' : 'text-red-600')
                }
              >
                {growth === 'up' ? (
                  <TiArrowSortedUp className="text-xl" />
                ) : (
                  <TiArrowSortedDown className="text-xl" />
                )}

                <p className="text-sm font-semibold">{growthAmount}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-5 bg-white rounded-xl border border-primary-100 shadow-xl shadow-primary-50 overflow-hidden ">
      {statBox({
        icon: <FaUserGraduate size={30} />,
        title: 'Students',
        amount: totalStudent,
        growth: 'up',
        growthAmount: 5.67,
      })}

      {statBox({
        icon: <FaUserSecret size={30} />,
        title: 'Faculties',
        amount: totalTeacher,
        textColor: 'text-orange-600',
        color: 'bg-orange-100',
        growth: 'down',
        growthAmount: 2.67,
      })}
      {statBox({
        icon: <HiUserGroup size={30} />,
        title: 'Total Employee',
        amount: 287,
        textColor: 'text-purple-600',
        color: 'bg-purple-100',
        growth: 'down',
        growthAmount: 5.67,
      })}
      {statBox({
        icon: <RiBookReadFill size={30} />,
        title: 'Departments',
        amount: 4,
        textColor: 'text-indigo-600',
        color: 'bg-indigo-100',
        growth: 'up',
        growthAmount: 10.67,
      })}
      {statBox({
        icon: <RiBookFill size={30} />,
        title: 'Courses',
        amount: totalCourses,
        textColor: 'text-blue-600',
        color: 'bg-blue-100',
        growth: 'up',
        growthAmount: 8.7,
      })}

      {statBox({
        icon: <TbCurrencyTaka size={30} />,
        title: 'Total Demand',
        amount: totalDemand,
        color: 'bg-lime-100',
        textColor: 'text-lime-600',
        growth: 'down',
        growthAmount: 5.67,
        currency: true,
      })}

      {statBox({
        icon: <GiTakeMyMoney size={30} />,
        title: 'Total Received',
        amount: totalRevenue,
        textColor: 'text-green-600',
        color: 'bg-green-100',
        growth: 'up',
        growthAmount: 5.67,
        currency: true,
      })}
      {statBox({
        icon: <TbCurrencyDollarOff size={30} />,
        title: 'Total Dues',
        amount: 56,
        textColor: 'text-red-600',
        color: 'bg-red-100',
        growth: 'up',
        growthAmount: 5.67,
      })}
    </div>
  );
};

export default StatAdmin;
