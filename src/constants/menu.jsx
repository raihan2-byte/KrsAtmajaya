import React from "react";
import FolderCokelat from "../assets/folder-cokelat.png";

const Menu = [
  {
    title: "FAVORITES",
    icon: "",
  },
  {
    title: "HOME",
    icon: "",
  },
  {
    title: "SELF SERVICE",
    icon: "",
    childrens: [
      {
        title: "Academic Planning",
        path: "/",
        childrens: [
          {
            title: "Class Search",
            path: "/",
          },
          {
            title: "My Course History",
            path: "/",
          },
          {
            title: "My Weekly History",
            path: "/",
          },
          {
            title: "Enrollment: Add/Drop Classes",
            path: "/",
          },
          {
            title: "Enrollment: Shoping Cart",
            path: "/",
          },
        ],
      },
      {
        title: "Academic Records",
        path: "/",
        childrens : [
          {
            title: "My Course History",
            path: "/",
          },
          {
            title: "My Advisors",
            path: "/",
          },
          {
            title: "My Attendance Roaster",
            path: "/",
          },
          
        ]
      },
     
    ],
  },
  {
    title: "STUDENT FINANCIALS",
    icon: "",
    childrens: [
      {
        title: "Campus Finances",
        path: "/",
        childrens:[
          {
            title: "Account Inquiry",
            path:"/"
          },
          {
            title: "Enroll in Payment Plan",
            path:"/"
          },
          {
            title: "Virtual Bank Account Details",
            path:"/"
          },
        ]
      },
    ],
  },
  {
    title: "CAMPUS COMUNITY",
    icon: "",
    childrens: [
      {
        title: "Degree/Progress Graduation",
        childrens:[
          {
            title:"My Academic Requirements",
            path:"/",
          },
          {
            title:"View Transfer Credit Report",
            path:"/",
          },
          {
            title:"Research Activities",
            path:"/",
          },
          {
            title:"Student Grade Detail",
            path:"/",
          },
          {
            title:"Graduation Registration",
            path:"/",
          },
        ]
      }
    ]
  },
  {
    title: "REPORTING TOOLS",
    icon: "",
    path: "/",
  },
  {
    title: "PEPLE TOOLS",
    icon: "",
  
  },
  {
    title: "CEK JADWAL SIDANG",
    icon: "",
    path: "/",
  },
  {
    title: "ACADEMIC EVALUATION",
    icon: "",
    
  },
  {
    title: "MY EXAM TIMETABLE",
    icon: "",
    path: "/",
  },
  {
    title: "STUDENT CENTER",
    icon: "",
    
  },
  {
    title: "KUESIONER MAHASISWA BARU",
    icon: "",
    path: "/",
  },
  {
    title: "SKP RECAP - STUDENT",
    icon: "",
    
  },
  {
    title: "UPLOAD SKP - STUDENT",
    icon: "",
    path: "/",
  },
  {
    title: "UPLOAD DOCUMENT MAHASISWA",
    icon: "",
    
  },
  {
    title: "SERVICE REQUEST",
    icon: "",
    path: "/",
  },
  {
    title: "STUDENT STATUS",
    icon: "",
    
  },
  {
    title: "KUESIONER KEPUASAN MAHASISWA",
    icon: "",
    path: "/",
  },
  {
    title: "KUESIONER PEMETAAN MHS BARU",
    icon: "",
    
  },
  {
    title: "REQUEST LETTERS",
    icon: "",
    path: "/",
  },
 
];

export default Menu;











