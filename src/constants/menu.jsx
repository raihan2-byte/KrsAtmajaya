import React from "react";
import FolderCokelat from "../assets/folder-cokelat.png";

const Menu = [
  {
    title: "FAVORITES",
    icon: "📱",
  },
  {
    title: "HOME",
    icon: "📱",
  },
  {
    title: "SELF SERVICE",
    icon: "👕",
    childrens: [
      {
        title: "Academic Planning",
        path: "/sidebars",
        childrens: [
          {
            title: "Class Search",
            path: "/Mens",
          },
          {
            title: "My Course History",
            path: "/Mens",
          },
          {
            title: "My Weekly History",
            path: "/Mens",
          },
          {
            title: "Enrollment: Add/Drop Classes",
            path: "/krs",
          },
          {
            title: "Enrollment: Shoping Cart",
            path: "/Mens",
          },
        ],
      },
      {
        title: "Academic Records",
        path: "/Womens",
        childrens : [
          {
            title: "My Course History",
            path: "/Mens",
          },
          {
            title: "My Advisors",
            path: "/Mens",
          },
          {
            title: "My Attendance Roaster",
            path: "/Mens",
          },
          
        ]
      },
     
    ],
  },
  {
    title: "STUDENT FINANCIALS",
    icon: "🏡",
    childrens: [
      {
        title: "Campus Finances",
        path: "/Furniture",
        childrens:[
          {
            title: "Account Inquiry",
            path:"/sidebars"
          },
          {
            title: "Enroll in Payment Plan",
            path:"/sidebars"
          },
          {
            title: "Virtual Bank Account Details",
            path:"/sidebars"
          },
        ]
      },
    ],
  },
  {
    title: "CAMPUS COMUNITY",
    icon: "📞",
    childrens: [
      {
        title: "Degree/Progress Graduation",
        childrens:[
          {
            title:"My Academic Requirements",
            path:"/sidebars",
          },
          {
            title:"View Transfer Credit Report",
            path:"/sidebars",
          },
          {
            title:"Research Activities",
            path:"/sidebars",
          },
          {
            title:"Student Grade Detail",
            path:"/sidebars",
          },
          {
            title:"Graduation Registration",
            path:"/sidebars",
          },
        ]
      }
    ]
  },
  {
    title: "REPORTING TOOLS",
    icon: "🐞",
    path: "/report-bug",
  },
  {
    title: "PEPLE TOOLS",
    icon: "👨‍🦱",
  
  },
  {
    title: "CEK JADWAL SIDANG",
    icon: "🐞",
    path: "/report-bug",
  },
  {
    title: "ACADEMIC EVALUATION",
    icon: "👨‍🦱",
    
  },
  {
    title: "MY EXAM TIMETABLE",
    icon: "🐞",
    path: "/report-bug",
  },
  {
    title: "STUDENT CENTER",
    icon: "👨‍🦱",
    
  },
  {
    title: "KUESIONER MAHASISWA BARU",
    icon: "🐞",
    path: "/report-bug",
  },
  {
    title: "SKP RECAP - STUDENT",
    icon: "👨‍🦱",
    
  },
  {
    title: "UPLOAD SKP - STUDENT",
    icon: "🐞",
    path: "/report-bug",
  },
  {
    title: "UPLOAD DOCUMENT MAHASISWA",
    icon: "👨‍🦱",
    
  },
  {
    title: "SERVICE REQUEST",
    icon: "🐞",
    path: "/report-bug",
  },
  {
    title: "STUDENT STATUS",
    icon: "👨‍🦱",
    
  },
  {
    title: "KUESIONER KEPUASAN MAHASISWA",
    icon: "🐞",
    path: "/report-bug",
  },
  {
    title: "KUESIONER PEMETAAN MHS BARU",
    icon: "👨‍🦱",
    
  },
  {
    title: "REQUEST LETTERS",
    icon: "🐞",
    path: "/report-bug",
  },
 
];

export default Menu;











